"use client";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Phone, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

gsap.registerPlugin();

export function Emergency() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneIconRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    // Apparition douce de la carte au scroll
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    // Flottement très léger de l'icône téléphone
    gsap.to(phoneIconRef.current, {
      y: -6,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Hover élégant sur le CTA
    if (ctaRef.current) {
      ctaRef.current.addEventListener("mouseenter", () => {
        gsap.to(ctaRef.current, {
          scale: 1.05,
          boxShadow: "0 0 60px rgba(47, 182, 212, 0.6)",
          duration: 0.4,
          ease: "power2.out",
        });
      });
      ctaRef.current.addEventListener("mouseleave", () => {
        gsap.to(ctaRef.current, {
          scale: 1,
          boxShadow: "0 0 40px rgba(47, 182, 212, 0.4)",
          duration: 0.4,
          ease: "power2.out",
        });
      });
    }

    // Reveal progressif des textes
    gsap.from(".reveal-text > *", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.9,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".reveal-text",
        start: "top 80%",
        once: true,
      },
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-[#0A262E] overflow-hidden">
      {/* Fond bleu pétrole + glow turquoise très doux */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2fb6d4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-[#2fb6d4]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={cardRef}
            className="text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#0f353e]/80 to-[#0A262E]/90 backdrop-blur-xl border border-[#2fb6d4]/30 shadow-2xl shadow-[#2fb6d4]/20"
          >
            {/* Icône téléphone premium */}
            <div ref={phoneIconRef} className="w-28 h-28 mx-auto mb-10 rounded-full bg-[#2fb6d4]/20 flex items-center justify-center border border-[#2fb6d4]/40">
              <Phone className="w-14 h-14 text-[#2fb6d4]" />
            </div>

            {/* Textes */}
            <div className="reveal-text space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {t('emergency_title')}
              </h2>

              <p className="text-xl text-white/80">
                {t('emergency_subtitle')}
              </p>

              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                {t('emergency_description')}
              </p>
            </div>

            {/* Bouton d'appel premium */}
            <a
              ref={ctaRef}
              href="tel:+212537371113"
              className="inline-flex items-center space-x-4 mt-12 px-14 py-6 bg-[#2fb6d4] text-[#0A262E] text-xl font-bold rounded-2xl shadow-[0_0_40px_rgba(47,182,212,0.4)] transition-all duration-300"
            >
              <Phone className="w-7 h-7" />
              <span>{t('emergency_call')}</span>
            </a>

            {/* Disponibilité */}
            <div className="mt-10 flex items-center justify-center space-x-3 text-white/70">
              <Clock className="w-6 h-6" />
              <span className="text-lg">{t('emergency_available')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}