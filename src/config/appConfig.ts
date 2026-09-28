/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ApkConfig {
  available: boolean;
  version: string | null;
  downloadUrl: string | null;
  size: string | null;
  releaseDate: string | null;
  comingSoonLabel: string;
  readyLabel: string;
}

export interface AppConfig {
  brandName: string;
  creatorName: string;
  tagline: string;
  subheadline: string;
  apk: ApkConfig;
  environment: {
    isProductionBackendConfigured: boolean;
    backendProvider: 'development_adapter' | 'cloudflare_workers_d1';
  };
}

/**
 * Central StudyPilot Configuration
 * NOTE FOR PREVIEW / DEVELOPMENT:
 * Zero environment variables are required.
 * When the final APK is uploaded, simply set:
 *   available: true
 *   downloadUrl: "https://..."
 *   version: "1.0.0"
 *   size: "71.32 MB"
 */
export const APP_CONFIG: AppConfig = {
  brandName: 'StudyPilot',
  creatorName: 'Mohammad Fahad',
  tagline: 'Study smarter. Finish what you started.',
  subheadline:
    'Plan your syllabus, stay focused, track your progress, and make every study session count with StudyPilot.',
  apk: {
    // APK is currently in QA / not published yet:
    available: false,
    version: null,
    downloadUrl: null,
    size: '71.32 MB',
    releaseDate: null,
    comingSoonLabel: 'StudyPilot is coming soon',
    readyLabel: 'Download StudyPilot',
  },
  environment: {
    // Automatically uses safe development adapter when false:
    isProductionBackendConfigured: false,
    backendProvider: 'development_adapter',
  },
};
