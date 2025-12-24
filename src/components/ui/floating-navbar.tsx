"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) setVisible(true);
        else setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-6 md:top-10 inset-x-0 mx-auto border border-[#0F4C5C]/20 rounded-full bg-[#0F4C5C]/95 backdrop-blur-xl shadow-lg z-[5000] px-4 md:pl-6 md:pr-2 py-2 items-center justify-center space-x-3 md:space-x-6",
          className
        )}
      >
        {/* --- LOGO DENT --- */}
        {/* --- LOGO DENT --- */}
<a href="#home" className="flex items-center justify-center pr-2 md:border-r md:border-white/10 md:pr-4">
  <img 
    src="/image/dent.png" 
    alt="Logo" 
    className="h-7 w-7 md:h-8 md:w-8 object-contain" 
    onError={(e) => {
      // Si l'image ne charge pas, on affiche une icône de secours
      e.currentTarget.style.display = 'none';
    }}
  />
</a>

        {/* --- NAVIGATION : ICONES (Mobile) / ICONES + TEXTE (Desktop) --- */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className="relative text-white/80 hover:text-[#2fb6d4] transition-colors group flex items-center"
            >
              <span className="block">{navItem.icon}</span>
              
              {/* Le texte est caché sur mobile (hidden) et s'affiche sur desktop (md:block) */}
              <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] ml-2">
                {navItem.name}
              </span>
              
              <span className="absolute inset-x-0 w-0 h-px bg-[#2fb6d4] -bottom-1 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        
        {/* --- BOUTON RDV --- */}
        <button 
          onClick={() => window.location.href = 'tel:+212537371113'}
          className="relative border border-white/20 text-white px-4 md:px-5 py-2 rounded-full bg-[#2fb6d4] hover:bg-[#259eb9] transition-all"
        >
          <span className="text-[10px] font-black uppercase tracking-wider">
             <span className="md:hidden">RDV</span>
             <span className="hidden md:inline">RDV Rapide</span>
          </span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};