/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThumbsUp, Plus, RefreshCw, Minus } from 'lucide-react';
import { Suggestion } from '../types';
import { getCountryByCodeOrName } from '../data/countries';
import { suggestionsService } from '../services/suggestionsService';

interface SuggestionCardProps {
  suggestion: Suggestion;
  onVoteChange?: (updatedSuggestion: Suggestion) => void;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  onVoteChange,
}) => {
  const [votes, setVotes] = useState(suggestion.votes || 0);
  const [hasVoted, setHasVoted] = useState(() =>
    suggestionsService.hasUserVoted(suggestion.id)
  );
  const [voting, setVoting] = useState(false);

  const countryObj = getCountryByCodeOrName(suggestion.country);

  const handleVote = async () => {
    if (hasVoted || voting) return;
    setVoting(true);
    try {
      const res = await suggestionsService.voteSuggestion(suggestion.id);
      if (res.success && res.newVotes !== undefined) {
        setVotes(res.newVotes);
        setHasVoted(true);
        if (onVoteChange) {
          onVoteChange({ ...suggestion, votes: res.newVotes });
        }
      }
    } finally {
      setVoting(false);
    }
  };

  const getCategoryBadge = () => {
    switch (suggestion.category) {
      case 'add':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
            <Plus className="w-3 h-3 text-lime-600" />
            <span>ADD</span>
          </span>
        );
      case 'modify':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
            <RefreshCw className="w-3 h-3 text-lime-600" />
            <span>MODIFY</span>
          </span>
        );
      case 'remove':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
            <Minus className="w-3 h-3 text-lime-600" />
            <span>REMOVE</span>
          </span>
        );
    }
  };

  const getStatusBadge = () => {
    switch (suggestion.status) {
      case 'planned':
        return (
          <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
            Planned
          </span>
        );
      case 'in_development':
        return (
          <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-lime-50 text-lime-800 border border-lime-200">
            In Development
          </span>
        );
      case 'completed':
        return (
          <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-neutral-900 text-lime-400">
            Shipped
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {getCategoryBadge()}
            {getStatusBadge()}
          </div>
          <div className="flex items-center gap-1 text-xs text-neutral-500">
            <span className="font-semibold text-neutral-900">{suggestion.displayName}</span>
            {countryObj && <span title={countryObj.name}>{countryObj.flag}</span>}
          </div>
        </div>
        <p className="text-sm text-neutral-800 leading-relaxed font-normal mb-5">
          {suggestion.suggestion}
        </p>
      </div>

      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
        <button
          type="button"
          onClick={handleVote}
          disabled={hasVoted || voting}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            hasVoted
              ? 'bg-lime-50 text-lime-800 border border-lime-200 cursor-default'
              : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 active:scale-95'
          }`}
          title={hasVoted ? 'You have voted for this idea' : 'Vote for this idea'}
        >
          <ThumbsUp className={`w-3.5 h-3.5 ${hasVoted ? 'text-lime-700 fill-lime-600' : 'text-neutral-600'}`} />
          <span className="font-mono">{votes}</span>
          <span className="text-[11px] font-normal">{hasVoted ? 'Voted' : 'Vote'}</span>
        </button>
        <span className="text-[11px] font-mono text-neutral-400">
          {suggestion.id.startsWith('dev_') ? 'DEV PREVIEW' : 'STUDENT ROADMAP'}
        </span>
      </div>
    </div>
  );
};
