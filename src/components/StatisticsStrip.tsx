/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Download, Calendar, Globe, Compass, ShieldCheck, Target } from 'lucide-react';
import { statsService, DownloadStats } from '../services/statsService';

export const StatisticsStrip: React.FC = () => {
  const [stats, setStats] = useState<DownloadStats>({
    totalDownloads: 0,
    downloadsThisMonth: 0,
    countriesReached: '—',
    isLive: false,
  });

  useEffect(() => {
    let isMounted = true;
    statsService.getStats().then((data) => {
      if (isMounted) setStats(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="relative border-y border-neutral-200/80 bg-neutral-50/70 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Real Metrics Grid (Honest zeros in development mode, real numbers when live) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {/* Metric 1: Total Downloads */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center shrink-0">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-neutral-950 tabular-nums">
                {stats.totalDownloads.toLocaleString()}
              </p>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">
                Total Downloads
              </p>
            </div>
          </div>

          {/* Metric 2: Downloads This Month */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-neutral-950 tabular-nums">
                {stats.downloadsThisMonth.toLocaleString()}
              </p>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">
                Downloads This Month
              </p>
            </div>
          </div>

          {/* Metric 3: Countries Reached */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-neutral-950 tabular-nums">
                {typeof stats.countriesReached === 'number'
                  ? stats.countriesReached.toLocaleString()
                  : stats.countriesReached}
              </p>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">
                Countries Reached
              </p>
            </div>
          </div>
        </div>

        {/* Future-Ready Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
          {/* Pillar 1 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-neutral-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-neutral-950 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-neutral-950">Coming Soon</h3>
                <span className="text-[10px] font-mono font-medium text-lime-700 bg-lime-50 px-1.5 py-0.2 rounded">
                  In QA
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Android APK release undergoing final syllabus optimization before release.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-neutral-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-neutral-950">Built for Students</h3>
                <span className="text-[10px] font-mono font-medium text-neutral-600 bg-neutral-100 px-1.5 py-0.2 rounded">
                  Purpose-Driven
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Designed around actual academic workloads, exam goals, and distraction elimination.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-neutral-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-lime-100 text-lime-800 flex items-center justify-center shrink-0 mt-0.5">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-neutral-950">Focused on Real Study</h3>
                <span className="text-[10px] font-mono font-medium text-lime-800 bg-lime-50 px-1.5 py-0.2 rounded">
                  Zero Vanity
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Requires concrete evidence tests and genuine topic mastery before marking complete.
              </p>
            </div>
          </div>
        </div>

        {/* Subtext clarifying future backend readiness */}
        <p className="text-[11px] text-neutral-400 text-center mt-6">
          Real-time download verification and release analytics will activate automatically upon APK public availability.
        </p>
      </div>
    </section>
  );
};
