/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { COUNTRIES, Country } from '../data/countries';
import { ChevronDown, Search, X } from 'lucide-react';

interface CountrySelectorProps {
  value?: string;
  onChange: (countryCode?: string) => void;
  id?: string;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({ value, onChange, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedCountry = COUNTRIES.find(
    (c) => c.code.toLowerCase() === (value || '').toLowerCase()
  );

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-left text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-950 transition-colors"
      >
        <div className="flex items-center gap-2 truncate">
          {selectedCountry ? (
            <>
              <span className="text-base leading-none">{selectedCountry.flag}</span>
              <span className="truncate">{selectedCountry.name}</span>
            </>
          ) : (
            <span className="text-neutral-400">Select country (optional)</span>
          )}
        </div>
        <div className="flex items-center gap-1 shrink-0 ml-2">
          {selectedCountry && (
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                onChange(undefined);
              }}
              className="p-1 text-neutral-400 hover:text-neutral-700 rounded-md transition-colors"
              title="Clear selection"
            >
              <X className="w-3.5 h-3.5" />
            </span>
          )}
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-white rounded-xl border border-neutral-200 shadow-xl overflow-hidden animate-in fade-in duration-150">
          <div className="p-2 border-b border-neutral-100 flex items-center gap-2 bg-neutral-50/70">
            <Search className="w-4 h-4 text-neutral-400 shrink-0 ml-1" />
            <input
              type="text"
              autoFocus
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none py-1"
            />
          </div>
          <div className="max-h-52 overflow-y-auto py-1">
            {filteredCountries.length === 0 ? (
              <p className="text-xs text-neutral-500 py-3 text-center">No countries match your search</p>
            ) : (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    onChange(country.code);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-left hover:bg-neutral-100 transition-colors ${
                    selectedCountry?.code === country.code ? 'bg-lime-50 text-neutral-950 font-medium' : 'text-neutral-700'
                  }`}
                >
                  <span className="text-base leading-none">{country.flag}</span>
                  <span className="flex-1 truncate">{country.name}</span>
                  <span className="text-[10px] font-mono text-neutral-400">{country.code}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
