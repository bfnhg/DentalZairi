"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils"; // Assure-toi que ce chemin est correct

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
    >
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F4C5C" stopOpacity="0" />
            <stop offset="50%" stopColor="#2fb6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0F4C5C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="none" />
        {/* Cercles et lignes décoratives animés par CSS ou Framer */}
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(15, 76, 92, 0.1)"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};