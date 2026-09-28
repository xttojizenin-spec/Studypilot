/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { configService } from './configService';

export interface DownloadResult {
  available: boolean;
  downloadUrl?: string;
  version?: string;
  size?: string;
  message?: string;
}

/**
 * Service managing APK download initiation and event recording.
 */
export const downloadService = {
  getDownloadInfo(): DownloadResult {
    const apk = configService.getApkConfig();
    return {
      available: apk.available && Boolean(apk.downloadUrl),
      downloadUrl: apk.downloadUrl || undefined,
      version: apk.version || undefined,
      size: apk.size || undefined,
      message: apk.available
        ? 'Download ready'
        : 'StudyPilot Android APK is currently in QA and coming soon.',
    };
  },

  async recordDownload(source: string = 'cta'): Promise<DownloadResult> {
    const info = this.getDownloadInfo();
    if (!info.available || !info.downloadUrl) {
      return info;
    }

    if (configService.isProductionBackendConfigured()) {
      try {
        await fetch(`/api/download?source=${encodeURIComponent(source)}`, {
          method: 'GET',
        });
      } catch {
        // Fallback gracefully without blocking user download
      }
    }

    // Trigger download
    if (typeof window !== 'undefined') {
      window.location.href = info.downloadUrl;
    }

    return info;
  },
};
