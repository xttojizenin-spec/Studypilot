/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suggestion, SubmitSuggestionInput } from '../types';

const DEV_SUGGESTIONS_KEY = 'studypilot_dev_suggestions';
const DEV_VOTED_KEY = 'studypilot_voted_suggestions';

export interface SubmitSuggestionResponse {
  success: boolean;
  message: string;
  isDevelopmentMode?: boolean;
  suggestion?: Suggestion;
}

export interface VoteSuggestionResponse {
  success: boolean;
  hasVoted: boolean;
  newVotes?: number;
  message?: string;
}

export const developmentSuggestionsService = {
  /**
   * Fetches suggestions saved in local storage.
   */
  async getRoadmapSuggestions(): Promise<Suggestion[]> {
    try {
      const stored = localStorage.getItem(DEV_SUGGESTIONS_KEY);
      if (!stored) return [];
      const list: Suggestion[] = JSON.parse(stored);
      // Sort newest first
      return list.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } catch {
      return [];
    }
  },

  async getPublicSuggestions(): Promise<Suggestion[]> {
    return this.getRoadmapSuggestions();
  },

  /**
   * Submits and saves a suggestion to localStorage for testing.
   * Marked as 'planned' so it immediately displays on the active roadmap list.
   */
  async submitSuggestion(
    input: SubmitSuggestionInput
  ): Promise<SubmitSuggestionResponse> {
    const trimmedName = (input.displayName || '').trim();
    const trimmedSuggestion = (input.suggestion || '').trim();

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

    if (!trimmedSuggestion || trimmedSuggestion.length < 10) {
      return {
        success: false,
        message: 'Please describe your idea with at least 10 characters.',
      };
    }

    if (trimmedSuggestion.length > 600) {
      return {
        success: false,
        message: 'Suggestion exceeds 600 characters limit.',
      };
    }

    // Small delay to simulate realistic interaction
    await new Promise((r) => setTimeout(r, 250));

    const newSuggestion: Suggestion = {
      id: `dev_sug_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      displayName: trimmedName,
      country: input.country || undefined,
      category: input.category,
      suggestion: trimmedSuggestion,
      createdAt: new Date().toISOString(),
      status: 'planned', // Displayed in development roadmap
      votes: 1, // Author's initial vote
    };

    try {
      const stored = localStorage.getItem(DEV_SUGGESTIONS_KEY);
      const list: Suggestion[] = stored ? JSON.parse(stored) : [];
      list.unshift(newSuggestion);
      localStorage.setItem(DEV_SUGGESTIONS_KEY, JSON.stringify(list));

      // Mark that author voted for their suggestion
      try {
        const voted: string[] = JSON.parse(localStorage.getItem(DEV_VOTED_KEY) || '[]');
        if (!voted.includes(newSuggestion.id)) {
          voted.push(newSuggestion.id);
          localStorage.setItem(DEV_VOTED_KEY, JSON.stringify(voted));
        }
      } catch {
        // ignore
      }

      return {
        success: true,
        isDevelopmentMode: true,
        message: 'Idea saved to development roadmap preview.',
        suggestion: newSuggestion,
      };
    } catch {
      return {
        success: false,
        message: 'Failed to save suggestion to browser storage.',
      };
    }
  },

  /**
   * Casts a local test vote on a development suggestion.
   */
  async voteSuggestion(suggestionId: string): Promise<VoteSuggestionResponse> {
    if (this.hasUserVoted(suggestionId)) {
      return {
        success: false,
        hasVoted: true,
        message: 'You have already voted on this suggestion.',
      };
    }

    try {
      const stored = localStorage.getItem(DEV_SUGGESTIONS_KEY);
      const list: Suggestion[] = stored ? JSON.parse(stored) : [];
      const itemIndex = list.findIndex((s) => s.id === suggestionId);

      if (itemIndex === -1) {
        return {
          success: false,
          hasVoted: false,
          message: 'Suggestion not found in local storage.',
        };
      }

      list[itemIndex].votes = (list[itemIndex].votes || 0) + 1;
      localStorage.setItem(DEV_SUGGESTIONS_KEY, JSON.stringify(list));

      // Persist user voted state
      const voted: string[] = JSON.parse(localStorage.getItem(DEV_VOTED_KEY) || '[]');
      voted.push(suggestionId);
      localStorage.setItem(DEV_VOTED_KEY, JSON.stringify(voted));

      return {
        success: true,
        hasVoted: true,
        newVotes: list[itemIndex].votes,
      };
    } catch {
      return {
        success: false,
        hasVoted: false,
        message: 'Failed to record vote in local storage.',
      };
    }
  },

  hasUserVoted(suggestionId: string): boolean {
    try {
      const voted: string[] = JSON.parse(localStorage.getItem(DEV_VOTED_KEY) || '[]');
      return voted.includes(suggestionId);
    } catch {
      return false;
    }
  },

  /**
   * Helper to clear development suggestions and votes.
   */
  clearDevelopmentSuggestions(): void {
    try {
      localStorage.removeItem(DEV_SUGGESTIONS_KEY);
      localStorage.removeItem(DEV_VOTED_KEY);
    } catch {
      // ignore
    }
  },
};
