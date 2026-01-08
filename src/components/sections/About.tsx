"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ShieldCheck, MoveRight, Award } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: '8+', label: 'Expérience' },
    { value: '5k+', label: 'Patients' },
    { value: '100%', label: 'Hygiène' },
  ];

  return (
    <section id="about" className="relative py-32 bg-[#F1F5F9] overflow-hidden">
      
      {/* --- DÉCORATIONS DE FOND --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2fb6d4]/5 rounded-full blur-[120px] -mr-64 -mt-64" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- CÔTÉ GAUCHE : IMAGE AVEC CORRECTION DE CENTRAGE --- */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Lueur subtile derrière */}
              <div className="absolute inset-0 bg-[#2fb6d4]/15 rounded-full blur-3xl scale-110" />

              {/* Cercle Principal */}
              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full p-2 bg-gradient-to-tr from-[#0F4C5C] via-[#2fb6d4] to-[#0F4C5C] shadow-2xl">
                <div className="w-full h-full rounded-full bg-white overflow-hidden border-[6px] border-white relative">
                  <img 
                    src="/image/karim.jpg" 
                    alt="Dr. Karim Zairi" 
                    className="w-full h-full object-cover"
                    // LE SECRET EST ICI : 20% fait descendre l'image pour centrer le visage
                    style={{ objectPosition: '50% 0%' }} 
                  />
                </div>
              </div>

              {/* TICKET (BADGE) - DESIGN IDENTIQUE AU HERO */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] md:w-[300px] p-5 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-between z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0F4C5C] flex items-center justify-center text-white shadow-md">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-[#1E293B] font-bold text-sm leading-none">Certifié</p>
                    <p className="text-[#2fb6d4] text-[10px] uppercase font-bold mt-1 tracking-tight">Expert National</p>
                  </div>
                </div>
                <Award className="text-[#0F4C5C] opacity-40" size={22} />
              </motion.div>

              {/* Cercle décoratif pointillé */}
              <div className="absolute -inset-6 border-[2px] border-dashed border-[#0F4C5C]/10 rounded-full animate-[spin_40s_linear_infinite] -z-10" />
            </motion.div>
          </div>

          {/* --- CÔTÉ DROIT : TEXTE --- */}
          <div className="w-full lg:w-1/2 space-y-10 mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-10 h-[2px] bg-[#2fb6d4]"></div>
                <span className="text-[#0F4C5C] font-bold uppercase tracking-[0.2em] text-[11px]">Notre Engagement</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-[#1E293B] leading-tight mb-8">
                L'excellence au cœur de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C5C] to-[#2fb6d4]">votre sourire.</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-[#2fb6d4] pl-6">
                "Avec une solide expérience professionnelle, le Dr. Karim Zairi est un pionnier dans le domaine de l'implantologie dentaire au Maroc. Diplômé des meilleures universités européennes, il combine expertise technique et approche artistique."
              </p>
            </motion.div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 py-10 border-y border-slate-200/60">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-black text-[#0F4C5C]">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between w-full md:w-auto gap-12 bg-[#0F4C5C] text-white px-10 py-5 rounded-2xl font-bold shadow-lg group transition-all"
            >
              <span>En savoir plus</span>
              <MoveRight className="group-hover:translate-x-2 transition-transform text-[#2fb6d4]" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}