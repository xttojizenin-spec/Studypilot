/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { APP_CONFIG, ApkConfig } from '../config/appConfig';

/**
 * Central configuration service.
 * Decouples components from direct environment or backend bindings.
 */
export const configService = {
  getApkConfig(): ApkConfig {
    return APP_CONFIG.apk;
  },

  isApkAvailable(): boolean {
    return APP_CONFIG.apk.available && Boolean(APP_CONFIG.apk.downloadUrl);
  },

  isProductionBackendConfigured(): boolean {
    return APP_CONFIG.environment.isProductionBackendConfigured;
  },

  getBrandName(): string {
    return APP_CONFIG.brandName;
  },

  getCreatorName(): string {
    return APP_CONFIG.creatorName;
  },
};
