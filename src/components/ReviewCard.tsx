/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';
import { getCountryByCodeOrName } from '../data/countries';

interface ReviewCardProps {
  review: Review;
}

function formatRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays}d ago`;
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return 'Recently';
  }
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const countryObj = getCountryByCodeOrName(review.country);
  const isDev = review.id.startsWith('dev_');

  return (
    <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left">
      <div>
        {/* Header: Student name, country flag & star rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-neutral-950">
              {review.displayName}
            </span>
            {countryObj && (
              <span className="text-base leading-none" title={countryObj.name}>
                {countryObj.flag}
              </span>
            )}
            {isDev && (
              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-lime-100 text-lime-800 font-semibold">
                Dev
              </span>
            )}
          </div>

          {/* Star rating if provided */}
          {review.rating && (
            <div className="flex items-center gap-0.5 text-lime-600" aria-label={`${review.rating} of 5 stars`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3.5 h-3.5 ${
                    star <= (review.rating || 0)
                      ? 'fill-lime-500 text-lime-500'
                      : 'text-neutral-200'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Comment quote */}
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-4 font-normal">
          "{review.comment}"
        </p>
      </div>

      {/* Footer: relative date timestamp */}
      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>{isDev ? 'DEVELOPMENT PREVIEW' : 'VERIFIED STUDENT REVIEW'}</span>
        <span>{formatRelativeTime(review.createdAt)}</span>
      </div>
    </div>
  );
};
