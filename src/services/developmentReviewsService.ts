/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Review, SubmitReviewInput } from '../types';

const DEV_REVIEWS_KEY = 'studypilot_dev_reviews';

export interface SubmitReviewResponse {
  success: boolean;
  message: string;
  isDevelopmentMode?: boolean;
  review?: Review;
}

export const developmentReviewsService = {
  /**
   * Reads approved reviews from browser localStorage.
   */
  async getApprovedReviews(
    page: number = 1,
    limit: number = 6
  ): Promise<{
    reviews: Review[];
    hasMore: boolean;
    total: number;
  }> {
    try {
      const stored = localStorage.getItem(DEV_REVIEWS_KEY);
      const allReviews: Review[] = stored ? JSON.parse(stored) : [];

      // Sort newest first
      const sorted = [...allReviews].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginated = sorted.slice(startIndex, endIndex);
      const hasMore = endIndex < sorted.length;

      return {
        reviews: paginated,
        hasMore,
        total: sorted.length,
      };
    } catch {
      return {
        reviews: [],
        hasMore: false,
        total: 0,
      };
    }
  },

  /**
   * Validates and saves a new review to localStorage, marking it as 'approved'
   * for immediate development and testing preview.
   */
  async submitReview(input: SubmitReviewInput): Promise<SubmitReviewResponse> {
    const trimmedName = (input.displayName || '').trim();
    const trimmedComment = (input.comment || '').trim();

    if (!trimmedName || trimmedName.length < 2) {
      return {
        success: false,
        message: 'Please provide a valid display name (at least 2 characters).',
      };
    }

    if (trimmedName.length > 50) {
      return {
        success: false,
        message: 'Display name cannot exceed 50 characters.',
      };
    }

    if (!trimmedComment || trimmedComment.length < 5) {
      return {
        success: false,
        message: 'Please share a meaningful comment (at least 5 characters).',
      };
    }

    if (trimmedComment.length > 600) {
      return {
        success: false,
        message: 'Comment exceeds 600 characters limit.',
      };
    }

    if (input.rating !== undefined && (input.rating < 1 || input.rating > 5)) {
      return {
        success: false,
        message: 'Rating must be between 1 and 5 stars.',
      };
    }

    // Small delay to simulate realistic interaction
    await new Promise((r) => setTimeout(r, 250));

    const newReview: Review = {
      id: `dev_rev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      displayName: trimmedName,
      country: input.country || undefined,
      rating: input.rating,
      comment: trimmedComment,
      createdAt: new Date().toISOString(),
      status: 'approved', // Auto-approved strictly for local development preview
    };

    try {
      const stored = localStorage.getItem(DEV_REVIEWS_KEY);
      const currentList: Review[] = stored ? JSON.parse(stored) : [];
      currentList.unshift(newReview);
      localStorage.setItem(DEV_REVIEWS_KEY, JSON.stringify(currentList));

      return {
        success: true,
        isDevelopmentMode: true,
        message: 'Review saved to local development storage and approved for testing.',
        review: newReview,
      };
    } catch {
      return {
        success: false,
        message: 'Failed to save review to browser storage.',
      };
    }
  },

  /**
   * Helper to clear development test reviews.
   */
  clearDevelopmentReviews(): void {
    try {
      localStorage.removeItem(DEV_REVIEWS_KEY);
    } catch {
      // ignore
    }
  },
};
