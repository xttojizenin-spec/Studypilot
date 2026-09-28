/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, Check, X, ShieldAlert, Loader2 } from 'lucide-react';
import { CountrySelector } from './CountrySelector';
import { reviewsService } from '../services/reviewsService';
import { Review } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted?: (review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onReviewSubmitted,
}) => {
  const [displayName, setDisplayName] = useState('');
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [hoverRating, setHoverRating] = useState<number | undefined>(undefined);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isDevResponse, setIsDevResponse] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const MAX_COMMENT_LENGTH = 500;

  if (!isOpen) return null;

  const handleReset = () => {
    setDisplayName('');
    setCountry(undefined);
    setRating(undefined);
    setHoverRating(undefined);
    setComment('');
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
    const trimmedComment = comment.trim();

    if (!trimmedName) {
      setErrorMsg('Please enter your name or display name.');
      return;
    }

    if (trimmedName.length < 2) {
      setErrorMsg('Display name must be at least 2 characters long.');
      return;
    }

    if (!trimmedComment) {
      setErrorMsg('Please write a brief comment about your experience.');
      return;
    }

    if (trimmedComment.length < 5) {
      setErrorMsg('Comment must be at least 5 characters long.');
      return;
    }

    setLoading(true);

    try {
      const response = await reviewsService.submitReview({
        displayName: trimmedName,
        country,
        rating,
        comment: trimmedComment,
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

      if (response.review && onReviewSubmitted) {
        onReviewSubmitted(response.review);
      }

      // Close modal after showing success
      setTimeout(() => {
        handleClose();
      }, 2600);
    } catch {
      setLoading(false);
      setErrorMsg('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100">
          <div>
            <h3 id="review-modal-title" className="text-lg font-bold text-neutral-950">
              Share your experience
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Help prospective students understand how StudyPilot impacts your study routine.
            </p>
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
                  Review Added to Local Preview!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  {successMsg ||
                    'Your review has been saved to browser storage and auto-approved for testing. It will appear immediately in the list.'}
                </p>
              </>
            ) : (
              <>
                <h4 className="text-xl font-bold text-neutral-950">
                  Thank you for sharing your experience!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Your feedback has been received. To ensure a constructive community, new reviews undergo a brief moderation check before appearing publicly.
                </p>
              </>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-4 space-y-4">
            {/* Error banner */}
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <span className="font-bold">Error:</span> {errorMsg}
              </div>
            )}

            {/* Display Name Field */}
            <div>
              <label htmlFor="review-name" className="block text-xs font-semibold text-neutral-900 mb-1">
                Name / display name <span className="text-red-500">*</span>
              </label>
              <input
                id="review-name"
                type="text"
                required
                maxLength={50}
                placeholder="e.g. Ayesha R. or John D."
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 transition-colors"
              />
              <p className="text-[11px] text-neutral-500 mt-1">
                This is the name other students will see.
              </p>
            </div>

            {/* Country Field (Optional) */}
            <div>
              <label htmlFor="review-country" className="block text-xs font-semibold text-neutral-900 mb-1">
                Country (optional)
              </label>
              <CountrySelector
                id="review-country"
                value={country}
                onChange={(code) => setCountry(code)}
              />
              <p className="text-[11px] text-neutral-500 mt-1">
                Helps show the global diversity of StudyPilot students.
              </p>
            </div>

            {/* 1-5 Star Rating Selector */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="block text-xs font-semibold text-neutral-900">
                  Rating (optional)
                </span>
                {rating && (
                  <button
                    type="button"
                    onClick={() => setRating(undefined)}
                    className="text-[11px] text-neutral-400 hover:text-neutral-700 underline"
                  >
                    Clear rating
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 py-1">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isFilled =
                    (hoverRating !== undefined && star <= hoverRating) ||
                    (hoverRating === undefined && rating !== undefined && star <= rating);
                  return (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(undefined)}
                      onClick={() => setRating(star)}
                      className="p-1 rounded-md hover:scale-110 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                      aria-label={`${star} star${star > 1 ? 's' : ''}`}
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          isFilled
                            ? 'fill-lime-500 text-lime-500'
                            : 'text-neutral-300 hover:text-neutral-400'
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="text-xs font-mono text-neutral-500 ml-2">
                  {rating ? `${rating} / 5 stars` : 'No rating selected'}
                </span>
              </div>
            </div>

            {/* Comment Area */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="review-comment" className="block text-xs font-semibold text-neutral-900">
                  Comment <span className="text-red-500">*</span>
                </label>
                <span
                  className={`text-[11px] font-mono ${
                    comment.length > MAX_COMMENT_LENGTH - 30 ? 'text-amber-600 font-semibold' : 'text-neutral-400'
                  }`}
                >
                  {comment.length}/{MAX_COMMENT_LENGTH}
                </span>
              </div>
              <textarea
                id="review-comment"
                required
                rows={4}
                maxLength={MAX_COMMENT_LENGTH}
                placeholder="Tell us about your experience with StudyPilot..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 resize-none transition-colors"
              />
            </div>

            {/* Community Privacy & Trust Note */}
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
                <span>{loading ? 'Submitting...' : 'Submit review'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
