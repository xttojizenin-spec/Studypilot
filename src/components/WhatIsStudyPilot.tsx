/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Focus, LineChart, BookOpen, Sparkles, Check, ArrowRight } from 'lucide-react';

export const WhatIsStudyPilot: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'planning',
      title: 'Dynamic Syllabus Planning',
      icon: Calendar,
      description: 'Breaks hefty multi-month syllabi into realistic daily and weekly study targets tailored to your exam schedule.',
      highlight: 'Calculates topic weights & realistic revision cycles automatically.',
    },
    {
      id: 'focus',
      title: 'Distraction-Free Deep Study',
      icon: Focus,
      description: 'Built-in Guardian Focus eliminates digital interruptions, holding you accountable during every scheduled session.',
      highlight: 'Session logging requires actual study presence.',
    },
    {
      id: 'materials',
      title: 'Centralized Study Materials',
      icon: BookOpen,
      description: 'Organize PDF lecture notes, formula sheets, problem sets, and key references attached directly to topics.',
      highlight: 'No more digging through random folders or messaging apps.',
    },
    {
      id: 'tracking',
      title: 'Evidence-Based Progress',
      icon: LineChart,
      description: 'Replace fake checkbox illusions with real checkpoint tests and topic retention indicators.',
      highlight: 'Know exactly what is mastered and what needs review.',
    },
    {
      id: 'ai',
      title: 'Pluto AI Companion',
      icon: Sparkles,
      description: 'Instant academic clarifications, Feynman technique breakdowns, and practice quizzes right inside your study flow.',
      highlight: 'Context-aware learning assistant that respects your syllabus.',
    },
  ];

  return (
    <section id="what-is-studypilot" className="py-20 md:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            THE INTEGRATED SYSTEM
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight text-balance">
            Your study life, in one place.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
            Most students juggle five disconnected apps: a calendar, a to-do list, a timer, scattered PDFs, and a chat window.
            StudyPilot unites planning, focused study, topic tracking, materials, and intelligent learning into a single cohesive Android companion.
          </p>
        </div>

        {/* Split Layout: Pillars selection on left, interactive dashboard composition on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Pillar Cards */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === idx;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border ${
                    isSelected
                      ? 'bg-neutral-950 text-white border-neutral-900 shadow-md translate-x-1'
                      : 'bg-neutral-50/70 hover:bg-neutral-100/80 text-neutral-800 border-neutral-200/80'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'bg-neutral-850 text-lime-400'
                          : 'bg-white text-neutral-700 border border-neutral-200 shadow-xs'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-base font-bold ${isSelected ? 'text-white' : 'text-neutral-900'}`}>
                          {pillar.title}
                        </h3>
                        {isSelected && (
                          <span className="text-[11px] font-mono text-lime-400 hidden sm:inline-block">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isSelected ? 'text-neutral-300' : 'text-neutral-600'}`}>
                        {pillar.description}
                      </p>
                      {isSelected && (
                        <div className="mt-3 pt-2.5 border-t border-neutral-800 flex items-center gap-2 text-xs text-lime-400">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>{pillar.highlight}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Composition / Deep Dive View */}
          <div className="lg:col-span-6">
            <div className="relative bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-800 overflow-hidden">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Composition Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-mono text-lime-400 uppercase tracking-widest">
                    StudyPilot Engine Architecture
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {pillars[activePillar].title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-lime-400">
                  {React.createElement(pillars[activePillar].icon, { className: 'w-5 h-5' })}
                </div>
              </div>

              {/* Pillar Specific Live Mock State */}
              <div className="space-y-4">
                {activePillar === 0 && (
                  <div className="space-y-3">
                    <div className="bg-neutral-850 p-4 rounded-xl border border-neutral-800">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-neutral-400">Semester Exam Prep</span>
                        <span className="text-lime-400 font-mono font-semibold">Adaptive Calculation</span>
                      </div>
                      <p className="text-sm font-semibold text-white">Daily Target: 3.5 Hours · 2 Core Topics</p>
                      <div className="w-full bg-neutral-800 h-2 rounded-full mt-3 overflow-hidden">
                        <div className="bg-lime-400 h-full rounded-full w-3/4" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-neutral-850 p-3 rounded-xl border border-neutral-800">
                        <span className="text-neutral-400 block text-[10px]">REMAINING DAYS</span>
                        <span className="text-base font-bold text-white font-mono">24 Days</span>
                      </div>
                      <div className="bg-neutral-850 p-3 rounded-xl border border-neutral-800">
                        <span className="text-neutral-400 block text-[10px]">CONFIDENCE SCORE</span>
                        <span className="text-base font-bold text-lime-400 font-mono">88%</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePillar === 1 && (
                  <div className="space-y-3 text-center py-4 bg-neutral-850 rounded-2xl border border-neutral-800">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-lime-400">
                      Guardian Session in Progress
                    </span>
                    <div className="text-4xl font-mono font-bold text-white tracking-wider my-2">
                      45:00
                    </div>
                    <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                      App lock active · Ambient study tone playing · Notifications silenced
                    </p>
                  </div>
                )}

                {activePillar === 2 && (
                  <div className="space-y-2">
                    {[
                      { name: 'Organic Chemistry Reactions Summary.pdf', size: '3.4 MB', pages: '18 pages' },
                      { name: 'Calculus Derivatives & Integrals Sheet.pdf', size: '1.2 MB', pages: '6 pages' },
                      { name: 'Classical Mechanics Problem Set 4.pdf', size: '4.8 MB', pages: '24 pages' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-neutral-850 border border-neutral-800 text-xs">
                        <span className="text-neutral-200 font-medium truncate max-w-[200px]">{item.name}</span>
                        <span className="text-neutral-400 font-mono text-[11px]">{item.size}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activePillar === 3 && (
                  <div className="space-y-3">
                    <div className="bg-neutral-850 p-4 rounded-xl border border-neutral-800">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-300">Thermodynamics: Heat Engines</span>
                        <span className="text-xs font-mono text-lime-400 bg-neutral-800 px-2 py-0.5 rounded">Verified Mastery</span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-2">
                        Passed checkpoint evaluation with 9/10 score on Carnot cycle efficiency questions.
                      </p>
                    </div>
                    <div className="p-3 bg-neutral-850 rounded-xl border border-neutral-800 flex items-center justify-between text-xs">
                      <span className="text-neutral-400">Next Evidence Test Due:</span>
                      <span className="text-white font-medium">Tomorrow 10:00 AM</span>
                    </div>
                  </div>
                )}

                {activePillar === 4 && (
                  <div className="space-y-3 bg-neutral-850 p-4 rounded-xl border border-neutral-800 text-xs">
                    <div className="flex items-center gap-2 text-lime-400 font-semibold">
                      <Sparkles className="w-4 h-4" />
                      <span>Pluto AI Learning Companion</span>
                    </div>
                    <p className="text-neutral-300 leading-relaxed text-xs">
                      "Would you like me to walk through the difference between isothermal and adiabatic expansion using a piston visual metaphor?"
                    </p>
                    <div className="flex gap-2 pt-1">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-white text-[11px]">Yes, explain it</span>
                      <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-400 text-[11px]">Give me 3 practice problems</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom detail row */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Designed specifically for Android OS</span>
                <span className="text-lime-400 font-medium">Native responsiveness</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
