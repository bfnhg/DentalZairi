"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { useLanguage } from "../../contexts/LanguageContext";
import { Home, User, Stethoscope, MessageSquare, Phone, HelpCircle } from "lucide-react";

export function Navbar() {
  const { t } = useLanguage();

  // Configuration des items de navigation avec icônes pour le mobile
  const navItems = [
    {
      name: t('nav_home'),
      link: "#home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: t('nav_about'),
      link: "#about",
      icon: <User className="h-4 w-4" />,
    },
    {
      name: t('nav_services'),
      link: "#services",
      icon: <Stethoscope className="h-4 w-4" />,
    },
    {
      name: t('nav_testimonials'),
      link: "#testimonials",
      icon: <MessageSquare className="h-4 w-4" />,
    },
    {
      name: t('nav_faq'),
      link: "#faq",
      icon: <HelpCircle className="h-4 w-4" />,
    },
    {
      name: t('nav_contact'),
      link: "#contact",
      icon: <Phone className="h-4 w-4" />,
    },
  ];

  return (
    <header className="relative w-full">
      {/* On appelle le composant FloatingNav qui contient 
          déjà la logique de l'espace logo et du bouton 
      */}
      <FloatingNav navItems={navItems} />
    </header>
  );
}