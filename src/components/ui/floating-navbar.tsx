"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  // Les 2 premiers items affichés directement sur mobile
  const mobileVisibleItems = navItems.slice(0, 1);
  const mobileMenuItems = navItems.slice(1);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-6 md:top-10 inset-x-0 mx-auto border border-[#0F4C5C]/20 rounded-full bg-[#0F4C5C]/95 backdrop-blur-xl shadow-lg z-[5000] px-4 py-2 items-center justify-center space-x-3 md:space-x-6",
            className
          )}
        >
          {/* LOGO */}
          <div className="flex items-center gap-2">
            {/* Icône stylisée inspirée du logo (optionnel) */}
            <div className="hidden sm:block">
              {/* <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 2C12 2 15 4 15 8C15 12 12 16 12 16C12 16 9 12 9 8C9 4 12 2 12 2Z" fill="#2fb6d4"/>
                 <path d="M12 22C12 22 19 18 19 12C19 6 12 2 12 2C12 2 5 6 5 12C5 18 12 22 12 22Z" stroke="#0F4C5C" strokeWidth="2"/>
              </svg> */}
            </div>

            {/* Texte Signature */}
            <div className="flex flex-col leading-none min-w-0">
              {/* Titre : s'adapte de text-lg (mobile) à text-2xl (desktop) */}
              <span className="text-lg xs:text-xl md:text-2xl font-extrabold tracking-tighter font-['Montserrat'] bg-clip-text text-transparent bg-gradient-to-r from-[#1b798e] to-[#6dc9e0] truncate">
                DENTAL ZAIRI
              </span>
            </div>
          </div>

          {/* VERSION MOBILE : 1er lien visible directement */}
          <div className="flex md:hidden items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.2em]">
            {mobileVisibleItems.map((navItem, idx) => (
              <a
                key={`mobile-visible-${idx}`}
                href={navItem.link}
                className="relative text-white/80 hover:text-[#2fb6d4] transition-colors group"
              >
                {navItem.name}
                <span className="absolute inset-x-0 w-0 h-px bg-[#2fb6d4] -bottom-1 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Hamburger (seulement si items restants) */}
          {mobileMenuItems.length > 0 && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-[#2fb6d4]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}

          {/* VERSION DESKTOP : Tous les liens */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((navItem, idx) => (
              <a
                key={`desktop-${idx}`}
                href={navItem.link}
                className="relative text-white/80 hover:text-[#2fb6d4] transition-colors text-[10px] font-bold uppercase tracking-[0.2em] group"
              >
                {navItem.name}
                <span className="absolute inset-x-0 w-0 h-px bg-[#2fb6d4] -bottom-1 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* BOUTON CONTACTEZ-NOUS - Redirection vers le formulaire de contact */}
          <a
            href="#contact"
            className="border border-white/20 text-white px-4 py-2 rounded-full bg-[#2fb6d4] hover:bg-[#259eb9] transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-wider">
              <span className="md:hidden">Contact</span>
              <span className="hidden md:inline">Contactez-nous</span>
            </span>
          </a>
        </motion.div>
      </AnimatePresence>

      {/* MENU MOBILE DÉROULANT */}
      <AnimatePresence>
        {mobileMenuOpen && mobileMenuItems.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-[4999] md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-20 bottom-0 w-64 bg-[#0F4C5C]/98 backdrop-blur-xl border-l border-[#0F4C5C]/30 z-[5000] md:hidden flex flex-col items-start p-8 space-y-8"
            >
              {mobileMenuItems.map((navItem, idx) => (
                <a
                  key={`mobile-menu-${idx}`}
                  href={navItem.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 hover:text-[#2fb6d4] transition-colors text-lg font-medium"
                >
                  {navItem.name}
                </a>
              ))}

              {/* Bouton Contactez-nous dans le menu mobile aussi */}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-8 border border-white/20 text-white px-6 py-3 rounded-full bg-[#2fb6d4] hover:bg-[#259eb9] transition-all font-bold uppercase tracking-wider text-center"
              >
                Contactez-nous
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};