/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Plus, RefreshCw, Minus, ArrowRight, Compass, Loader2, RotateCcw } from 'lucide-react';
import { Suggestion, SuggestionCategory } from '../types';
import { suggestionsService } from '../services/suggestionsService';
import { SuggestionModal } from './SuggestionModal';
import { SuggestionCard } from './SuggestionCard';

export const SuggestionSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<SuggestionCategory>('add');
  const [roadmapSuggestions, setRoadmapSuggestions] = useState<Suggestion[]>([]);
  const [loadingRoadmap, setLoadingRoadmap] = useState(true);
  const [submissionNotice, setSubmissionNotice] = useState(false);

  const isDevMode = suggestionsService.isDevelopmentMode();

  const fetchRoadmap = async () => {
    setLoadingRoadmap(true);
    try {
      const items = await suggestionsService.getRoadmapSuggestions();
      setRoadmapSuggestions(items);
    } catch {
      setRoadmapSuggestions([]);
    } finally {
      setLoadingRoadmap(false);
    }
  };

  useEffect(() => {
    fetchRoadmap();
  }, []);

  const openWithCategory = (cat: SuggestionCategory) => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  const handleSuggestionSubmitted = (_newSuggestion: Suggestion) => {
    // Immediately reload roadmap so the new suggestion appears instantly
    fetchRoadmap();
    setSubmissionNotice(true);
    setTimeout(() => {
      setSubmissionNotice(false);
    }, 6000);
  };

  const handleVoteChange = (updated: Suggestion) => {
    setRoadmapSuggestions((prev) =>
      prev.map((s) => (s.id === updated.id ? updated : s))
    );
  };

  const handleClearTestSuggestions = () => {
    suggestionsService.clearDevelopmentSuggestions();
    fetchRoadmap();
  };

  return (
    <section id="suggestions" className="py-20 md:py-28 bg-[#fafaf9] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            COMMUNITY-DRIVEN ROADMAP
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight text-balance">
            Help us build the next version.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
            Have an idea for StudyPilot? Tell us what we should add, modify, or remove.
          </p>
        </div>

        {/* Submission Flash Notice */}
        {submissionNotice && (
          <div className="p-4 rounded-xl bg-lime-50/80 border border-lime-200 text-xs text-lime-900 flex items-center justify-between animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              <span>
                {isDevMode ? (
                  <>
                    <strong>Idea added to roadmap:</strong> Your suggestion is saved locally and visible on the roadmap below.
                  </>
                ) : (
                  <>
                    <strong>Idea submitted:</strong> Thanks! Your suggestion has been sent to the StudyPilot development board for review.
                  </>
                )}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSubmissionNotice(false)}
              className="text-xs font-bold text-lime-900 hover:text-black ml-4"
            >
              ✕
            </button>
          </div>
        )}

        {/* 3 Selectable Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: + ADD */}
          <div
            onClick={() => openWithCategory('add')}
            className="group bg-white rounded-2xl p-7 border border-neutral-200/90 hover:border-neutral-950/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer text-left focus-within:ring-2 focus-within:ring-neutral-900"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openWithCategory('add');
              }
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-lime-400 text-neutral-900 flex items-center justify-center font-bold text-lg transition-colors mb-6">
                <Plus className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                + ADD
              </span>
              <h3 className="text-xl font-bold text-neutral-950 mt-1 mb-2">
                Something missing?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Suggest new study aids, syllabus structures, flashcard features, or exam tracker formats you need.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
              <span>Propose an addition</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          {/* Card 2: ↻ MODIFY */}
          <div
            onClick={() => openWithCategory('modify')}
            className="group bg-white rounded-2xl p-7 border border-neutral-200/90 hover:border-neutral-950/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer text-left focus-within:ring-2 focus-within:ring-neutral-900"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openWithCategory('modify');
              }
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-lime-400 text-neutral-900 flex items-center justify-center font-bold text-lg transition-colors mb-6">
                <RefreshCw className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                ↻ MODIFY
              </span>
              <h3 className="text-xl font-bold text-neutral-950 mt-1 mb-2">
                Something that could work better?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Notice a study workflow or timer interaction that could be smoother, faster, or more intuitive?
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
              <span>Suggest an improvement</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          {/* Card 3: — REMOVE */}
          <div
            onClick={() => openWithCategory('remove')}
            className="group bg-white rounded-2xl p-7 border border-neutral-200/90 hover:border-neutral-950/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer text-left focus-within:ring-2 focus-within:ring-neutral-900"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openWithCategory('remove');
              }
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-lime-400 text-neutral-900 flex items-center justify-center font-bold text-lg transition-colors mb-6">
                <Minus className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                — REMOVE
              </span>
              <h3 className="text-xl font-bold text-neutral-950 mt-1 mb-2">
                Something you don't need?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Tell us which unnecessary steps add distraction. We protect student focus by keeping the app minimal.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
              <span>Propose removal</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-1 transition-all" />
            </div>
          </div>

        </div>

        {/* Suggestion Roadmap Section */}
        <div className="pt-6 border-t border-neutral-200/60 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-400">
                ACTIVE ROADMAP
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mt-1">
                What we're building next
              </h3>
            </div>
            <p className="text-xs text-neutral-500">
              Prioritized directly from student suggestions & votes.
            </p>
          </div>

          {/* Development Mode Helper Strip (when testing suggestions exist) */}
          {isDevMode && roadmapSuggestions.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-2 py-2 px-3.5 bg-white rounded-xl text-neutral-600 text-xs border border-neutral-200/70">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-lime-500" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded">
                  Development preview
                </span>
                <span className="text-[11px] text-neutral-500">
                  Suggestions and votes saved in browser storage ({roadmapSuggestions.length})
                </span>
              </div>
              <button
                type="button"
                onClick={handleClearTestSuggestions}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 hover:text-red-600 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear test suggestions</span>
              </button>
            </div>
          )}

          {loadingRoadmap ? (
            <div className="py-12 text-center flex flex-col items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin text-neutral-400" />
              <p className="text-xs font-mono text-neutral-400">Checking roadmap items...</p>
            </div>
          ) : roadmapSuggestions.length === 0 ? (
            /* Mandatory Honest Empty State */
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 text-center max-w-xl mx-auto space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center mx-auto">
                <Compass className="w-5 h-5 text-neutral-500" />
              </div>
              <h4 className="text-base font-bold text-neutral-950">
                Your ideas will help shape the next StudyPilot updates.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md mx-auto">
                As the StudyPilot team reviews student submissions, selected additions and modifications will appear here with live voting.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openWithCategory('add')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-lime-700 underline"
                >
                  <span>Submit the first suggestion</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ) : (
            /* Roadmap Suggestions Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmapSuggestions.map((item) => (
                <SuggestionCard
                  key={item.id}
                  suggestion={item}
                  onVoteChange={handleVoteChange}
                />
              ))}
            </div>
          )}
        </div>

        {/* Suggestion Modal Form */}
        <SuggestionModal
          isOpen={modalOpen}
          initialCategory={selectedCategory}
          onClose={() => setModalOpen(false)}
          onSuggestionSubmitted={handleSuggestionSubmitted}
        />

      </div>
    </section>
  );
};
