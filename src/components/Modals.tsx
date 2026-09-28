/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Bell, Check, X, Shield, FileText, Mail, Send } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface ModalsProps {
  notifyModalOpen: boolean;
  privacyModalOpen: boolean;
  termsModalOpen: boolean;
  contactModalOpen: boolean;
  onCloseAll: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  notifyModalOpen,
  privacyModalOpen,
  termsModalOpen,
  contactModalOpen,
  onCloseAll,
}) => {
  const [email, setEmail] = useState('');
  const [deviceType, setDeviceType] = useState('Android Smartphone');
  const [submittedNotify, setSubmittedNotify] = useState(false);

  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const waitlist = JSON.parse(localStorage.getItem('studypilot_waitlist') || '[]');
      waitlist.push({ email, deviceType, date: new Date().toISOString() });
      localStorage.setItem('studypilot_waitlist', JSON.stringify(waitlist));
    } catch {
      // Local fallback
    }

    setSubmittedNotify(true);
    setTimeout(() => {
      onCloseAll();
      setSubmittedNotify(false);
      setEmail('');
    }, 2200);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      onCloseAll();
      setContactSubmitted(false);
      setContactSubject('');
      setContactMessage('');
    }, 2000);
  };

  if (!notifyModalOpen && !privacyModalOpen && !termsModalOpen && !contactModalOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onCloseAll}
    >
      {/* 1. Early Access / Coming Soon Notification Modal */}
      {notifyModalOpen && (
        <div
          className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neutral-950 text-lime-400 flex items-center justify-center">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-950">StudyPilot Android Release</h3>
                <p className="text-[11px] text-neutral-500">Targeting Android 8.0 and above</p>
              </div>
            </div>
            <button
              onClick={onCloseAll}
              className="w-7 h-7 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center text-xs"
            >
              ✕
            </button>
          </div>

          {submittedNotify ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-lime-100 text-lime-800 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-neutral-950">You're on the priority list!</h4>
              <p className="text-xs text-neutral-600 max-w-xs mx-auto">
                We will email you the official APK direct download link the moment testing concludes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="pt-4 space-y-4">
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 text-xs text-neutral-700 leading-relaxed">
                <span className="font-semibold text-neutral-900 block mb-1">Development Status:</span>
                StudyPilot is undergoing core syllabus scheduling QA. Leave your email below to receive the direct APK download package the moment builds are verified.
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Email Address <span className="text-neutral-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="student@example.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Target Android Device
                </label>
                <select
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                >
                  <option value="Android Smartphone">Android Smartphone (Pixel, Samsung, Xiaomi, etc.)</option>
                  <option value="Android Tablet">Android Tablet (Galaxy Tab, Lenovo, etc.)</option>
                  <option value="ChromeOS / Android Emulator">ChromeOS / Android Emulator</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onCloseAll}
                  className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-850 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Notify on Release</span>
                  <Send className="w-3 h-3 text-lime-400" />
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* 2. Privacy Policy Modal */}
      {privacyModalOpen && (
        <div
          className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-lime-600" />
              <h3 className="text-lg font-bold text-neutral-950">StudyPilot Privacy Commitment</h3>
            </div>
            <button onClick={onCloseAll} className="w-7 h-7 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center text-xs">
              ✕
            </button>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
            <p>
              StudyPilot is founded on a straightforward principle: <strong className="text-neutral-900">your study data belongs exclusively to you</strong>.
            </p>
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 space-y-2">
              <h4 className="font-bold text-neutral-900">Key Guarantees:</h4>
              <p>• <strong>Local-first storage:</strong> Your syllabi, focus records, test scores, and notes reside locally on your Android device.</p>
              <p>• <strong>Zero ad trackers:</strong> We do not sell user attention to third-party ad networks or data brokers.</p>
              <p>• <strong>Pluto AI queries:</strong> Academic prompts sent to Pluto AI are processed transiently and never used to profile students.</p>
            </div>
            <p>
              For privacy inquiries regarding early preview builds, reach out directly to developer Mohammad Fahad.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-neutral-100 flex justify-end">
            <button
              onClick={onCloseAll}
              className="px-4 py-2 bg-neutral-950 text-white rounded-xl text-xs font-semibold"
            >
              Understood
            </button>
          </div>
        </div>
      )}

      {/* 3. Terms of Service Modal */}
      {termsModalOpen && (
        <div
          className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-neutral-800" />
              <h3 className="text-lg font-bold text-neutral-950">Terms of Service</h3>
            </div>
            <button onClick={onCloseAll} className="w-7 h-7 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center text-xs">
              ✕
            </button>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
            <p>
              By accessing the StudyPilot website and installing future preview APK builds, you acknowledge:
            </p>
            <div className="space-y-2 bg-neutral-50 p-4 rounded-xl border border-neutral-200/80">
              <p>• StudyPilot is an educational study aid intended to support personal academic preparation.</p>
              <p>• Pre-release APK versions are provided for evaluation and testing purposes.</p>
              <p>• Intellectual property, interface designs, and algorithms are proprietary to creator Mohammad Fahad.</p>
            </div>
            <p className="text-neutral-500 text-xs">
              Updated for pre-launch preview 2026.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-neutral-100 flex justify-end">
            <button
              onClick={onCloseAll}
              className="px-4 py-2 bg-neutral-950 text-white rounded-xl text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 4. Contact Modal */}
      {contactModalOpen && (
        <div
          className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-neutral-900" />
              <h3 className="text-lg font-bold text-neutral-950">Contact StudyPilot Creator</h3>
            </div>
            <button onClick={onCloseAll} className="w-7 h-7 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center text-xs">
              ✕
            </button>
          </div>

          {contactSubmitted ? (
            <div className="py-8 text-center space-y-2">
              <Check className="w-8 h-8 text-lime-600 mx-auto" />
              <p className="text-base font-bold text-neutral-950">Message Sent</p>
              <p className="text-xs text-neutral-500">Mohammad Fahad will respond to your inquiry shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Academic partnership / beta inquiry"
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your note to the creator..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-between items-center">
                <span className="text-[11px] text-neutral-400">Direct response from Mohammad Fahad</span>
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-950 hover:bg-neutral-850 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
