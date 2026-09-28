/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyModal,
  onOpenTermsModal,
  onOpenContactModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white font-mono text-sm tracking-tighter border border-neutral-800">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 19 21 12 17 5 21 12 2"/>
                </svg>
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                StudyPilot
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 ml-1 inline-block" />
              </span>
            </div>
            
            <p className="text-sm font-medium text-neutral-300">
              Study smarter. Stay focused. Keep moving forward.
            </p>
            <p className="text-xs text-neutral-500 max-w-md leading-relaxed">
              An intelligent, student-first study companion designed for Android to structure syllabi, eliminate distractions, track real progress, and elevate exam preparation.
            </p>
            <div className="pt-2 text-xs text-neutral-400">
              <span className="text-neutral-500">Project Architect & Lead Developer:</span>{' '}
              <span className="font-semibold text-neutral-200">Mohammad Fahad</span>
            </div>
          </div>

          {/* Links Col 1: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-neutral-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#app-preview" className="text-neutral-400 hover:text-white transition-colors">
                  App Preview
                </a>
              </li>
              <li>
                <a href="#community" className="text-neutral-400 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#download" className="text-neutral-400 hover:text-white transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Legal & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
              Future Links & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="text-neutral-400 hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTermsModal}
                  className="text-neutral-400 hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="text-neutral-400 hover:text-white transition-colors text-left"
                >
                  Contact & Support
                </button>
              </li>
              <li>
                <a
                  href="#suggestions"
                  className="text-lime-400 hover:text-lime-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Propose an Idea</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <span>© 2026 StudyPilot. All rights reserved.</span>
            <span className="mx-2">·</span>
            <span>Created by Mohammad Fahad</span>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-850 text-neutral-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
