/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Plus, RefreshCw, Minus, Check, X, ShieldAlert, Loader2 } from 'lucide-react';
import { CountrySelector } from './CountrySelector';
import { suggestionsService } from '../services/suggestionsService';
import { Suggestion, SuggestionCategory } from '../types';

interface SuggestionModalProps {
  isOpen: boolean;
  initialCategory: SuggestionCategory;
  onClose: () => void;
  onSuggestionSubmitted?: (suggestion: Suggestion) => void;
}

export const SuggestionModal: React.FC<SuggestionModalProps> = ({
  isOpen,
  initialCategory,
  onClose,
  onSuggestionSubmitted,
}) => {
  const [category, setCategory] = useState<SuggestionCategory>(initialCategory);
  const [displayName, setDisplayName] = useState('');
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isDevResponse, setIsDevResponse] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const MAX_SUGGESTION_LENGTH = 600;

  useEffect(() => {
    if (isOpen) {
      setCategory(initialCategory);
    }
  }, [isOpen, initialCategory]);

  if (!isOpen) return null;

  const handleReset = () => {
    setDisplayName('');
    setCountry(undefined);
    setSuggestion('');
    setErrorMsg(null);
    setSuccess(false);
    setIsDevResponse(false);
    setSuccessMsg('');
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = displayName.trim();
    const trimmedSuggestion = suggestion.trim();

    if (!trimmedName) {
      setErrorMsg('Please enter your name or display name.');
      return;
    }

    if (trimmedName.length < 2) {
      setErrorMsg('Display name must be at least 2 characters long.');
      return;
    }

    if (!trimmedSuggestion) {
      setErrorMsg('Please write your suggestion.');
      return;
    }

    if (trimmedSuggestion.length < 10) {
      setErrorMsg('Suggestion must be at least 10 characters long.');
      return;
    }

    setLoading(true);

    try {
      const response = await suggestionsService.submitSuggestion({
        displayName: trimmedName,
        country,
        category,
        suggestion: trimmedSuggestion,
      });

      if (!response.success) {
        setErrorMsg(response.message);
        setLoading(false);
        return;
      }

      setLoading(false);
      setSuccess(true);
      setIsDevResponse(Boolean(response.isDevelopmentMode));
      setSuccessMsg(response.message);

      if (response.suggestion && onSuggestionSubmitted) {
        onSuggestionSubmitted(response.suggestion);
      }

      setTimeout(() => {
        handleClose();
      }, 2600);
    } catch {
      setLoading(false);
      setErrorMsg('An unexpected error occurred. Please try again.');
    }
  };

  const getCategoryTitle = () => {
    switch (category) {
      case 'add':
        return 'Suggest a feature to add';
      case 'modify':
        return 'Suggest a feature to modify';
      case 'remove':
        return 'Suggest a feature to remove';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="suggestion-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-950 text-lime-400 flex items-center justify-center font-bold">
              {category === 'add' && <Plus className="w-4 h-4 stroke-[2.5]" />}
              {category === 'modify' && <RefreshCw className="w-4 h-4 stroke-[2.2]" />}
              {category === 'remove' && <Minus className="w-4 h-4 stroke-[2.5]" />}
            </div>
            <div>
              <h3 id="suggestion-modal-title" className="text-lg font-bold text-neutral-950">
                {getCategoryTitle()}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Every suggestion directly informs the StudyPilot development sprint.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {success ? (
          <div className="py-10 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-lime-100 text-lime-800 flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>

            {isDevResponse ? (
              <>
                <span className="inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-lime-100 text-lime-800 border border-lime-200">
                  DEVELOPMENT PREVIEW
                </span>
                <h4 className="text-xl font-bold text-neutral-950">
                  Idea Added to Roadmap!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  {successMsg ||
                    'Your suggestion has been saved to browser storage. You can see it on the active roadmap and test voting on it.'}
                </p>
              </>
            ) : (
              <>
                <h4 className="text-xl font-bold text-neutral-950">
                  Thanks! Your idea has been sent to the StudyPilot team.
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  We review every student proposal. High-impact requests are prioritized on our public roadmap.
                </p>
              </>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-4 space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <span className="font-bold">Error:</span> {errorMsg}
              </div>
            )}

            {/* Category Selector Tabs */}
            <div>
              <label className="block text-xs font-semibold text-neutral-900 mb-1.5">
                Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCategory('add')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    category === 'add'
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
                      : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <Plus className="w-3.5 h-3.5 text-lime-400" />
                  <span>+ ADD</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('modify')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    category === 'modify'
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
                      : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5 text-lime-400" />
                  <span>MODIFY</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('remove')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    category === 'remove'
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
                      : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <Minus className="w-3.5 h-3.5 text-lime-400" />
                  <span>REMOVE</span>
                </button>
              </div>
            </div>

            {/* Name / Display Name */}
            <div>
              <label htmlFor="suggestion-name" className="block text-xs font-semibold text-neutral-900 mb-1">
                Name / display name <span className="text-red-500">*</span>
              </label>
              <input
                id="suggestion-name"
                type="text"
                required
                maxLength={50}
                placeholder="e.g. Priyanshu K. or Alex M."
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 transition-colors"
              />
              <p className="text-[11px] text-neutral-500 mt-1">
                This is the name other students will see.
              </p>
            </div>

            {/* Country Selector */}
            <div>
              <label htmlFor="suggestion-country" className="block text-xs font-semibold text-neutral-900 mb-1">
                Country (optional)
              </label>
              <CountrySelector
                id="suggestion-country"
                value={country}
                onChange={(code) => setCountry(code)}
              />
            </div>

            {/* Suggestion Textarea */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="suggestion-text" className="block text-xs font-semibold text-neutral-900">
                  Suggestion <span className="text-red-500">*</span>
                </label>
                <span
                  className={`text-[11px] font-mono ${
                    suggestion.length > MAX_SUGGESTION_LENGTH - 30 ? 'text-amber-600 font-semibold' : 'text-neutral-400'
                  }`}
                >
                  {suggestion.length}/{MAX_SUGGESTION_LENGTH}
                </span>
              </div>
              <textarea
                id="suggestion-text"
                required
                rows={4}
                maxLength={MAX_SUGGESTION_LENGTH}
                placeholder="What would you like us to change or improve?"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 resize-none transition-colors"
              />
            </div>

            {/* Privacy note */}
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-2.5 text-[11px] text-neutral-500 leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <span>
                Please don't share passwords, phone numbers, addresses, or other private information.
              </span>
            </div>

            {/* Form Actions */}
            <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
              <button
                type="button"
                onClick={handleClose}
                disabled={loading}
                className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 bg-neutral-950 hover:bg-neutral-850 active:bg-neutral-900 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-2 transition-all disabled:opacity-50"
              >
                {loading && <Loader2 className="w-3.5 h-3.5 animate-spin text-lime-400" />}
                <span>{loading ? 'Submitting...' : 'Submit suggestion'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
