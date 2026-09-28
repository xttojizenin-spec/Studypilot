/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  { name: 'South Korea', code: 'KR', flag: '🇰🇷' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬' },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪' },
  { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦' },
  { name: 'Pakistan', code: 'PK', flag: '🇵🇰' },
  { name: 'Bangladesh', code: 'BD', flag: '🇧🇩' },
  { name: 'Nepal', code: 'NP', flag: '🇳🇵' },
  { name: 'Sri Lanka', code: 'LK', flag: '🇱🇰' },
  { name: 'Indonesia', code: 'ID', flag: '🇮🇩' },
  { name: 'Malaysia', code: 'MY', flag: '🇲🇾' },
  { name: 'Philippines', code: 'PH', flag: '🇵🇭' },
  { name: 'Vietnam', code: 'VN', flag: '🇻🇳' },
  { name: 'Nigeria', code: 'NG', flag: '🇳🇬' },
  { name: 'Kenya', code: 'KE', flag: '🇰🇪' },
  { name: 'South Africa', code: 'ZA', flag: '🇿🇦' },
  { name: 'Egypt', code: 'EG', flag: '🇪🇬' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
  { name: 'Mexico', code: 'MX', flag: '🇲🇽' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱' },
  { name: 'Sweden', code: 'SE', flag: '🇸🇪' },
  { name: 'Switzerland', code: 'CH', flag: '🇨🇭' },
  { name: 'Turkey', code: 'TR', flag: '🇹🇷' },
  { name: 'New Zealand', code: 'NZ', flag: '🇳🇿' },
  { name: 'Ireland', code: 'IE', flag: '🇮🇪' },
  { name: 'Poland', code: 'PL', flag: '🇵🇱' },
];

export function getCountryByCodeOrName(val?: string): Country | undefined {
  if (!val) return undefined;
  return COUNTRIES.find(
    (c) => c.code.toLowerCase() === val.toLowerCase() || c.name.toLowerCase() === val.toLowerCase()
  );
}
