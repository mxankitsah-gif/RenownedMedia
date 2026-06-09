/**
 * Copyright 2026 Renowned Media
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface RenownedLogoProps {
  className?: string;
  // Allows customizing the primary stroke/fill color or keeping it native
  textColor?: string;
}

export default function RenownedLogo({ className = 'h-12', textColor = 'text-[#1d4ed8]' }: RenownedLogoProps) {
  return (
    <svg
      viewBox="0 0 420 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
      aria-label="Renowned Media"
    >
      {/* GLOWS & SPARKLES ACCENTS (matching the new vibrant red agency highlights) */}
      <g id="sparkle-matrix">
        {/* Sparkle 1 near R */}
        <circle cx="25" cy="18" r="1.5" fill="#dc2626" />
        <line x1="25" y1="13" x2="25" y2="23" stroke="#dc2626" strokeWidth="0.5" />
        <line x1="20" y1="18" x2="30" y2="18" stroke="#dc2626" strokeWidth="0.5" />

        {/* Sparkle 2 near first E */}
        <circle cx="95" cy="40" r="1.5" fill="#dc2626" />
        <circle cx="70" cy="15" r="1" fill="#dc2626" />

        {/* Sparkle 3 near N */}
        <circle cx="122" cy="58" r="1.5" fill="#dc2626" />
        <line x1="122" y1="54" x2="122" y2="62" stroke="#dc2626" strokeWidth="0.5" />
        <line x1="118" y1="58" x2="126" y2="58" stroke="#dc2626" strokeWidth="0.5" />

        {/* Sparkle 4 inside O */}
        <circle cx="174" cy="40" r="2.5" fill="#dc2626" className="animate-pulse" />
        <line x1="174" y1="33" x2="174" y2="47" stroke="#dc2626" strokeWidth="0.75" />
        <line x1="167" y1="40" x2="181" y2="40" stroke="#dc2626" strokeWidth="0.75" />

        {/* Sparkle 5 near W */}
        <circle cx="228" cy="12" r="1.5" fill="#dc2626" />
        <circle cx="218" cy="62" r="1" fill="#dc2626" />

        {/* Sparkle 6 near second N */}
        <circle cx="275" cy="22" r="1.5" fill="#dc2626" />
        <line x1="275" y1="18" x2="275" y2="26" stroke="#dc2626" strokeWidth="0.5" />
        <line x1="271" y1="22" x2="279" y2="22" stroke="#dc2626" strokeWidth="0.5" />

        {/* Sparkle 7 near second E */}
        <circle cx="318" cy="55" r="2" fill="#dc2626" />
        <circle cx="305" cy="10" r="1" fill="#dc2626" />

        {/* Sparkle 8 near D */}
        <circle cx="365" cy="25" r="2" fill="#dc2626" />
        <line x1="365" y1="19" x2="365" y2="31" stroke="#dc2626" strokeWidth="0.5" />
        <line x1="359" y1="25" x2="371" y2="25" stroke="#dc2626" strokeWidth="0.5" />

        {/* Random micro sparkles in background for texture */}
        <circle cx="45" cy="55" r="1" fill="#dc2626" opacity="0.6" />
        <circle cx="140" cy="22" r="0.75" fill="#dc2626" opacity="0.8" />
        <circle cx="255" cy="48" r="1" fill="#dc2626" opacity="0.5" />
        <circle cx="335" cy="32" r="0.75" fill="#dc2626" opacity="0.7" />
        <circle cx="395" cy="60" r="1" fill="#dc2626" opacity="0.9" />
      </g>

      {/* CORE LOGO: "R E N O W N E D" */}
      <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={textColor}>
        {/* R */}
        <path d="M 30,15 L 30,65" />
        <path d="M 30,15 C 45,15 54,22 54,34 C 54,46 45,51 30,51" />
        <path d="M 40,49 L 55,65" />

        {/* E */}
        <path d="M 94,15 L 75,15 L 75,65 L 94,65" />
        <path d="M 75,40 L 90,40" />

        {/* N */}
        <path d="M 110,15 L 110,65" />
        <path d="M 110,15 L 135,65" />
        <path d="M 135,15 L 135,65" />

        {/* O */}
        <path d="M 152,40 C 152,24 162,15 174,15 C 186,15 196,24 196,40 C 196,56 186,65 174,65 C 162,65 152,56 152,40 Z" />

        {/* W */}
        <path d="M 210,15 L 220,65 L 228,38 L 236,65 L 246,15" />

        {/* N */}
        <path d="M 262,15 L 262,65" />
        <path d="M 262,15 L 287,65" />
        <path d="M 287,15 L 287,65" />

        {/* E */}
        <path d="M 324,15 L 305,15 L 305,65 L 324,65" />
        <path d="M 305,40 L 320,40" />

        {/* D */}
        <path d="M 342,15 L 342,65" />
        <path d="M 342,15 C 362,15 372,28 372,40 C 372,52 362,65 342,65" />
      </g>

      {/* SUB LOGO: "M E D I A" */}
      {/* Extra tracking, centered, refined thin lines with red accents */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={textColor}>
        {/* M (centered under 'O') */}
        <path d="M 142,90 L 142,110 L 149,99 L 156,110 L 156,90" />

        {/* E */}
        <path d="M 183,90 L 173,90 L 173,110 L 183,110" />
        <path d="M 173,100 L 180,100" />

        {/* D */}
        <path d="M 200,90 L 200,110" />
        <path d="M 200,90 C 210,90 216,96 216,100 C 216,104 210,110 200,110" />

        {/* I */}
        <path d="M 233,90 L 233,110" />

        {/* A */}
        <path d="M 248,110 L 255,90 L 262,110" />
        <path d="M 250,104 L 260,104" />
      </g>

      {/* Decorative Red Underline Dots & Accents */}
      <line x1="60" y1="110" x2="115" y2="110" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="123" cy="110" r="2.5" fill="#dc2626" />
      
      <circle cx="280" cy="110" r="2.5" fill="#dc2626" />
      <line x1="288" y1="110" x2="343" y2="110" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}
