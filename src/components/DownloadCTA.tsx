/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, Bell, Shield, Smartphone, HardDrive, Check, Sparkles } from 'lucide-react';
import { configService } from '../services/configService';
import { downloadService } from '../services/downloadService';

interface DownloadCTAProps {
  onOpenNotifyModal: () => void;
}

export const DownloadCTA: React.FC<DownloadCTAProps> = ({ onOpenNotifyModal }) => {
  const apk = configService.getApkConfig();
  const isAvailable = configService.isApkAvailable();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleDownloadAction = () => {
    if (isAvailable) {
      downloadService.recordDownload('cta');
    } else {
      onOpenNotifyModal();
    }
  };

  const handleEmailSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    try {
      const list = JSON.parse(localStorage.getItem('studypilot_waitlist') || '[]');
      list.push({ email: emailInput, source: 'cta_strip', timestamp: new Date().toISOString() });
      localStorage.setItem('studypilot_waitlist', JSON.stringify(list));
    } catch {
      // Fallback
    }
    setSubscribed(true);
  };

  return (
    <section id="download" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background soft curves */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-lime-300/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container */}
        <div className="relative bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl overflow-hidden border border-neutral-850">
          
          {/* Subtle decorative elliptical glow in container */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-lime-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span>OFFICIAL ANDROID APPLET</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Ready to study smarter?
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
              StudyPilot is being built to make focused, consistent study easier.
            </p>

            {/* Main Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleDownloadAction}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold text-neutral-950 bg-lime-400 hover:bg-lime-300 active:bg-lime-500 rounded-2xl transition-all duration-200 shadow-[0_10px_30px_rgba(132,204,22,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                {isAvailable ? (
                  <>
                    <Download className="w-5 h-5 text-neutral-950" />
                    <span>{apk.readyLabel}</span>
                  </>
                ) : (
                  <>
                    <Bell className="w-5 h-5 text-neutral-950" />
                    <span>{apk.comingSoonLabel}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenNotifyModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-850 rounded-2xl border border-neutral-800 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-lime-400" />
                <span>Get Launch Notification</span>
              </button>
            </div>

            {/* Quick Email capture directly in CTA */}
            <div className="pt-4 max-w-md mx-auto">
              {subscribed ? (
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-lime-400 flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>We'll email you the direct APK link on launch day.</span>
                </div>
              ) : (
                <form onSubmit={handleEmailSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email for release alert"
                    className="flex-1 bg-neutral-900/90 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-lime-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold whitespace-nowrap transition-colors"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>

            {/* Release Specifications Grid */}
            <div className="pt-8 border-t border-neutral-850/90 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                <Smartphone className="w-4 h-4 text-lime-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-mono">Platform</p>
                  <p className="text-xs font-bold text-white">Android 8.0+</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                <HardDrive className="w-4 h-4 text-lime-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-mono">Package</p>
                  <p className="text-xs font-bold text-white">{apk.size ? `${apk.size} APK` : '71.32 MB APK'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                <Shield className="w-4 h-4 text-lime-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-mono">Privacy</p>
                  <p className="text-xs font-bold text-white">Local-First</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                <Sparkles className="w-4 h-4 text-lime-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-mono">Monetization</p>
                  <p className="text-xs font-bold text-white">Ad-Free Experience</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
