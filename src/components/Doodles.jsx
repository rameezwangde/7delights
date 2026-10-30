import React from 'react';

// Doodles matching the reference screenshot:
// 1. Radiating rays top-left of "Making" (yellow/orange celebration marks)
export function TopLeftRays({ className = '' }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* 3 Golden rays */}
      <path
        d="M34 10C36.5 15.5 38 21.5 39 27"
        stroke="#F5A623"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 19C24.5 23.5 30 27.5 34 33"
        stroke="#F5A623"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 34C17 35 24 36 30 37"
        stroke="#F5A623"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* 1 Coral ray below */}
      <path
        d="M15 47C21.5 42 27 38.5 33 38"
        stroke="#EE3775"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 2. Hand-drawn pink heart + tiny accent arc top-right of "Every"
export function HandDrawnHeart({ className = '' }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Tiny accent mark above heart */}
      <path
        d="M23 4C25 5.5 27 6.2 28.5 5.5"
        stroke="#EE3775"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Hand-drawn heart outline */}
      <path
        d="M22 13 C17.5 7, 9 9, 10 17.5 C11 24.5, 22 31.5, 22 31.5 C22 31.5, 33 24.5, 34 17.5 C35 9, 26.5 7, 22 13 Z"
        stroke="#EE3775"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(10 22 19)"
      />
    </svg>
  );
}

// 3. Gold scribble underline under "Occasion"
export function GoldUnderline({ className = '' }) {
  return (
    <svg
      viewBox="0 0 180 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M4 10C30 7 85 5 118 9C140 12 165 9 176 6"
        stroke="#F5A623"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 4. Celebration rays to the right of "Occasion"
export function RightCelebrationRays({ className = '' }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M10 18C17 15 24 12 30 9"
        stroke="#F5A623"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M12 26C20 27 28 27 36 27"
        stroke="#F5A623"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M10 34C17 37 24 40 30 43"
        stroke="#F5A623"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 5. Gentle vertical S-curve divider with subtle coral line and tiny heart
export function GentleSCurveDivider({ className = '' }) {
  return (
    <div className={`absolute top-0 bottom-0 left-0 pointer-events-none select-none z-10 ${className}`}>
      <svg
        viewBox="0 0 100 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="coralStrokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FA8BAA" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#EE3775" stopOpacity="0.8" />
            <stop offset="65%" stopColor="#EE3775" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Soft cream fill shape covering left edge of image */}
        <path
          d="M0 0 L26 0 C36 140, 66 250, 68 330 C70 410, 36 530, 22 640 L16 700 L0 700 Z"
          fill="#FEF9F5"
        />

        {/* Gentle vertical S-curve coral line */}
        <path
          d="M26 0 C36 140, 66 250, 68 330 C70 410, 36 530, 22 640 L16 700"
          stroke="url(#coralStrokeGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtle, small hand-drawn heart doodle near the middle curve */}
        <g transform="translate(50, 315) scale(0.58)">
          <path
            d="M15 8 C11 2, 4 4, 5 11 C6 17, 15 22, 15 22 C15 22, 24 17, 25 11 C26 4, 19 2, 15 8 Z"
            stroke="#EE3775"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="rotate(-15 15 12)"
          />
        </g>
      </svg>
    </div>
  );
}
