"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";

interface SlideData {
  title: string;
  src: string;
  description: string;
  tags: string[];
}

const servicesSlides: SlideData[] = [
  { 
    title: "Dentisterie Esthétique",
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&crop=center",
    description: "Facettes céramiques, blanchiment professionnel et design du sourire numérique.",
    tags: ["Facettes", "Blanchiment", "Design numérique"]
  },
  { 
    title: "Chirurgie Implantaire",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&crop=center",
    description: "Implants en titane avec planification 3D pour une pose précise et durable.",
    tags: ["Implants", "Greffe osseuse", "Planification 3D"]
  },
  { 
    title: "Chirurgie Orale",
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    description: "Extractions complexes, dents de sagesse et chirurgies avec technologie laser.",
    tags: ["Extractions", "Sagesse", "Laser"]
  },
  { 
    title: "Orthopédie Dento-Faciale",
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&crop=center",
    description: "Correction des déséquilibres de mâchoire et harmonisation faciale.",
    tags: ["ODF", "Appareils", "Harmonisation"]
  },
  { 
    title: "Invisalign",
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop&crop=center",
    description: "Aligneurs transparents pour un traitement orthodontique discret et confortable.",
    tags: ["Invisalign", "Transparent", "Discret"]
  },
  { 
    title: "Pédodontie",
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop&crop=center",
    description: "Soins dentaires spécialisés pour enfants dans un environnement adapté.",
    tags: ["Enfants", "Prévention", "Ludique"]
  },
  { 
    title: "Dentisterie Numérique",
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center",
    description: "Technologies numériques : scan intra-oral, CFAO et restauration rapide.",
    tags: ["Numérique", "CFAO", "Scan 3D"]
  },
  { 
    title: "Radiologie 2D/3D Cone Beam",
    src: "https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=800&h=600&fit=crop&crop=center",
    description: "Imagerie CBCT 3D de précision pour diagnostics et planification.",
    tags: ["CBCT", "Radiologie", "3D"]
  }
];

const Slide = ({ slide, index, current, handleSlideClick }: { 
  slide: SlideData; 
  index: number; 
  current: number; 
  handleSlideClick: (index: number) => void;
}) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!slideRef.current) return;
    const rect = slideRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const getTransformStyle = () => {
    const distance = Math.abs(current - index);
    const isActive = current === index;
    const isLeft = index < current;

    if (isActive) {
      return {
        transform: "translateZ(0px) rotateY(0deg) scale(1)",
        zIndex: 50,
        opacity: 1
      };
    } else if (distance === 1) {
      return {
        transform: `translateZ(-30px) rotateY(${isLeft ? 15 : -15}deg) scale(0.85)`,
        zIndex: 40,
        opacity: 0.8
      };
    } else if (distance === 2) {
      return {
        transform: `translateZ(-60px) rotateY(${isLeft ? 25 : -25}deg) scale(0.7)`,
        zIndex: 30,
        opacity: 0.6
      };
    } else {
      return {
        transform: `translateZ(-90px) rotateY(${isLeft ? 35 : -35}deg) scale(0.6)`,
        zIndex: 20,
        opacity: 0.3
      };
    }
  };

  const isVisible = Math.abs(current - index) <= 2;

  return (
    <motion.div
      ref={slideRef}
      className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[360px] lg:h-[450px] mx-2 md:mx-3 cursor-pointer flex-shrink-0"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      style={{
        ...getTransformStyle(),
        transformStyle: "preserve-3d",
        transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
      } as any}
      whileHover={{ scale: current === index ? 1.02 : 0.98 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* LED Glow Effect - desktop seulement */}
      {current === index && (
        <div 
          className="absolute inset-0 rounded-xl pointer-events-none z-0 hidden md:block"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(47, 182, 212, 0.3) 0%,
              rgba(47, 182, 212, 0.15) 30%,
              transparent 70%)`,
            mixBlendMode: "screen"
          }}
        />
      )}

      {/* Main Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1D1F2F] to-[#0A262E] rounded-xl overflow-hidden shadow-xl md:shadow-2xl">
        {/* LED Border - desktop seulement */}
        {current === index && (
          <div className="absolute inset-0 rounded-xl p-[2px] md:p-[3px] z-10 hidden md:block">
            <div 
              className="absolute inset-0 rounded-xl opacity-100 transition-all duration-700"
              style={{
                background: `conic-gradient(
                  from 0deg at 50% 50%,
                  #2fb6d4 0deg,
                  #0F4C5C 120deg,
                  #2fb6d4 240deg,
                  #2fb6d4 360deg
                )`,
                filter: "blur(6px)",
              }}
            />
          </div>
        )}

        {/* Image Container */}
        <div className="absolute inset-[2px] md:inset-[3px] rounded-lg overflow-hidden z-0">
          <motion.img
            className="absolute inset-0 w-full h-full object-cover"
            src={slide.src}
            alt={slide.title}
            style={{
              filter: current === index ? 'brightness(1)' : 'brightness(0.7)'
            }}
            animate={{
              scale: current === index ? 1.05 : 1
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        {/* Gradient Overlay plus fort pour mieux lire le texte */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#0A262E]/95 via-[#0A262E]/80 to-transparent transition-all duration-700 z-0"
          style={{
            opacity: current === index ? 1 : 0.7
          }}
        />
        
        {/* Numéro du service */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
          <div className="text-[#2fb6d4] font-bold text-xl md:text-2xl lg:text-3xl">
            0{index + 1}
          </div>
        </div>

        {/* CONTENU DANS LA CARTE - VISIBLE POUR TOUTES LES CARTES VISIBLES */}
        {isVisible && (
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 lg:p-6 z-20">
            {/* Titre - toujours visible pour les cartes proches */}
            <motion.h3 
              className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 0.9 - Math.abs(current - index) * 0.2,
                y: 0 
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{
                fontSize: current === index ? '1.5rem' : '1.25rem',
                fontWeight: current === index ? 'bold' : 'semibold'
              }}
            >
              {slide.title}
            </motion.h3>
            
            {/* Description - seulement pour carte active ou très proches */}
            {(current === index || Math.abs(current - index) === 1) && (
              <motion.p 
                className="text-white/90 mb-2 md:mb-3 text-xs md:text-sm lg:text-base max-w-full line-clamp-2 md:line-clamp-3"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: current === index ? 1 : 0.7 
                }}
                transition={{ delay: 0.2, duration: 0.4 }}
                style={{
                  fontSize: current === index ? '0.875rem' : '0.75rem'
                }}
              >
                {slide.description}
              </motion.p>
            )}

            {/* Tags - seulement pour carte active */}
            {current === index && (
              <motion.div 
                className="flex flex-wrap gap-1 md:gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slide.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-white/15 backdrop-blur-md text-white border border-white/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1), type: "spring" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AnimatedTitle = ({ text }: { text: string }) => {
  const words = text.split(" ");
  
  return (
    <div className="mb-8 md:mb-12 lg:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "backOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-block mr-2 md:mr-3"
          >
            {word === "SPÉCIALITÉS" ? (
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  background: "linear-gradient(90deg, #0F4C5C, #2fb6d4, #0F4C5C)",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 3s ease infinite"
                }}
              >
                {word}
              </span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </h2>
    </div>
  );
};

export function Services() {
  const [currentSlide, setCurrentSlide] = useState(0); // Commence à la carte 2 (index 1)
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const handlePrev = () => {
    setCurrentSlide(prev => prev === 0 ? servicesSlides.length - 1 : prev - 1);
    resetAutoPlay();
  };

  const handleNext = () => {
    setCurrentSlide(prev => prev === servicesSlides.length - 1 ? 0 : prev + 1);
    resetAutoPlay();
  };

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
    autoPlayRef.current = setTimeout(handleNext, 4000);
  };

  // CALCUL CORRIGÉ : On veut que la carte "currentSlide" soit au centre
 const getContainerTransform = () => {
  if (!carouselRef.current) return '0px';

  const containerWidth = carouselRef.current.offsetWidth;

  const slideWidth = 280; // mobile
  const margin = 16;
  const slideFullWidth = slideWidth + margin;

  const center = containerWidth / 2;
  const activeSlideCenter =
    currentSlide * slideFullWidth + slideWidth / 2;

  return `${center - activeSlideCenter}px`;
};



  // Recalcule au resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(prev => prev);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll
  useEffect(() => {
    autoPlayRef.current = setTimeout(handleNext, 4000);
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <section id="services" className="relative py-12 md:py-20 lg:py-24 bg-[#0A262E] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A262E] via-[#0F3A42] to-[#0A262E] opacity-90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1800&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-6xl mb-8 md:mb-12 lg:mb-16 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6 text-[#2fb6d4] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs"
          >
            <span className="w-8 md:w-12 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent to-[#2fb6d4]"></span>
            Spécialités Dentaires
            <span className="w-8 md:w-12 h-[1px] md:h-[2px] bg-gradient-to-r from-[#2fb6d4] to-transparent"></span>
          </motion.div>
          
          <AnimatedTitle text="Nos spécialités " />
          
          <motion.p 
            className="text-white/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Découvrez nos spécialités dentaires de pointe, alliant technologie avancée et expertise médicale.
          </motion.p>

          {/* Affichage du numéro du service actuel - CORRIGÉ */}
          {/* <motion.div 
            className="text-[#2fb6d4] font-bold text-lg md:text-xl lg:text-2xl mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Service {currentSlide + 1} sur {servicesSlides.length}
          </motion.div> */}
        </div>

        {/* 3D Carousel Container */}
        <div className="relative" ref={carouselRef}>
          <div className="overflow-visible">
            <div className="h-[350px] md:h-[400px] lg:h-[450px] relative flex items-center justify-center">
              {/* Container avec perspective */}
              <div 
                className="relative w-full h-full"
                style={{ perspective: "1200px" }}
              >
                {/* Slides Container qui se déplace */}
                <div
                  ref={slidesContainerRef}
                 className="absolute top-1/2 flex items-center"
  style={{
    transform: `translate3d(${getContainerTransform()}, -50%, 0)`,
    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'transform',
  }}
                >
                  {servicesSlides.map((slide, index) => (
                    <Slide
                      key={index}
                      slide={slide}
                      index={index}
                      current={currentSlide}
                      handleSlideClick={handleSlideClick}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 md:mt-16">
            <div className="max-w-xl mx-auto">
              {/* Dots Indicator */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
                {servicesSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      resetAutoPlay();
                    }}
                    className="relative group"
                  >
                    <div 
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? 'bg-[#2fb6d4] scale-125 md:scale-150' 
                          : 'bg-white/40 group-hover:bg-white/60'
                      }`}
                    />
                    {currentSlide === index && (
                      <motion.div 
                        className="absolute inset-0 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#2fb6d4] blur-sm md:blur-md"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Manual Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
                <motion.button
                  onClick={handlePrev}
                  className="px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center gap-2 text-sm md:text-base font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(47, 182, 212, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconArrowNarrowLeft size={16} className="md:w-5 md:h-5" />
                  <span>Précédent</span>
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  className="px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 rounded-full bg-gradient-to-r from-[#2fb6d4] to-[#0F4C5C] text-white flex items-center gap-2 text-sm md:text-base font-medium shadow-md md:shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(47, 182, 212, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Suivant</span>
                  <IconArrowNarrowRight size={16} className="md:w-5 md:h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Style global pour l'animation de gradient */}
      <style>
        {`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </section>
  );
}