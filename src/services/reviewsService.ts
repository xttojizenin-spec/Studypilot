/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Review, SubmitReviewInput } from '../types';
import { configService } from './configService';
import { developmentReviewsService } from './developmentReviewsService';
import { productionReviewsService } from './productionReviewsService';

export interface SubmitReviewResponse {
  success: boolean;
  message: string;
  isDevelopmentMode?: boolean;
  review?: Review;
}

/**
 * Service for student reviews and feedback.
 * Automatically routes to isolated local development adapter in development preview,
 * or production API once the backend database is configured.
 */
export const reviewsService = {
  /**
   * Fetches approved reviews.
   */
  async getApprovedReviews(
    page: number = 1,
    limit: number = 6
  ): Promise<{
    reviews: Review[];
    hasMore: boolean;
    total: number;
  }> {
    if (!configService.isProductionBackendConfigured()) {
      return developmentReviewsService.getApprovedReviews(page, limit);
    }
    return productionReviewsService.getApprovedReviews(page, limit);
  },

  /**
   * Submits a student review.
   */
  async submitReview(input: SubmitReviewInput): Promise<SubmitReviewResponse> {
    if (!configService.isProductionBackendConfigured()) {
      return developmentReviewsService.submitReview(input);
    }
    return productionReviewsService.submitReview(input);
  },

  /**
   * Checks if currently in development mode.
   */
  isDevelopmentMode(): boolean {
    return !configService.isProductionBackendConfigured();
  },

  /**
   * Development helper to reset test reviews.
   */
  clearDevelopmentReviews(): void {
    developmentReviewsService.clearDevelopmentReviews();
  },
};
