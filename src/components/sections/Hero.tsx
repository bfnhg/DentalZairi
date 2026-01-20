"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { GlowButton } from '../ui/GlowButton';
import { Phone, CheckCircle2, Award, ShieldCheck } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  const images = [
    "/image/cab1.webp",
    "/image/cab2.webp",
    "/image/cab3.webp",
    "/image/cab4.webp",
    "/image/cab5.webp",
    "/image/cab6.webp",
    "/image/cab7.webp",
    
   
  ];
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8FAFC] pt-24 md:pt-20">
      
      {/* --- FOND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.4]" 
             style={{ backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- BADGE "CABINET OUVERT" : TOUJOURS EN HAUT SUR MOBILE --- */}
        <div className="flex lg:hidden justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F4C5C]/20 bg-[#0F4C5C]/5 text-[#0F4C5C] text-[10px] font-bold uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-[#2fb6d4] animate-pulse"></span>
              Dental.Zairi - Clinic ouvert
            </div>
        </div>

        {/* --- GRID PRINCIPAL --- */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* --- COLONNE TEXTE --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            {/* Badge caché sur Mobile (car déjà affiché en haut) mais visible sur Desktop */}
            <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F4C5C]/20 bg-[#0F4C5C]/5 text-[#0F4C5C] text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#2fb6d4] animate-pulse"></span>
              Dental.Zairi - Clinic ouvert
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold text-[#1E293B] mb-6 leading-tight">
              Votre Sourire, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C5C] to-[#2fb6d4]">
                Notre Passion.
              </span>
            </h1>

            <p className="text-slate-600 text-base md:text-xl mb-10 max-w-lg leading-relaxed">
              Une expertise dentaire d'exception alliée aux dernières technologies pour un confort absolu et des résultats durables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <GlowButton variant="primary" className="w-full sm:w-auto shadow-xl text-sm py-4 px-8">
                Contacter nous
              </GlowButton>
              
              <GlowButton 
                variant="emergency" 
                className="w-full sm:w-auto flex items-center justify-center bg-[#0F4C5C] text-white text-sm py-4 px-8 font-bold border-none shadow-lg hover:bg-[#0a3540]"
                onClick={() => window.location.href = 'tel:+212688175531'}
              >
                <Phone size={18} className="mr-2 text-[#2fb6d4]" />
                Urgence 24/7
              </GlowButton>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {[
                { text: 'Expertise Dentaire', icon: <CheckCircle2 size={18} /> },
                { text: 'Scanner 3D', icon: <CheckCircle2 size={18} /> },
                { text: 'Zéro Douleur', icon: <CheckCircle2 size={18} /> },
                { text: 'Équipe Qualifiée', icon: <CheckCircle2 size={18} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-600 font-medium text-sm md:text-base">
                  <span className="text-[#2fb6d4]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- COLONNE SLIDER --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center w-full"
          >
            <div className="relative group p-2 w-full max-w-[450px]">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 bg-gradient-to-r from-[#0F4C5C] via-[#2fb6d4] to-[#0F4C5C] rounded-[3rem] opacity-30 blur-md" 
              />
              
              <div className="relative bg-white p-2 md:p-3 rounded-[2.8rem] shadow-2xl border border-slate-100">
<div className="relative rounded-[2.2rem] h-[320px] md:h-[520px] w-full overflow-hidden bg-slate-900 transform-gpu">
                  {images.map((img, idx) => (
                    <motion.img
  key={img}
  src={img}
  animate={{ opacity: currentImage === idx ? 1 : 0 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  style={{ willChange: "opacity" }}
/>

                  ))}
                  

                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <div key={i} className={`h-1 rounded-full transition-all duration-300 ${currentImage === i ? "w-8 bg-[#2fb6d4]" : "w-2 bg-white/40"}`} />
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] p-4 md:p-5 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-between z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0F4C5C] flex items-center justify-center text-white shadow-inner">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-[#1E293B] font-bold text-sm leading-none">Dental Zairi</p>
                      <p className="text-[#2fb6d4] text-[10px] uppercase font-bold mt-1 tracking-tight">Clinic, Marrakech</p>
                    </div>
                  </div>
                  <Award className="text-[#0F4C5C]" size={22} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}