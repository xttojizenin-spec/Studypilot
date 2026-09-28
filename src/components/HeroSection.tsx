/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Bell, CheckCircle, Sparkles } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { configService } from '../services/configService';
import { downloadService } from '../services/downloadService';

interface HeroSectionProps {
  onOpenNotifyModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenNotifyModal }) => {
  const apk = configService.getApkConfig();
  const isAvailable = configService.isApkAvailable();

  const handlePrimaryClick = () => {
    if (isAvailable) {
      downloadService.recordDownload('hero');
    } else {
      onOpenNotifyModal();
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Background Curved Elements & Organic Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft lime-green glow circle */}
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-lime-300/15 blur-[120px]" />
        
        {/* Very light gray curved shapes & subtle lines */}
        <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] rounded-full bg-neutral-100/70 blur-[90px]" />

        {/* Large subtle curved elliptical SVG lines */}
        <svg
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] opacity-[0.4] stroke-neutral-200 fill-none"
          viewBox="0 0 1400 800"
        >
          <ellipse cx="700" cy="400" rx="650" ry="320" strokeWidth="1" strokeDasharray="6 6" />
          <ellipse cx="700" cy="400" rx="520" ry="240" strokeWidth="1" />
          <ellipse cx="700" cy="400" rx="380" ry="170" strokeWidth="0.75" />
          <path d="M100 650 C 400 500, 800 600, 1300 450" strokeWidth="1" stroke="rgba(132, 204, 22, 0.25)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Small Brand Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 font-mono">
                YOUR PERSONAL STUDY COMPANION
              </span>
            </div>

            {/* Large Bold Hero Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-neutral-950 tracking-tight leading-[1.08] text-balance mb-6">
              Study smarter. <br />
              <span className="text-neutral-900">
                Finish what you started.
              </span>
            </h1>

            {/* Concise Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl mb-8">
              Plan your syllabus, stay focused, track your progress, and make every study session count with StudyPilot.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={handlePrimaryClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-850 active:bg-neutral-900 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
              >
                <span>{isAvailable ? apk.readyLabel : apk.comingSoonLabel}</span>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-neutral-800 text-lime-400 group-hover:bg-lime-400 group-hover:text-neutral-950 transition-colors">
                  <Bell className="w-3 h-3" />
                </span>
              </button>

              {/* Secondary CTA */}
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-700 hover:text-neutral-950 bg-white hover:bg-neutral-50 active:bg-neutral-100 rounded-xl border border-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
              >
                <span>Explore features</span>
                <ArrowDown className="w-4 h-4 text-neutral-500" />
              </a>
            </div>

            {/* Quiet Trust/Metadata Indicator */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5 text-neutral-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-lime-600" />
                Designed for Android
              </span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Zero Distractions</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>Privacy First</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-neutral-700">Created by Mohammad Fahad</span>
            </div>

          </div>

          {/* Right Column: Hero Android Phone & Floating UI Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 lg:py-0">
            <div className="relative w-full max-w-[380px] flex justify-center">
              
              {/* Soft decorative shadow disc behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-lime-400/20 blur-3xl -z-10" />

              {/* Phone Mockup */}
              <div className="relative z-10 transform transition-transform duration-300 hover:scale-[1.01]">
                <PhoneMockup activeScreen="dashboard" />
              </div>

              {/* Floating UI Card 1: Today's Progress — 72% */}
              <div className="hidden sm:flex absolute -left-6 sm:-left-10 top-20 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-neutral-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.06)] animate-float">
                <div className="w-8 h-8 rounded-lg bg-lime-100 text-lime-800 font-bold text-xs flex items-center justify-center font-mono">
                  72%
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-900 leading-tight">Today's Progress</p>
                  <p className="text-[11px] text-neutral-500">4 of 6 topics completed</p>
                </div>
              </div>

              {/* Floating UI Card 2: Focus Session — 48 min */}
              <div className="hidden sm:flex absolute -right-4 sm:-right-8 top-36 z-20 items-center gap-3 bg-neutral-950 text-white px-3.5 py-2.5 rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-neutral-800 animate-float-delayed">
                <div className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">Focus Session</p>
                  <p className="text-[11px] text-lime-400 font-mono">48 min deep study logged</p>
                </div>
              </div>

              {/* Floating UI Card 3: Physics — 2 topics left */}
              <div className="hidden sm:flex absolute -left-8 sm:-left-12 bottom-36 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-neutral-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.06)] animate-float-delayed">
                <div className="w-7 h-7 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-800">
                  <Sparkles className="w-3.5 h-3.5 text-lime-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-900 leading-tight">Physics</p>
                  <p className="text-[11px] text-neutral-500">2 topics left in Thermodynamics</p>
                </div>
              </div>

              {/* Floating UI Card 4: 🔥 7 day streak */}
              <div className="hidden sm:flex absolute -right-6 sm:-right-8 bottom-20 z-20 items-center gap-2 bg-white px-3 py-2 rounded-xl border border-neutral-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.06)] animate-float">
                <span className="text-sm">🔥</span>
                <span className="text-xs font-bold text-neutral-900 font-mono">7 day streak</span>
                <span className="w-1.5 h-1.5 rounded-full bg-lime-500" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
