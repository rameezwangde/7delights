import React from 'react';
import { Sparkles, Settings, Users, Heart, PartyPopper } from 'lucide-react';

// Exact SVG icons matching the reference screenshot for the 4 Feature Highlights
export function CreativePlanningIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Lightbulb outline */}
      <path
        d="M16 6C12.134 6 9 9.134 9 13C9 15.6 10.4 17.8 12.5 19V22C12.5 22.5 13 23 13.5 23H18.5C19 23 19.5 22.5 19.5 22V19C21.6 17.8 23 15.6 23 13C23 9.134 19.866 6 16 6Z"
        stroke="#EE3775"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.5 25H18.5" stroke="#EE3775" strokeWidth="1.9" strokeLinecap="round" />
      {/* Radiant glow marks */}
      <path d="M16 2.5V4M8 6.5L9.2 7.7M24 6.5L22.8 7.7M5.5 13H7M25 13H26.5" stroke="#EE3775" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function EndToEndManagementIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Gear / Cog */}
      <circle cx="16" cy="16" r="4.2" stroke="#F5A623" strokeWidth="1.9" />
      <path
        d="M16 7.5V9.5M16 22.5V24.5M7.5 16H9.5M22.5 16H24.5M10 10L11.5 11.5M20.5 20.5L22 22M10 22L11.5 20.5M20.5 11.5L22 10"
        stroke="#F5A623"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PersonalisedExperiencesIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Center user */}
      <circle cx="16" cy="11" r="2.8" stroke="#7B61FF" strokeWidth="1.9" />
      <path
        d="M11.5 22C11.5 18.5 13.5 17 16 17C18.5 17 20.5 18.5 20.5 22"
        stroke="#7B61FF"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      {/* Left user */}
      <circle cx="10" cy="13" r="2.1" stroke="#7B61FF" strokeWidth="1.7" />
      <path
        d="M6.5 21.5C6.5 19.2 8.2 18 10 18"
        stroke="#7B61FF"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {/* Right user */}
      <circle cx="22" cy="13" r="2.1" stroke="#7B61FF" strokeWidth="1.7" />
      <path
        d="M25.5 21.5C25.5 19.2 23.8 18 22 18"
        stroke="#7B61FF"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MemoriesThatLastIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Elegant heart */}
      <path
        d="M16 23.5 C16 23.5, 7.5 18, 7.5 12.5 C7.5 9.5, 9.8 7.5, 12.5 7.5 C14.2 7.5, 15.4 8.5, 16 9.5 C16.6 8.5, 17.8 7.5, 19.5 7.5 C22.2 7.5, 24.5 9.5, 24.5 12.5 C24.5 18, 16 23.5, 16 23.5 Z"
        stroke="#10B981"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// KPI line icons matching the reference
export function KpiPartyPopper({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M8.5 23.5L11.5 12L20 20.5L8.5 23.5Z"
        stroke="#EE3775"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 17.5L15 21.5M11 14.5L17.5 20.5"
        stroke="#EE3775"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M17 10L19.5 7M22 13L25 11M20 16L24.5 17"
        stroke="#EE3775"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="21" cy="7.5" r="1.1" fill="#EE3775" />
      <circle cx="26" cy="15" r="1.1" fill="#EE3775" />
      <circle cx="16.5" cy="5.5" r="0.8" fill="#EE3775" />
    </svg>
  );
}

export function KpiUsersGroup({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="10" r="3.2" stroke="#EE3775" strokeWidth="1.9" />
      <path
        d="M10.5 22C10.5 18 13 16.5 16 16.5C19 16.5 21.5 18 21.5 22"
        stroke="#EE3775"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="12.5" r="2.4" stroke="#EE3775" strokeWidth="1.7" />
      <path
        d="M5.5 21.5C5.5 18.8 7.5 17.5 9.5 17.5"
        stroke="#EE3775"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="22.5" cy="12.5" r="2.4" stroke="#EE3775" strokeWidth="1.7" />
      <path
        d="M26.5 21.5C26.5 18.8 24.5 17.5 22.5 17.5"
        stroke="#EE3775"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function KpiHeartExperience({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M16 23.5 C16 23.5, 7.5 18, 7.5 12.5 C7.5 9.5, 9.8 7.5, 12.5 7.5 C14.2 7.5, 15.4 8.5, 16 9.5 C16.6 8.5, 17.8 7.5, 19.5 7.5 C22.2 7.5, 24.5 9.5, 24.5 12.5 C24.5 18, 16 23.5, 16 23.5 Z"
        stroke="#EE3775"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Collage decorative doodles
export function BigGoldHeart({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M30 18 C24 8, 12 11, 14 24 C16 35, 30 46, 30 46 C30 46, 44 35, 46 24 C48 11, 36 8, 30 18 Z"
        stroke="#F5A623"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(12 30 26)"
      />
    </svg>
  );
}

export function DoodleRayGroup({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 28C17 22 22 16 27 10" stroke="#F5A623" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M8 18C15 17 22 17 29 17" stroke="#F5A623" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M14 8C18 14 22 20 26 26" stroke="#F5A623" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

