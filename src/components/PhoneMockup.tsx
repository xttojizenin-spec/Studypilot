/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Clock, CheckCircle2, Flame, BookOpen, Brain, Sparkles, ChevronRight, Play } from 'lucide-react';

interface PhoneMockupProps {
  activeScreen?: 'dashboard' | 'planner' | 'focus' | 'progress' | 'pluto' | 'materials';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ activeScreen = 'dashboard' }) => {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] md:max-w-[350px] aspect-[9/18.5] select-none">
      {/* Outer Phone Hardware Frame */}
      <div className="absolute inset-0 bg-neutral-900 rounded-[44px] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)_inset,0_0_0_2px_rgba(0,0,0,0.8)] border border-neutral-700/60 transition-all duration-300">
        {/* Antennas & Hardware Volume buttons */}
        <div className="absolute -left-[12px] top-28 w-[3px] h-10 bg-neutral-800 rounded-l-sm" />
        <div className="absolute -left-[12px] top-42 w-[3px] h-10 bg-neutral-800 rounded-l-sm" />
        <div className="absolute -right-[12px] top-32 w-[3px] h-12 bg-neutral-800 rounded-r-sm" />

        {/* Inner Screen Bezel */}
        <div className="relative w-full h-full bg-[#fafaf9] rounded-[36px] overflow-hidden flex flex-col border border-neutral-200 text-neutral-900">
          
          {/* Android Status Bar */}
          <div className="h-7 w-full px-6 flex items-center justify-between text-[11px] font-mono font-medium text-neutral-600 bg-white/95 shrink-0 z-20">
            <span>09:41</span>
            {/* Camera Punchhole */}
            <div className="w-3.5 h-3.5 bg-neutral-950 rounded-full border border-neutral-800 shadow-inner" />
            <div className="flex items-center gap-1.5 text-neutral-800">
              <span className="text-[10px]">5G</span>
              <div className="w-4 h-2 rounded-xs border border-neutral-600 flex items-center p-0.5">
                <div className="w-2.5 h-full bg-neutral-800 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* App Screen Content depending on activeScreen */}
          {activeScreen === 'dashboard' && (
            <div className="flex-1 flex flex-col overflow-y-auto px-4 pt-3 pb-5 space-y-3 bg-[#fcfcfb]">
              {/* App Topbar */}
              <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
                <div>
                  <p className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Welcome back</p>
                  <h4 className="text-sm font-bold text-neutral-900">Fahad's Study Space</h4>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full text-amber-900 text-[11px] font-semibold">
                  <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>7d streak</span>
                </div>
              </div>

              {/* Progress Summary Card */}
              <div className="bg-neutral-950 text-white rounded-2xl p-3.5 relative overflow-hidden shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono tracking-wide text-neutral-400">TODAY'S TARGET</span>
                    <h5 className="text-xl font-bold tracking-tight text-white mt-0.5">72% <span className="text-xs font-normal text-neutral-400">mastered</span></h5>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-lime-400/40 flex items-center justify-center relative">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-neutral-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-lime-400"
                        strokeDasharray="72, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-[10px] font-bold text-white">4/6</span>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-300">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-lime-400" />
                    3h 15m focus logged
                  </span>
                  <span className="text-lime-400 font-medium">On schedule</span>
                </div>
              </div>

              {/* Active / Next Focus Session */}
              <div className="bg-white border border-neutral-200/90 rounded-2xl p-3 shadow-xs">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="font-semibold text-neutral-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                    Next: Deep Study
                  </span>
                  <span className="font-mono text-neutral-500">45 min</span>
                </div>
                <p className="text-xs font-medium text-neutral-800">Modern Physics: Quantum Numbers & Orbitals</p>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500">Includes 2 evidence tests</span>
                  <button className="flex items-center gap-1 px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-[10px] font-semibold">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    Start Session
                  </button>
                </div>
              </div>

              {/* Subject Breakdown Mini List */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-medium text-neutral-600 px-0.5">
                  <span>Syllabus Modules</span>
                  <span className="text-[10px] text-neutral-400">3 of 8 active</span>
                </div>
                <div className="bg-white border border-neutral-200/80 rounded-xl p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                      Ph
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-900 leading-tight">Physics</p>
                      <p className="text-[10px] text-neutral-500">Thermodynamics · 2 topics left</p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <div className="bg-white border border-neutral-200/80 rounded-xl p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center">
                      Ch
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-900 leading-tight">Chemistry</p>
                      <p className="text-[10px] text-neutral-500">Organic Synthesis · Complete</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-600" />
                </div>
              </div>

              {/* Pluto AI Assistant Quick Prompt */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-2.5 flex items-center gap-2 text-neutral-700">
                <div className="w-6 h-6 rounded-md bg-neutral-900 text-lime-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3 h-3" />
                </div>
                <p className="text-[10px] leading-tight text-neutral-600 flex-1">
                  <span className="font-semibold text-neutral-900">Pluto AI:</span> Ready for a 3-question recall quiz on Carnot Cycles?
                </p>
              </div>
            </div>
          )}

          {activeScreen === 'planner' && (
            <div className="flex-1 flex flex-col overflow-y-auto px-4 pt-3 pb-5 space-y-3 bg-[#fcfcfb]">
              <div className="border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Syllabus Engine</span>
                <h4 className="text-sm font-bold text-neutral-900">Adaptive Exam Timeline</h4>
                <p className="text-[11px] text-neutral-500">Target: Semester Finals · 34 days remaining</p>
              </div>

              <div className="space-y-2">
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-neutral-900">Calculus & Linear Algebra</span>
                    <span className="text-[10px] font-mono text-lime-700 bg-lime-50 px-1.5 py-0.5 rounded">85% done</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mt-1.5">
                    <div className="w-[85%] h-full bg-lime-500 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-2">
                    <span>17 chapters covered</span>
                    <span>3 review tests queued</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-neutral-900">Thermodynamics & Kinetic Theory</span>
                    <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">60% done</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mt-1.5">
                    <div className="w-[60%] h-full bg-amber-500 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-2">
                    <span>12 chapters covered</span>
                    <span>Entropy module active</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-neutral-900">Modern Organic Synthesis</span>
                    <span className="text-[10px] font-mono text-neutral-700 bg-neutral-100 px-1.5 py-0.5 rounded">40% done</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mt-1.5">
                    <div className="w-[40%] h-full bg-neutral-800 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-2">
                    <span>8 chapters covered</span>
                    <span>Starts this afternoon</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeScreen === 'focus' && (
            <div className="flex-1 flex flex-col justify-between px-4 pt-4 pb-6 bg-neutral-950 text-white">
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-800 text-[10px] font-medium text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
                  Guardian Focus Active
                </div>
                <h4 className="text-xs text-neutral-400 mt-3">Electromagnetism · Gauss's Law</h4>
              </div>

              {/* Big Minimal Timer */}
              <div className="my-auto text-center py-4">
                <div className="text-5xl font-mono font-bold tracking-tight text-white">
                  38:20
                </div>
                <p className="text-xs text-lime-400 mt-2 font-mono">Deep Work Session #3</p>
                <div className="mt-4 flex justify-center gap-1">
                  <span className="w-6 h-1 rounded-full bg-lime-400" />
                  <span className="w-6 h-1 rounded-full bg-lime-400" />
                  <span className="w-6 h-1 rounded-full bg-lime-400" />
                  <span className="w-6 h-1 rounded-full bg-neutral-800" />
                </div>
              </div>

              <div className="space-y-2 text-center">
                <p className="text-[11px] text-neutral-400">All notifications muted · Strict accountability</p>
                <button className="w-full py-2.5 bg-white text-neutral-950 rounded-xl text-xs font-semibold hover:bg-neutral-100 transition-colors">
                  Take 5-Minute Break
                </button>
              </div>
            </div>
          )}

          {activeScreen === 'progress' && (
            <div className="flex-1 flex flex-col overflow-y-auto px-4 pt-3 pb-5 space-y-3 bg-[#fcfcfb]">
              <div className="border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Analytics</span>
                <h4 className="text-sm font-bold text-neutral-900">Study Consistency Curve</h4>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-3">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold text-neutral-800">Weekly Focus Hours</span>
                  <span className="font-mono text-lime-700 font-bold">28.4 hrs</span>
                </div>
                {/* Visual Bar representation */}
                <div className="flex items-end justify-between h-20 pt-2 gap-1.5">
                  {[
                    { day: 'M', h: '60%' },
                    { day: 'T', h: '85%' },
                    { day: 'W', h: '45%' },
                    { day: 'T', h: '95%' },
                    { day: 'F', h: '75%' },
                    { day: 'S', h: '90%' },
                    { day: 'S', h: '65%' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-neutral-100 rounded-t-sm flex items-end h-16">
                        <div
                          className={`w-full rounded-t-sm ${idx === 3 || idx === 5 ? 'bg-lime-500' : 'bg-neutral-900'}`}
                          style={{ height: item.h }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-neutral-500">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-3">
                <p className="text-[10px] font-mono text-neutral-500 uppercase">Retention Score</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-neutral-950">91.4%</span>
                  <span className="text-xs text-lime-600 font-medium">+4.2% this week</span>
                </div>
                <p className="text-[11px] text-neutral-600 mt-1">Based on 14 chapter evidence tests</p>
              </div>
            </div>
          )}

          {activeScreen === 'pluto' && (
            <div className="flex-1 flex flex-col overflow-y-auto px-4 pt-3 pb-5 space-y-2.5 bg-[#fcfcfb]">
              <div className="border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">AI Companion</span>
                <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                  <Brain className="w-4 h-4 text-lime-600" />
                  Pluto AI Assistant
                </h4>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-neutral-100 rounded-xl rounded-tl-xs max-w-[85%] text-neutral-800">
                  Can you simplify the Second Law of Thermodynamics using the entropy concept?
                </div>
                <div className="p-2.5 bg-neutral-900 text-white rounded-xl rounded-tr-xs ml-auto max-w-[90%] text-[11px] leading-relaxed">
                  <span className="text-lime-400 font-medium block mb-1">Pluto's Breakdown:</span>
                  Think of entropy as the number of microscopic ways energy can be arranged. Natural processes naturally disperse energy toward greater probability.
                </div>
                <div className="p-2 bg-lime-50 border border-lime-200 rounded-lg text-[10px] text-neutral-800 flex items-center justify-between">
                  <span>Would you like to test your understanding with 2 quick questions?</span>
                  <span className="text-lime-700 font-bold ml-1">Practice</span>
                </div>
              </div>
            </div>
          )}

          {activeScreen === 'materials' && (
            <div className="flex-1 flex flex-col overflow-y-auto px-4 pt-3 pb-5 space-y-2.5 bg-[#fcfcfb]">
              <div className="border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Library</span>
                <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-neutral-800" />
                  Study Materials
                </h4>
              </div>

              <div className="space-y-1.5">
                {[
                  { title: 'Thermodynamics Formula Sheet', sub: 'PDF · 4.2 MB · 12 Pages', tag: 'Formulas' },
                  { title: 'Organic Reaction Mechanisms', sub: 'Annotated Notes · 8.1 MB', tag: 'Notes' },
                  { title: 'Calculus III Past Paper Vault', sub: '2019-2025 Solved Solutions', tag: 'Exams' },
                ].map((doc, idx) => (
                  <div key={idx} className="p-2.5 bg-white border border-neutral-200 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-neutral-900 leading-tight">{doc.title}</p>
                      <p className="text-[10px] text-neutral-500 mt-0.5">{doc.sub}</p>
                    </div>
                    <span className="text-[10px] font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                      {doc.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Android Bottom Navigation Bar */}
          <div className="h-11 w-full bg-white border-t border-neutral-200/90 px-5 flex items-center justify-around text-neutral-400 shrink-0">
            <div className={`flex flex-col items-center ${activeScreen === 'dashboard' ? 'text-neutral-950 font-bold' : ''}`}>
              <div className="w-4 h-4 flex items-center justify-center">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
              <span className="text-[8px] mt-0.5">Home</span>
            </div>

            <div className={`flex flex-col items-center ${activeScreen === 'planner' ? 'text-neutral-950 font-bold' : ''}`}>
              <div className="w-4 h-4 flex items-center justify-center">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <span className="text-[8px] mt-0.5">Planner</span>
            </div>

            <div className={`flex flex-col items-center ${activeScreen === 'focus' ? 'text-neutral-950 font-bold' : ''}`}>
              <div className="w-5 h-5 rounded-full bg-lime-400 text-neutral-950 flex items-center justify-center -mt-1 shadow-xs">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span className="text-[8px] mt-0.5 font-bold text-neutral-950">Focus</span>
            </div>

            <div className={`flex flex-col items-center ${activeScreen === 'progress' ? 'text-neutral-950 font-bold' : ''}`}>
              <div className="w-4 h-4 flex items-center justify-center">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10"/>
                  <path d="M12 20V4"/>
                  <path d="M6 20v-6"/>
                </svg>
              </div>
              <span className="text-[8px] mt-0.5">Analytics</span>
            </div>

            <div className={`flex flex-col items-center ${activeScreen === 'pluto' ? 'text-neutral-950 font-bold' : ''}`}>
              <div className="w-4 h-4 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-[8px] mt-0.5">Pluto</span>
            </div>
          </div>

          {/* Android Gesture Bar */}
          <div className="h-3 w-full bg-white flex justify-center items-center pb-1">
            <div className="w-24 h-1 bg-neutral-300 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};
