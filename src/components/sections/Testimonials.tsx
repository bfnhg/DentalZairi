"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, Sparkles, Award, Check, Zap, TrendingUp } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  before: string;
  after: string;
  rating: number;
  treatment: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Bennani',
    role: 'Directrice Marketing',
    treatment: 'Implants & Esthétique',
    text: "Une transformation radicale. Le Dr. Zairi a su recréer une harmonie parfaite. Je n'ai plus peur de sourire pleinement.",
    before: "/image/dent.png",
    after: "/image/karim.jpg",
    rating: 5,
  },
  {
    name: 'Mohammed Alami',
    role: 'Entrepreneur',
    treatment: 'Facettes E-max HD',
    text: "Le résultat dépasse mes espérances. On ne voit aucune différence avec des dents naturelles.",
    before: "/image/before2.jpg",
    after: "/image/after2.jpg",
    rating: 5,
  },
  {
    name: 'Yassine Karim',
    role: 'Architecte',
    treatment: 'Chirurgie Orale',
    text: "Une équipe professionnelle et une technologie de pointe. Je recommande vivement.",
    before: "/image/dent.png",
    after: "/image/karim.jpg",
    rating: 5,
  },
  {
    name: 'Amina El Houari',
    role: 'Avocate',
    treatment: 'Blanchiment & Sourire',
    text: "Mon sourire est enfin éclatant et naturel. Un accompagnement exceptionnel du début à la fin.",
    before: "/image/before3.jpg",
    after: "/image/after3.jpg",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 1;
      });
    }, 70);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setShowContent(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setShowContent(true);
      setProgress(0);
      setTimeout(() => setIsFlipping(false), 500);
    }, 400);
  };

  const handlePrev = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setShowContent(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setShowContent(true);
      setProgress(0);
      setTimeout(() => setIsFlipping(false), 500);
    }, 400);
  };

  const handleDotClick = (index: number) => {
    if (isFlipping || index === activeIndex) return;
    setIsFlipping(true);
    setShowContent(false);
    setTimeout(() => {
      setActiveIndex(index);
      setShowContent(true);
      setProgress(0);
      setTimeout(() => setIsFlipping(false), 500);
    }, 400);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="relative min-h-screen bg-[#F1F5F9] py-24 overflow-hidden">
      {/* Fond avec rayons lumineux rotatifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-[#0A4D5C]/5 rounded-full animate-rotate-slow blur-3xl" />
          <div className="absolute inset-0 bg-[#0A4D5C]/10 rounded-full animate-rotate-reverse blur-2xl" style={{animationDelay: '1s'}} />
        </div>
      </div>

      {/* Lignes diagonales animées */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#0A4D5C] to-transparent animate-slide-diagonal"
              style={{
                top: `${i * 10}%`,
                width: '200%',
                transform: 'rotate(-15deg)',
                animationDelay: `${i * 0.3}s`,
                animationDuration: '8s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        {/* === TITRE ALIGNÉ À GAUCHE AVEC ANIMATION PROGRESSIVE === */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-12">
            <div className="md:w-1/2">
              {/* Badge excellence */}
              <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/90 backdrop-blur-xl rounded-full border-2 border-[#0A4D5C]/20 shadow-2xl animate-slide-in-left">
                <div className="relative">
                  <Award className="w-6 h-6 text-[#0A4D5C]" />
                  <div className="absolute inset-0 bg-[#0A4D5C]/20 blur-xl animate-pulse" />
                </div>
                <span className="text-[#0A4D5C] font-bold tracking-wider uppercase text-sm">Excellence · Innovation · Passion</span>
                <div className="relative">
                  <Sparkles className="w-6 h-6 text-[#0A4D5C]" />
                  <div className="absolute inset-0 bg-[#0A4D5C]/20 blur-xl animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
              </div>

              {/* Titre principal avec reveal ligne par ligne depuis la gauche */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="inline-block overflow-hidden">
                  <span className="inline-block translate-x-[-100%] animate-reveal-left delay-300">
                    <span className="bg-gradient-to-r from-[#0A4D5C] via-[#0d6380] to-[#0A4D5C] bg-clip-text text-transparent">
                      Transformations
                    </span>
                  </span>
                </span>
                <br />
                <span className="inline-block overflow-hidden">
                  <span className="inline-block translate-x-[-100%] animate-reveal-left delay-500 text-[#0A4D5C]">
                    Spectaculaires
                  </span>
                </span>
              </h2>

              {/* Sous-titre */}
              <p className="mt-8 text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed animate-fade-in delay-700">
                Des résultats qui changent des vies · Plus de 500 sourires éclatants
              </p>
            </div>

            {/* Espace vide à droite pour équilibrer (optionnel : tu peux y mettre une image décorative plus tard) */}
            <div className="md:w-1/2 hidden md:block" />
          </div>
        </div>

        {/* Carte principale (inchangée) */}
        <div className="max-w-7xl mx-auto perspective-2000">
          <div 
            className={`relative transition-all duration-700 transform-gpu ${
              isFlipping ? 'rotate-y-90 scale-95' : 'rotate-y-0 scale-100'
            }`}
            style={{transformStyle: 'preserve-3d'}}
          >
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl border-2 border-[#0A4D5C]/20 shadow-2xl overflow-hidden">
              
              {/* Barre de progression en haut */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 z-50">
                <div 
                  className="h-full bg-gradient-to-r from-[#0A4D5C] via-[#0d6380] to-[#0A4D5C] transition-all duration-100 ease-linear"
                  style={{width: `${progress}%`}}
                />
              </div>

              {/* Coins décoratifs animés */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#0A4D5C]/30 rounded-tl-3xl animate-corner-pulse" />
              <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-[#0A4D5C]/30 rounded-tr-3xl animate-corner-pulse" style={{animationDelay: '0.5s'}} />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-[#0A4D5C]/30 rounded-bl-3xl animate-corner-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#0A4D5C]/30 rounded-br-3xl animate-corner-pulse" style={{animationDelay: '1.5s'}} />

              <div className="relative p-8 md:p-12">
                <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-500 ${
                  showContent ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Tout le contenu Avant/Après et Témoignage reste IDENTIQUE à ton code original */}
                  {/* (Je le copie ici pour que le composant soit complet) */}

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0A4D5C] to-transparent animate-expand" />
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#0A4D5C] animate-zap" />
                        <span className="text-[#0A4D5C] font-bold tracking-widest uppercase text-sm">
                          Avant / Après
                        </span>
                        <Zap className="w-5 h-5 text-[#0A4D5C] animate-zap" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0A4D5C] to-transparent animate-expand" />
                    </div>

                    <div className={`relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl group transition-all duration-700 ${
                      showContent ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`} style={{height: '240px'}}>
                      <img src={currentTestimonial.before} alt="Avant traitement" className="w-full h-full object-cover grayscale-[30%] brightness-90 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
                        <span className="text-white font-bold text-sm uppercase tracking-wider">Avant</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-slate-700 text-xs font-bold">État Initial</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center py-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#0A4D5C]/20 blur-2xl animate-pulse-glow" />
                        <div className="relative bg-gradient-to-br from-[#0A4D5C] to-[#0d6380] p-4 rounded-full shadow-2xl animate-bounce-continuous">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#0A4D5C] rounded-full animate-orbit" style={{animationDelay: `${i * 0.3}s`, transform: `rotate(${i * 45}deg) translateX(30px)`}} />
                        ))}
                      </div>
                    </div>

                    <div className={`relative rounded-2xl overflow-hidden border-4 border-[#0A4D5C] shadow-2xl shadow-[#0A4D5C]/30 group transition-all duration-700 ${
                      showContent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`} style={{height: '240px', transitionDelay: '0.1s'}}>
                      <img src={currentTestimonial.after} alt="Après traitement" className="w-full h-full object-cover brightness-105 saturate-110 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D5C]/30 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#0A4D5C] to-[#0d6380] px-5 py-2.5 rounded-full shadow-xl animate-pop-in">
                        <span className="text-white font-bold text-sm uppercase tracking-wider">Après</span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-xl animate-slide-in-right">
                        <Sparkles className="w-4 h-4 text-[#0A4D5C] animate-sparkle" />
                        <span className="text-xs font-bold text-[#0A4D5C]">Résultat Premium</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-diagonal-shine" />
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className={`inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#0A4D5C]/20 to-[#0A4D5C]/10 rounded-full border border-[#0A4D5C]/30 transition-all duration-500 ${
                      showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                      <div className="w-2 h-2 bg-[#0A4D5C] rounded-full animate-pulse-fast" />
                      <span className="text-[#0A4D5C] font-semibold text-sm">{currentTestimonial.treatment}</span>
                    </div>

                    <div className={`relative transition-all duration-700 delay-100 ${
                      showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                      <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#0A4D5C]/20" />
                      <p className="text-slate-700 text-2xl md:text-3xl leading-relaxed font-light italic pl-8">
                        {currentTestimonial.text}
                      </p>
                      <Quote className="absolute -bottom-4 -right-4 w-12 h-12 text-[#0A4D5C]/20 rotate-180" />
                    </div>

                    <div className={`flex gap-2 transition-all duration-700 delay-200 ${
                      showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative">
                          <Star size={28} className="fill-[#0A4D5C] text-[#0A4D5C] animate-star-fill" style={{animationDelay: `${i * 0.1 + 0.5}s`}} />
                          <div className="absolute inset-0 bg-[#0A4D5C]/30 blur-lg animate-star-glow" style={{animationDelay: `${i * 0.1 + 0.5}s`}} />
                        </div>
                      ))}
                    </div>

                    <div className={`pt-6 border-t border-slate-200 transition-all duration-700 delay-300 ${
                      showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                      <h4 className="text-2xl font-bold text-slate-900 mb-1">{currentTestimonial.name}</h4>
                      <p className="text-[#0A4D5C] text-sm uppercase tracking-widest">{currentTestimonial.role}</p>
                    </div>

                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200 transition-all duration-700 delay-400 ${
                      showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                      <div className="relative">
                        <Check className="w-5 h-5 text-[#0A4D5C] animate-check-mark" />
                        <div className="absolute inset-0 bg-[#0A4D5C]/20 rounded-full animate-ping" />
                      </div>
                      <span className="text-slate-600 text-xs font-medium">Patient Vérifié</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation (inchangée) */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button onClick={handlePrev} disabled={isFlipping} className="w-16 h-16 rounded-full bg-white backdrop-blur-xl border-2 border-[#0A4D5C]/30 flex items-center justify-center hover:bg-[#0A4D5C] hover:border-[#0A4D5C] transition-all duration-300 disabled:opacity-50 group shadow-lg hover:shadow-xl active:scale-90">
              <svg className="w-7 h-7 text-[#0A4D5C] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => handleDotClick(i)} className={`h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                  i === activeIndex ? 'w-16 bg-gradient-to-r from-[#0A4D5C] to-[#0d6380] shadow-lg shadow-[#0A4D5C]/30 animate-pulse-slow' : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`} style={{transform: i === activeIndex ? 'scale(1)' : `scale(${1 - Math.abs(i - activeIndex) * 0.1})`}} />
              ))}
            </div>

            <button onClick={handleNext} disabled={isFlipping} className="w-16 h-16 rounded-full bg-white backdrop-blur-xl border-2 border-[#0A4D5C]/30 flex items-center justify-center hover:bg-[#0A4D5C] hover:border-[#0A4D5C] transition-all duration-300 disabled:opacity-50 group shadow-lg hover:shadow-xl active:scale-90">
              <svg className="w-7 h-7 text-[#0A4D5C] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animations CSS ajoutées pour le titre à gauche */}
      <style>{`
        /* Tes animations existantes restent intactes */
        /* ... (tout ton bloc <style> original) ... */

        /* Nouvelles animations pour le titre à gauche */
        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes reveal-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-slide-in-left { animation: slide-in-left 1s ease-out forwards; }
        .animate-reveal-left { animation: reveal-left 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }

        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  );
}