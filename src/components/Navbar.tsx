/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { configService } from '../services/configService';

interface NavbarProps {
  onOpenNotifyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenNotifyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAvailable = configService.isApkAvailable();
  const apk = configService.getApkConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Preview', href: '#app-preview' },
    { label: 'Community', href: '#community' },
    { label: 'Download', href: '#download' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-3'
          : 'bg-white/60 backdrop-blur-xs border-b border-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-md"
            aria-label="StudyPilot Home"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-950 text-white font-mono text-sm tracking-tighter shadow-sm transition-transform duration-200 group-hover:scale-105">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 19 21 12 17 5 21 12 2"/>
              </svg>
            </span>
            <span className="flex items-center font-bold tracking-tight text-neutral-950">
              StudyPilot
              <span className="w-1.5 h-1.5 rounded-full bg-lime-500 ml-1 inline-block" />
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-[14px] font-medium text-neutral-600"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-neutral-950 transition-colors duration-150 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenNotifyModal}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-neutral-100 hover:bg-neutral-200/90 active:bg-neutral-300 rounded-lg transition-colors duration-150 border border-neutral-200/80 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <span>{isAvailable ? apk.readyLabel : 'Get StudyPilot'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-700" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNotifyModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-850 rounded-lg transition-colors"
              >
                <span>{isAvailable ? apk.readyLabel : 'Get StudyPilot'}</span>
                <span className="text-[11px] font-normal text-lime-400 bg-neutral-800 px-2 py-0.5 rounded">
                  {isAvailable && apk.version ? `v${apk.version}` : 'Android Preview'}
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
