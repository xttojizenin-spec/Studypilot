/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageSquarePlus, Star, Loader2, RotateCcw } from 'lucide-react';
import { Review } from '../types';
import { reviewsService } from '../services/reviewsService';
import { ReviewCard } from './ReviewCard';
import { ReviewModal } from './ReviewModal';

export const StudentReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [justSubmittedNotice, setJustSubmittedNotice] = useState(false);

  const isDevMode = reviewsService.isDevelopmentMode();

  const fetchReviews = async (pageNumber: number = 1, append: boolean = false) => {
    if (append) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }

    try {
      const res = await reviewsService.getApprovedReviews(pageNumber, 6);
      if (append) {
        setReviews((prev) => [...prev, ...res.reviews]);
      } else {
        setReviews(res.reviews);
      }
      setHasMore(res.hasMore);
      setPage(pageNumber);
    } catch {
      if (!append) setReviews([]);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchReviews(1);
  }, []);

  const handleReviewSubmitted = (_newReview: Review) => {
    // Immediately reload reviews so the submitted review appears instantly
    fetchReviews(1);
    setJustSubmittedNotice(true);
    setTimeout(() => {
      setJustSubmittedNotice(false);
    }, 6000);
  };

  const handleClearTestReviews = () => {
    reviewsService.clearDevelopmentReviews();
    fetchReviews(1);
  };

  return (
    <div className="space-y-8">
      {/* Area Subheading & Action */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-neutral-100">
        <div>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-400">
            COMMUNITY VOICES
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mt-1">
            What students think about StudyPilot
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Unfiltered feedback from real academic preparations.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-950 hover:bg-neutral-850 active:bg-neutral-900 text-white rounded-xl text-xs font-semibold shadow-xs transition-all self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
        >
          <MessageSquarePlus className="w-4 h-4 text-lime-400" />
          <span>Share your experience</span>
        </button>
      </div>

      {/* Moderation / Dev Submission Flash Notice */}
      {justSubmittedNotice && (
        <div className="p-4 rounded-xl bg-lime-50/80 border border-lime-200 text-xs text-lime-900 flex items-center justify-between animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
            <span>
              {isDevMode ? (
                <>
                  <strong>Review added to preview:</strong> Your review is saved in local storage and auto-approved for testing.
                </>
              ) : (
                <>
                  <strong>Review submitted for moderation:</strong> Your feedback will appear publicly once approved by the StudyPilot team.
                </>
              )}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setJustSubmittedNotice(false)}
            className="text-xs font-bold text-lime-900 hover:text-black ml-4"
          >
            ✕
          </button>
        </div>
      )}

      {/* Development Mode Helper Strip (when testing data is present) */}
      {isDevMode && reviews.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 py-2 px-3.5 bg-neutral-50 rounded-xl text-neutral-600 text-xs border border-neutral-200/70">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-lime-500" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 bg-neutral-200/70 px-1.5 py-0.5 rounded">
              Development preview
            </span>
            <span className="text-[11px] text-neutral-500">
              Reviews saved in browser storage ({reviews.length})
            </span>
          </div>
          <button
            type="button"
            onClick={handleClearTestReviews}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 hover:text-red-600 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear test reviews</span>
          </button>
        </div>
      )}

      {/* Main Reviews Content State */}
      {loading ? (
        <div className="py-16 text-center flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-neutral-400" />
          <p className="text-xs font-mono text-neutral-400">Loading student reviews...</p>
        </div>
      ) : reviews.length === 0 ? (
        /* Mandatory Elegant Empty State */
        <div className="relative bg-neutral-50/70 rounded-3xl p-8 sm:p-12 md:p-16 border border-neutral-200/80 text-center max-w-2xl mx-auto overflow-hidden">
          {/* Subtle green ambient dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-lime-300/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 text-neutral-700 flex items-center justify-center mx-auto shadow-xs">
              <Star className="w-5 h-5 text-neutral-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg sm:text-xl font-bold text-neutral-950">
                No reviews yet
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Be one of the first students to share your StudyPilot experience.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-950 hover:bg-neutral-850 active:bg-neutral-900 text-white rounded-xl text-xs font-semibold shadow-xs transition-all"
              >
                <MessageSquarePlus className="w-3.5 h-3.5 text-lime-400" />
                <span>Share your experience</span>
              </button>
            </div>
            <p className="text-[11px] font-mono text-neutral-400 pt-2">
              We never fabricate ratings or reviews.
            </p>
          </div>
        </div>
      ) : (
        /* Approved Reviews Grid */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => fetchReviews(page + 1, true)}
                disabled={loadingMore}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-neutral-50 active:bg-neutral-100 text-neutral-800 rounded-xl text-xs font-semibold border border-neutral-300 shadow-xs transition-colors disabled:opacity-50"
              >
                {loadingMore && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                <span>{loadingMore ? 'Loading...' : 'Load more reviews'}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Review Submission Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </div>
  );
};
