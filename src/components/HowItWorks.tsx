/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Target, Layers, PlayCircle, CheckCircle, TrendingUp, ChevronRight } from 'lucide-react';
import { WorkflowStep } from '../types';

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps: WorkflowStep[] = [
    {
      step: '01',
      name: 'Plan',
      tagline: 'Set your study goals.',
      description: 'Define your target exams, semester milestones, and available daily hours. StudyPilot generates a realistic syllabus path.',
      keyFeature: 'Adaptive syllabus curve calculated automatically',
    },
    {
      step: '02',
      name: 'Prepare',
      tagline: 'Organize subjects & topics.',
      description: 'Structure subjects into chapters, key sub-topics, lecture notes, and formula sheets attached directly to modules.',
      keyFeature: 'Everything organized in one clean repository',
    },
    {
      step: '03',
      name: 'Focus',
      tagline: 'Start focused study sessions.',
      description: 'Engage Guardian Focus mode. Silences distracting notifications, locks screen interruptions, and tracks pure study time.',
      keyFeature: 'Real-time Pomodoro & deep-work flow state',
    },
    {
      step: '04',
      name: 'Prove',
      tagline: 'Complete evidence tests.',
      description: 'Progress is verified through meaningful active recall quizzes and concept checks before topics are marked completed.',
      keyFeature: 'Active recall instead of passive checklist taps',
    },
    {
      step: '05',
      name: 'Improve',
      tagline: 'Use progress insights.',
      description: 'Review retention curves, study streaks, and subject mastery analytics to continuously calibrate your preparation.',
      keyFeature: 'Actionable data on retention & weak areas',
    },
  ];

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Target className="w-5 h-5" />;
      case 1: return <Layers className="w-5 h-5" />;
      case 2: return <PlayCircle className="w-5 h-5" />;
      case 3: return <CheckCircle className="w-5 h-5" />;
      case 4: return <TrendingUp className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            METHODOLOGY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight text-balance">
            A reliable 5-step loop for consistent academic mastery.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
            From initial exam syllabus planning to proven test retention, StudyPilot structures your daily study habits into a sustainable daily rhythm.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (>= lg) */}
        <div className="hidden lg:block">
          <div className="relative">
            
            {/* Connecting Timeline Line */}
            <div className="absolute top-7 left-8 right-8 h-[2px] bg-neutral-200" aria-hidden="true">
              <div
                className="h-full bg-lime-500 transition-all duration-300"
                style={{ width: `${(activeStepIndex / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* 5 Step Nodes */}
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {steps.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                const isPast = activeStepIndex > idx;
                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className="text-left group focus-visible:outline-none"
                  >
                    {/* Step Circle Marker */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-200 border ${
                          isActive
                            ? 'bg-neutral-950 text-lime-400 border-neutral-900 shadow-md scale-105'
                            : isPast
                            ? 'bg-neutral-900 text-white border-neutral-800'
                            : 'bg-white text-neutral-500 border-neutral-300 group-hover:border-neutral-500'
                        }`}
                      >
                        {getStepIcon(idx)}
                      </div>
                    </div>

                    {/* Step Number & Name */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-neutral-400 font-semibold">
                        STEP {step.step}
                      </span>
                      <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-neutral-950' : 'text-neutral-700 group-hover:text-neutral-950'}`}>
                        {step.name}
                      </h3>
                      <p className="text-xs font-semibold text-neutral-800">
                        {step.tagline}
                      </p>
                      <p className="text-xs text-neutral-500 leading-relaxed pt-1">
                        {step.description}
                      </p>
                    </div>

                    {/* Key feature callout */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] text-lime-700 font-medium">
                      ✓ {step.keyFeature}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline (< lg) */}
        <div className="lg:hidden space-y-6">
          <div className="relative border-l-2 border-neutral-200 ml-4 pl-6 space-y-8">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative group">
                {/* Node on vertical line */}
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-xl bg-neutral-950 text-lime-400 flex items-center justify-center font-mono text-xs font-bold border-2 border-white shadow-xs">
                  {step.step}
                </div>

                <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200/80">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-neutral-500">
                      STEP {step.step}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs font-medium text-lime-700 font-mono">
                      {step.name}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-neutral-950">
                    {step.tagline}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-neutral-200/70 text-xs text-neutral-700 font-medium flex items-center gap-1.5">
                    <span className="text-lime-600 font-bold">✓</span>
                    {step.keyFeature}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
