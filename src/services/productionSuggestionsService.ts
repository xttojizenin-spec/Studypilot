/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suggestion, SubmitSuggestionInput } from '../types';
import {
  SubmitSuggestionResponse,
  VoteSuggestionResponse,
} from './developmentSuggestionsService';

const PROD_VOTED_KEY = 'studypilot_voted_suggestions_prod';

export const productionSuggestionsService = {
  async getRoadmapSuggestions(): Promise<Suggestion[]> {
    try {
      const res = await fetch('/api/suggestions');
      if (!res.ok) throw new Error('Failed to fetch suggestions');
      const data = await res.json();
      return data.suggestions || [];
    } catch {
      return [];
    }
  },

  async getPublicSuggestions(): Promise<Suggestion[]> {
    return this.getRoadmapSuggestions();
  },

  async submitSuggestion(
    input: SubmitSuggestionInput
  ): Promise<SubmitSuggestionResponse> {
    try {
      const res = await fetch('/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });

      const data = await res.json();
      if (!res.ok) {
        return {
          success: false,
          message: data.error || 'Failed to submit suggestion.',
        };
      }

      return {
        success: true,
        message: 'Thanks! Your idea has been sent to the StudyPilot team.',
        suggestion: data.suggestion,
      };
    } catch {
      return {
        success: false,
        message: 'Unable to reach the suggestion service. Please try again.',
      };
    }
  },

  async voteSuggestion(suggestionId: string): Promise<VoteSuggestionResponse> {
    if (this.hasUserVoted(suggestionId)) {
      return {
        success: false,
        hasVoted: true,
        message: 'You have already voted on this suggestion.',
      };
    }

    try {
      const res = await fetch(`/api/suggestions/${suggestionId}/vote`, {
        method: 'POST',
      });

      const data = await res.json();
      if (!res.ok) {
        return {
          success: false,
          hasVoted: false,
          message: data.error || 'Failed to register vote.',
        };
      }

      // Mark locally
      try {
        const voted = JSON.parse(localStorage.getItem(PROD_VOTED_KEY) || '[]');
        voted.push(suggestionId);
        localStorage.setItem(PROD_VOTED_KEY, JSON.stringify(voted));
      } catch {
        // ignore
      }

      return {
        success: true,
        hasVoted: true,
        newVotes: data.newVotes,
      };
    } catch {
      return {
        success: false,
        hasVoted: false,
        message: 'Unable to record vote right now.',
      };
    }
  },

  hasUserVoted(suggestionId: string): boolean {
    try {
      const voted = JSON.parse(localStorage.getItem(PROD_VOTED_KEY) || '[]');
      return voted.includes(suggestionId);
    } catch {
      return false;
    }
  },
};
