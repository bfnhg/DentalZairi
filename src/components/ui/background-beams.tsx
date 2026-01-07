"use client";
import React, { useRef } from "react";
import { cn } from "../../lib/utils";
import { FaWhatsapp } from "react-icons/fa";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none",
        className
      )}
    >
      {/* ICON WHATSAPP */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto">
        <a
          href="https://wa.me/212XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0F4C5C" stopOpacity="0" />
              <stop offset="50%" stopColor="#2fb6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0F4C5C" stopOpacity="0" />
            </linearGradient>
          </defs>

          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
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
    </div>
  );
};
