/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { configService } from './configService';

export interface DownloadStats {
  totalDownloads: number;
  downloadsThisMonth: number;
  countriesReached: string | number;
  isLive: boolean;
}

/**
 * Service providing download & reach statistics.
 * In development mode, returns strictly honest zero values without requiring a backend.
 */
export const statsService = {
  async getStats(): Promise<DownloadStats> {
    if (!configService.isProductionBackendConfigured()) {
      // Safe Development Adapter:
      // Real honest baseline metrics (0 downloads, 0 this month, "—" countries)
      return {
        totalDownloads: 0,
        downloadsThisMonth: 0,
        countriesReached: '—',
        isLive: false,
      };
    }

    try {
      // Future production adapter endpoint:
      const res = await fetch('/api/stats');
      if (!res.ok) throw new Error('Failed to fetch stats');
      const data = await res.json();
      return {
        totalDownloads: data.totalDownloads ?? 0,
        downloadsThisMonth: data.downloadsThisMonth ?? 0,
        countriesReached: data.countriesReached ?? '—',
        isLive: true,
      };
    } catch {
      return {
        totalDownloads: 0,
        downloadsThisMonth: 0,
        countriesReached: '—',
        isLive: false,
      };
    }
  },
};
