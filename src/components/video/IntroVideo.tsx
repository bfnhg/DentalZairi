"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function IntroVideo() {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsVisible(false);
    };

    video.addEventListener('ended', handleEnded);

    const handleSkip = () => setIsVisible(false);
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

      {/* Texte reveal progressif */}
      {/* <div className="relative z-10 text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        >
          <p className="text-2xl md:text-3xl text-white/60 font-light tracking-widest uppercase mb-8">
            Découvrez
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl"
          style={{ textShadow: '0 0 60px rgba(47, 182, 212, 0.4)' }}
        >
          Le Sourire
          <span className="block text-[#2fb6d4] mt-4">Parfait</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1.2 }}
          className="mt-10 text-xl md:text-2xl text-white/70 font-light"
        >
          Votre transformation commence ici
        </motion.p>
      </div> */}
    </motion.section>
  );
}