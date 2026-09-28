/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatisticsStrip } from './components/StatisticsStrip';
import { WhatIsStudyPilot } from './components/WhatIsStudyPilot';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
import { AppPreview } from './components/AppPreview';
import { CommunitySection } from './components/CommunitySection';
import { SuggestionSection } from './components/SuggestionSection';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export default function App() {
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const closeAllModals = () => {
    setNotifyModalOpen(false);
    setPrivacyModalOpen(false);
    setTermsModalOpen(false);
    setContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-lime-400 selection:text-neutral-950">
      {/* 1. Responsive Navigation Bar */}
      <Navbar onOpenNotifyModal={() => setNotifyModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with Android Phone Mockup & Floating Cards */}
        <HeroSection onOpenNotifyModal={() => setNotifyModalOpen(true)} />

        {/* 3. Honest Trust & Statistics Strip */}
        <StatisticsStrip />

        {/* 4. What is StudyPilot? Split Section */}
        <WhatIsStudyPilot />

        {/* 5. Features Grid (8 Capabilities) */}
        <FeaturesSection />

        {/* 6. How It Works (5-Step Visual Timeline) */}
        <HowItWorks />

        {/* 7. App Preview (Interactive Screen Showcase) */}
        <AppPreview />

        {/* 8. Community Section Placeholder */}
        <CommunitySection onOpenNotifyModal={() => setNotifyModalOpen(true)} />

        {/* 9. Suggestion Section (+ ADD, ↻ MODIFY, — REMOVE) */}
        <SuggestionSection />

        {/* 10. Final Download CTA */}
        <DownloadCTA onOpenNotifyModal={() => setNotifyModalOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenTermsModal={() => setTermsModalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Modals for Notifications & Legal Details */}
      <Modals
        notifyModalOpen={notifyModalOpen}
        privacyModalOpen={privacyModalOpen}
        termsModalOpen={termsModalOpen}
        contactModalOpen={contactModalOpen}
        onCloseAll={closeAllModals}
      />
    </div>
  );
}
