/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Review, SubmitReviewInput } from '../types';
import { SubmitReviewResponse } from './developmentReviewsService';

export const productionReviewsService = {
  /**
   * Fetches approved reviews from the production API.
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
      const res = await fetch(`/api/reviews?page=${page}&limit=${limit}`);
      if (!res.ok) throw new Error('Failed to load reviews');
      return await res.json();
    } catch {
      return {
        reviews: [],
        hasMore: false,
        total: 0,
      };
    }
  },

  /**
   * Submits a student review to the production moderation API.
   */
  async submitReview(input: SubmitReviewInput): Promise<SubmitReviewResponse> {
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });

      const data = await res.json();
      if (!res.ok) {
        return {
          success: false,
          message: data.error || 'Failed to submit review.',
        };
      }

      return {
        success: true,
        message: 'Thank you for sharing your experience! Your review is pending moderation.',
        review: data.review,
      };
    } catch {
      return {
        success: false,
        message: 'Unable to reach the review service. Please try again later.',
      };
    }
  },
};
