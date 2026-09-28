/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PhoneMockup } from './PhoneMockup';
import { LayoutDashboard, Calendar, Focus, LineChart, Sparkles, BookOpen, CheckCircle } from 'lucide-react';
import { AppScreenPreview } from '../types';

export const AppPreview: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<'dashboard' | 'planner' | 'focus' | 'progress' | 'pluto' | 'materials'>('dashboard');

  const screenOptions: { id: 'dashboard' | 'planner' | 'focus' | 'progress' | 'pluto' | 'materials'; label: string; icon: any; summary: string }[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      summary: "Overview of today's study target, streak health, upcoming session, and active subjects.",
    },
    {
      id: 'planner',
      label: 'Study Planner',
      icon: Calendar,
      summary: 'Dynamic syllabus progress with exam countdown, topic weights, and adaptive rescheduling.',
    },
    {
      id: 'focus',
      label: 'Focus Mode',
      icon: Focus,
      summary: 'Guardian focus session with Pomodoro timer, notification suppression, and deep work logs.',
    },
    {
      id: 'progress',
      label: 'Analytics',
      icon: LineChart,
      summary: 'Weekly study consistency histograms, topic mastery curves, and active retention tracking.',
    },
    {
      id: 'pluto',
      label: 'Pluto AI',
      icon: Sparkles,
      summary: 'Context-aware academic assistant for instant concept breakdowns, active recall, and quizzes.',
    },
    {
      id: 'materials',
      label: 'Study Materials',
      icon: BookOpen,
      summary: 'Direct repository for PDFs, formula sheets, problem sets, and chapter notes organized by topic.',
    },
  ];

  const currentOption = screenOptions.find((o) => o.id === selectedScreen)!;

  return (
    <section id="app-preview" className="py-20 md:py-28 bg-[#fafaf9] border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            INTERFACE SHOWCASE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight text-balance">
            Meet StudyPilot
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 leading-relaxed">
            Crafted with high academic density, clean contrast, and distraction-free ergonomics for Android. Explore the core interface workflows below.
          </p>

          {/* Interactive Screen Selector */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-neutral-200/60 rounded-2xl max-w-2xl mx-auto">
            {screenOptions.map((opt) => {
              const Icon = opt.icon;
              const isActive = selectedScreen === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedScreen(opt.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                    isActive
                      ? 'bg-neutral-950 text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-lime-400' : 'text-neutral-500'}`} />
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Composition with Depth & Overlapping Cards */}
        <div className="relative max-w-5xl mx-auto mt-6">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lime-300/10 blur-[130px] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Context Card */}
            <div className="lg:col-span-4 space-y-4 text-left order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-sm">
                <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                  CURRENT SCREEN
                </span>
                <h3 className="text-xl font-bold text-neutral-950">
                  {currentOption.label}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  {currentOption.summary}
                </p>

                <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <CheckCircle className="w-3.5 h-3.5 text-lime-600 shrink-0" />
                    <span>Native Android gesture navigation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <CheckCircle className="w-3.5 h-3.5 text-lime-600 shrink-0" />
                    <span>Instant offline data synchronization</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <CheckCircle className="w-3.5 h-3.5 text-lime-600 shrink-0" />
                    <span>Battery-friendly dark mode enabled</span>
                  </div>
                </div>
              </div>

              {/* Quick tip pill-less info */}
              <div className="p-4 rounded-xl bg-neutral-100/70 border border-neutral-200/60 text-xs text-neutral-600">
                <span className="font-semibold text-neutral-900">Developer Note: </span>
                Click the tabs above to test-drive all 6 Android screen states inside the hardware frame.
              </div>
            </div>

            {/* Center: Hero Phone Mockup with Active Screen */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="transform transition-all duration-300 hover:scale-[1.01] drop-shadow-2xl">
                <PhoneMockup activeScreen={selectedScreen} />
              </div>
            </div>

            {/* Right: Technical Spec Card */}
            <div className="lg:col-span-3 space-y-3 order-3">
              <div className="bg-white rounded-2xl p-5 border border-neutral-200/90 shadow-xs text-left">
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Target Specs
                </p>
                <div className="mt-3 space-y-3">
                  <div>
                    <span className="text-[11px] text-neutral-500 block">Compatibility</span>
                    <span className="text-xs font-semibold text-neutral-900 font-mono">Android 8.0 (Oreo) +</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 block">Package Size</span>
                    <span className="text-xs font-semibold text-neutral-900 font-mono">71.32 MB</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 block">Privacy</span>
                    <span className="text-xs font-semibold text-neutral-900">100% Local-first database</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 block">Ad Policy</span>
                    <span className="text-xs font-semibold text-lime-700 font-mono">Zero Advertisements</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
