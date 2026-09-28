/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suggestion, SubmitSuggestionInput } from '../types';
import { configService } from './configService';
import {
  developmentSuggestionsService,
  SubmitSuggestionResponse,
  VoteSuggestionResponse,
} from './developmentSuggestionsService';
import { productionSuggestionsService } from './productionSuggestionsService';

export type { SubmitSuggestionResponse, VoteSuggestionResponse };

/**
 * Service for feature suggestions and student roadmap.
 * Automatically routes to isolated local development adapter in development preview,
 * or production API once the backend database is configured.
 */
export const suggestionsService = {
  async getRoadmapSuggestions(): Promise<Suggestion[]> {
    if (!configService.isProductionBackendConfigured()) {
      return developmentSuggestionsService.getRoadmapSuggestions();
    }
    return productionSuggestionsService.getRoadmapSuggestions();
  },

  async getPublicSuggestions(): Promise<Suggestion[]> {
    return this.getRoadmapSuggestions();
  },

  async submitSuggestion(
    input: SubmitSuggestionInput
  ): Promise<SubmitSuggestionResponse> {
    if (!configService.isProductionBackendConfigured()) {
      return developmentSuggestionsService.submitSuggestion(input);
    }
    return productionSuggestionsService.submitSuggestion(input);
  },

  async voteSuggestion(suggestionId: string): Promise<VoteSuggestionResponse> {
    if (!configService.isProductionBackendConfigured()) {
      return developmentSuggestionsService.voteSuggestion(suggestionId);
    }
    return productionSuggestionsService.voteSuggestion(suggestionId);
  },

  hasUserVoted(suggestionId: string): boolean {
    if (!configService.isProductionBackendConfigured()) {
      return developmentSuggestionsService.hasUserVoted(suggestionId);
    }
    return productionSuggestionsService.hasUserVoted(suggestionId);
  },

  isDevelopmentMode(): boolean {
    return !configService.isProductionBackendConfigured();
  },

  clearDevelopmentSuggestions(): void {
    developmentSuggestionsService.clearDevelopmentSuggestions();
  },
};
