"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroVideoProps {
  onIntroEnd?: () => void;
}

export function IntroVideo({ onIntroEnd }: IntroVideoProps) {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsVisible(false);
      onIntroEnd?.();
    };

    video.addEventListener('ended', handleEnded);

    const handleSkip = () => {
      setIsVisible(false);
      onIntroEnd?.();
    };
    document.addEventListener('click', handleSkip);
    window.addEventListener('scroll', handleSkip);

    return () => {
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('click', handleSkip);
      window.removeEventListener('scroll', handleSkip);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0A262E]"
    >
      {/* Vidéo centrée */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop={false}
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>

      {/* Overlay mystérieux : gradient du noir au bleu pétrole */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#0A262E]/80 to-[#0A262E]/90" />

      {/* Titre Dental Zairi avec animation */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-full">
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white drop-shadow-2xl leading-tight"
          style={{ textShadow: '0 0 40px rgba(47, 182, 212, 0.6)' }}
        >
          Dental Zairi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
          className="mt-4 sm:mt-5 md:mt-6 h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 mx-auto bg-gradient-to-r from-transparent via-[#2fb6d4] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-6 sm:mt-7 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-white/70 font-light tracking-wide"
        >
          Votre sourire parfait commence ici
        </motion.p>
      </div>
    </motion.section>
  );
}