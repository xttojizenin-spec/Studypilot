/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { StudentReviews } from './StudentReviews';
import { Sparkles, Send, Check, ShieldCheck, HeartHandshake } from 'lucide-react';

interface CommunitySectionProps {
  onOpenNotifyModal: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onOpenNotifyModal }) => {
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    try {
      const existing = JSON.parse(localStorage.getItem('studypilot_waitlist') || '[]');
      existing.push({ email: emailInput, source: 'community_beta', timestamp: new Date().toISOString() });
      localStorage.setItem('studypilot_waitlist', JSON.stringify(existing));
    } catch {
      // Fallback
    }
    setSubmitted(true);
  };

  return (
    <section id="community" className="py-20 md:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            COMMUNITY & FEEDBACK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight text-balance">
            Built with students, for students.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
            Your experience and ideas help us make StudyPilot better.
          </p>
        </div>

        {/* Primary Community Area A: Student Reviews */}
        <StudentReviews />

        {/* Community Trust Strip */}
        <div className="rounded-2xl bg-neutral-50 p-6 border border-neutral-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-neutral-800 border border-neutral-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-lime-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-900">100% Genuine Student Feedback</p>
              <p className="text-[11px] text-neutral-500">
                We never pay for reviews or publish synthetic testimonials. Every submission is from real academic preparation.
              </p>
            </div>
          </div>
          <a
            href="#suggestions"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-lime-700 transition-colors whitespace-nowrap"
          >
            <span>Have a feature request? See suggestions</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
