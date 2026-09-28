/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  CalendarRange,
  ListTree,
  Focus,
  FolderArchive,
  Sparkles,
  BarChart3,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { FeatureItem } from '../types';
import { featureImages, featureImageAltText } from '../config/featureImages';

export const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  const features: FeatureItem[] = [
    {
      id: 'planner',
      number: '01',
      title: 'Adaptive Study Planner',
      category: 'Planning',
      icon: 'CalendarRange',
      description: 'Automatically organize study sessions around your syllabus, topics, available daily hours, and upcoming exam milestones.',
      extendedDetail: 'Adapts dynamically if you miss a study session or finish early, re-balancing workloads so you never fall behind panic-style before an exam.',
      imageUrl: featureImages.planner,
      imageAlt: featureImageAltText.planner,
    },
    {
      id: 'tracking',
      number: '02',
      title: 'Chapter & Topic Tracking',
      category: 'Planning',
      icon: 'ListTree',
      description: 'Break complex preparation into clear, granular chapters and topics, recording genuine completion status instead of vague guesswork.',
      extendedDetail: 'Track sub-topics, revision iterations, and historical difficulty levels for every subject on your curriculum.',
      imageUrl: featureImages.dashboard,
      imageAlt: featureImageAltText.dashboard,
    },
    {
      id: 'focus-mode',
      number: '03',
      title: 'Focus Mode',
      category: 'Focus',
      icon: 'Focus',
      description: 'Dedicated distraction-free study sessions engineered with visual clarity to keep you anchored in uninterrupted flow.',
      extendedDetail: 'Supports customizable Pomodoro techniques, deep-work countdowns, and background white/brown noise generator.',
      imageUrl: featureImages.focus,
      imageAlt: featureImageAltText.focus,
    },
    {
      id: 'materials',
      number: '04',
      title: 'Study Materials',
      category: 'Planning',
      icon: 'FolderArchive',
      description: 'Access organized learning resources, lecture slides, cheat sheets, and references right inside the StudyPilot workflow.',
      extendedDetail: 'Attach relevant PDF chapters, formulas, and notes directly to specific syllabus modules for one-tap retrieval during study sessions.',
      imageUrl: featureImages.materials,
      imageAlt: featureImageAltText.materials,
    },
    {
      id: 'pluto-ai',
      number: '05',
      title: 'Pluto AI',
      category: 'Intelligence',
      icon: 'Sparkles',
      description: "StudyPilot's academic companion for instant clarifications, conceptual explanations, motivation, and interactive learning assistance.",
      extendedDetail: 'Specialized in breaking down difficult scientific, mathematical, and conceptual topics into digestible first-principles explanations.',
      imageUrl: featureImages.pluto,
      imageAlt: featureImageAltText.pluto,
    },
    {
      id: 'analytics',
      number: '06',
      title: 'Progress & Analytics',
      category: 'Intelligence',
      icon: 'BarChart3',
      description: 'Understand your study consistency, total completed work, productive hours distribution, and overall subject readiness.',
      extendedDetail: 'High-precision study telemetry shows peak cognitive hours, streak health, and estimated syllabus completion dates.',
      imageUrl: featureImages.analytics,
      imageAlt: featureImageAltText.analytics,
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarRange': return <CalendarRange className="w-5 h-5" />;
      case 'ListTree': return <ListTree className="w-5 h-5" />;
      case 'Focus': return <Focus className="w-5 h-5" />;
      case 'FolderArchive': return <FolderArchive className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-lime-600" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      default: return <CalendarRange className="w-5 h-5" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#fafaf9] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            CAPABILITIES & TOOLS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight text-balance">
            Everything you need to study with purpose.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
            Engineered from ground up for high school and university students, competitive exam aspirants, and lifelong learners who want structured mastery.
          </p>
        </div>

        {/* Feature Grid: 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className="group relative bg-white rounded-2xl p-6 border border-neutral-200/90 hover:border-neutral-400/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Header: Minimal icon and editorial number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-lime-400 text-neutral-800 flex items-center justify-center transition-colors duration-200">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    {feature.number}
                  </span>
                </div>

                {/* Screenshot Image Area (for the 6 features with real StudyPilot screenshots) */}
                {feature.imageUrl && (
                  <div className="relative w-full aspect-[10/14] mb-4 rounded-xl overflow-hidden border border-neutral-200/80 bg-neutral-950 shadow-xs">
                    <img
                      src={feature.imageUrl}
                      alt={feature.imageAlt || feature.title}
                      loading="lazy"
                      className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}

                {/* Feature Name */}
                <h3 className="text-base font-bold text-neutral-950 group-hover:text-neutral-900 leading-snug mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Card Footer: subtle affordance */}
              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 group-hover:text-neutral-900 transition-colors">
                <span className="text-[11px] font-medium">Explore capability</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Dialog for Detailed Feature View */}
        {selectedFeature && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedFeature(null)}
          >
            <div
              className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 text-lime-400 flex items-center justify-center">
                    {getIcon(selectedFeature.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400">STUDYPILOT MODULE {selectedFeature.number}</span>
                    <h3 className="text-lg font-bold text-neutral-950">{selectedFeature.title}</h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedFeature(null)}
                  className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center text-sm font-semibold transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-4">
                {selectedFeature.imageUrl && (
                  <div className="relative w-full max-w-[260px] aspect-[10/16] mx-auto rounded-xl overflow-hidden border border-neutral-200/80 bg-neutral-950 shadow-md">
                    <img
                      src={selectedFeature.imageUrl}
                      alt={selectedFeature.imageAlt || selectedFeature.title}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Overview</p>
                  <p className="text-sm text-neutral-700 leading-relaxed">{selectedFeature.description}</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80">
                  <p className="text-xs font-semibold text-neutral-900 mb-1 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-lime-600" />
                    How It Powers Your Study
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {selectedFeature.extendedDetail}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedFeature(null)}
                  className="px-4 py-2 bg-neutral-950 text-white hover:bg-neutral-850 rounded-lg text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
