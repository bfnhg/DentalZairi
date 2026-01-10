"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient"; // ou le chemin correct


interface SlideData {
  title: string;
  src: string;
  description: string;
  tags: string[];
  details: {
    fullDescription: string;
    benefits: string[];
    process: string[];
    duration: string;
    price: string;
  };
}

const servicesSlides: SlideData[] = [
  { 
    title: "Dentisterie Esthétique",
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&crop=center",
    description: "Facettes céramiques, blanchiment professionnel et design du sourire numérique.",
    tags: ["Facettes", "Blanchiment", "Design numérique"],
    details: {
      fullDescription: "La dentisterie esthétique transforme votre sourire grâce à des techniques avancées et des matériaux de haute qualité. Nos spécialistes utilisent la technologie numérique pour créer un sourire parfaitement adapté à votre visage.",
      benefits: [
        "Sourire éclatant et naturel",
        "Confiance en soi renforcée",
        "Résultats durables et esthétiques",
        "Techniques minimalement invasives"
      ],
      process: [
        "Consultation et analyse du sourire",
        "Design numérique personnalisé",
        "Préparation et essayage",
        "Pose définitive et ajustements"
      ],
      duration: "2 à 4 séances",
      price: "À partir de 5000 DH"
    }
  },
  { 
    title: "Chirurgie Implantaire",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&crop=center",
    description: "Implants en titane avec planification 3D pour une pose précise et durable.",
    tags: ["Implants", "Greffe osseuse", "Planification 3D"],
    details: {
      fullDescription: "Nos implants dentaires en titane offrent une solution permanente pour remplacer vos dents manquantes. Grâce à la planification 3D, nous garantissons une pose précise et un résultat optimal.",
      benefits: [
        "Solution permanente et stable",
        "Préserve l'os de la mâchoire",
        "Aspect et fonction naturels",
        "Taux de réussite élevé (98%)"
      ],
      process: [
        "Scanner 3D et planification",
        "Pose de l'implant (chirurgie)",
        "Période d'ostéointégration (3-6 mois)",
        "Pose de la couronne définitive"
      ],
      duration: "4 à 6 mois (total)",
      price: "À partir de 8000 DH par implant"
    }
  },
  { 
    title: "Chirurgie Orale",
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    description: "Extractions complexes, dents de sagesse et chirurgies avec technologie laser.",
    tags: ["Extractions", "Sagesse", "Laser"],
    details: {
      fullDescription: "Notre service de chirurgie orale prend en charge tous types d'interventions, des extractions simples aux cas complexes. L'utilisation du laser réduit la douleur et accélère la guérison.",
      benefits: [
        "Interventions précises et rapides",
        "Récupération accélérée",
        "Douleur minimisée",
        "Risque d'infection réduit"
      ],
      process: [
        "Examen clinique et radiologique",
        "Anesthésie locale ou sédation",
        "Intervention chirurgicale",
        "Suivi post-opératoire"
      ],
      duration: "30 min à 2h selon complexité",
      price: "À partir de 800 DH"
    }
  },
  { 
    title: "Orthopédie Dento-Faciale",
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop&crop=center",
    description: "Correction des déséquilibres de mâchoire et harmonisation faciale.",
    tags: ["ODF", "Appareils", "Harmonisation"],
    details: {
      fullDescription: "L'orthopédie dento-faciale corrige les déséquilibres de croissance des mâchoires chez l'enfant et l'adolescent. Un traitement précoce permet d'obtenir des résultats optimaux.",
      benefits: [
        "Croissance harmonieuse du visage",
        "Prévention des problèmes orthodontiques",
        "Amélioration de la respiration",
        "Profil facial équilibré"
      ],
      process: [
        "Diagnostic complet (radios, moulages)",
        "Mise en place de l'appareil",
        "Visites de contrôle mensuelles",
        "Phase de contention"
      ],
      duration: "12 à 24 mois",
      price: "À partir de 15000 DH"
    }
  },
  { 
    title: "Invisalign",
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop&crop=center",
    description: "Aligneurs transparents pour un traitement orthodontique discret et confortable.",
    tags: ["Invisalign", "Transparent", "Discret"],
    details: {
      fullDescription: "Invisalign utilise des aligneurs transparents sur mesure pour redresser vos dents de manière discrète. Amovibles et confortables, ils s'adaptent parfaitement à votre style de vie.",
      benefits: [
        "Pratiquement invisible",
        "Amovible pour manger et se brosser",
        "Confortable sans métal",
        "Résultats prévisibles en 3D"
      ],
      process: [
        "Scan 3D et simulation du résultat",
        "Fabrication des aligneurs personnalisés",
        "Changement d'aligneurs toutes les 2 semaines",
        "Suivi régulier tous les 2 mois"
      ],
      duration: "8 à 18 mois",
      price: "À partir de 35000 DH"
    }
  },
  { 
    title: "Pédodontie",
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop&crop=center",
    description: "Soins dentaires spécialisés pour enfants dans un environnement adapté.",
    tags: ["Enfants", "Prévention", "Ludique"],
    details: {
      fullDescription: "Notre équipe de pédodontie crée une expérience positive pour vos enfants. Des soins adaptés dans un environnement ludique et rassurant pour préserver leur santé dentaire.",
      benefits: [
        "Approche douce et rassurante",
        "Prévention des caries précoces",
        "Éducation à l'hygiène bucco-dentaire",
        "Suivi de la croissance dentaire"
      ],
      process: [
        "Premier contact et familiarisation",
        "Examen complet et nettoyage",
        "Soins si nécessaire",
        "Conseils de prévention"
      ],
      duration: "30 à 45 minutes",
      price: "À partir de 300 DH"
    }
  },
  { 
    title: "Dentisterie Numérique",
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center",
    description: "Technologies numériques : scan intra-oral, CFAO et restauration rapide.",
    tags: ["Numérique", "CFAO", "Scan 3D"],
    details: {
      fullDescription: "La dentisterie numérique révolutionne les soins dentaires avec des technologies de pointe. Scan 3D, conception assistée par ordinateur et fabrication le jour même.",
      benefits: [
        "Précision maximale",
        "Pas d'empreintes désagréables",
        "Restaurations en une seule séance",
        "Résultats esthétiques supérieurs"
      ],
      process: [
        "Scan intra-oral 3D",
        "Conception numérique de la restauration",
        "Fabrication immédiate (CFAO)",
        "Pose et ajustements"
      ],
      duration: "1 à 2 heures (séance unique)",
      price: "À partir de 3500 DH"
    }
  },
  { 
    title: "Radiologie 2D/3D Cone Beam",
    src: "https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=800&h=600&fit=crop&crop=center",
    description: "Imagerie CBCT 3D de précision pour diagnostics et planification.",
    tags: ["CBCT", "Radiologie", "3D"],
    details: {
      fullDescription: "Notre équipement CBCT de dernière génération offre une imagerie 3D haute résolution. Indispensable pour la planification implantaire et le diagnostic précis.",
      benefits: [
        "Images 3D ultra-précises",
        "Irradiation minimale",
        "Diagnostic complet en une seule prise",
        "Planification chirurgicale optimale"
      ],
      process: [
        "Positionnement du patient",
        "Acquisition 3D (10-20 secondes)",
        "Reconstruction et analyse",
        "Remise du CD avec images"
      ],
      duration: "15 minutes",
      price: "À partir de 800 DH"
    }
  }
];

const Slide = ({ slide, index, current, handleSlideClick, onLearnMore }: { 
  slide: SlideData; 
  index: number; 
  current: number; 
  handleSlideClick: (index: number) => void;
  onLearnMore: (slide: SlideData) => void;
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
                className="flex flex-wrap gap-1 md:gap-1.5 mb-3"
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

            {/* Bouton En savoir plus - seulement pour carte active */}
            {current === index && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onLearnMore(slide);
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#2fb6d4] to-[#0F4C5C] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(47, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>En savoir plus</span>
                <IconArrowNarrowRight size={18} />
              </motion.button>
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

export  function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<SlideData | null>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();


  const phoneNumber = "212600000000"; // ← CHANGEZ ICI (format international sans + ni 00)
const messageTemplate = (service: string) => 
  `Bonjour ! Je souhaiterais prendre rendez-vous pour :\n\n• ${service}\n• Nom : \n• Téléphone : \nMerci ! 😊`;

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

  const getContainerTransform = () => {
    if (!carouselRef.current) return '0px';
    const containerWidth = carouselRef.current.offsetWidth;
    const slideWidth = 280;
    const margin = 16;
    const slideFullWidth = slideWidth + margin;
    const center = containerWidth / 2;
    const activeSlideCenter = currentSlide * slideFullWidth + slideWidth / 2;
    return `${center - activeSlideCenter}px`;
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(prev => prev);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      {/* Modal */}
      {selectedService && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            className="relative bg-gradient-to-br from-[#1D1F2F] to-[#0A262E] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#2fb6d4]/20"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header avec image */}
            <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
              <img
                src={selectedService.src}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A262E] via-[#0A262E]/80 to-transparent" />
              
              {/* Bouton fermer */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Titre */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {selectedService.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-[#2fb6d4]/20 backdrop-blur-md text-[#2fb6d4] border border-[#2fb6d4]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Description complète */}
              <div>
                <h4 className="text-[#2fb6d4] font-bold text-lg mb-3">Description</h4>
                <p className="text-white/80 text-base leading-relaxed">
                  {selectedService.details.fullDescription}
                </p>
              </div>

              {/* Avantages */}
              <div>
                <h4 className="text-[#2fb6d4] font-bold text-lg mb-3">Avantages</h4>
                <ul className="space-y-2">
                  {selectedService.details.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-white/80"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <svg className="w-5 h-5 text-[#2fb6d4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Processus */}
              <div>
                <h4 className="text-[#2fb6d4] font-bold text-lg mb-3">Processus de traitement</h4>
                <div className="space-y-3">
                  {selectedService.details.process.map((step, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2fb6d4]/20 flex items-center justify-center text-[#2fb6d4] font-bold border border-[#2fb6d4]/30">
                        {i + 1}
                      </div>
                      <p className="text-white/80 pt-1">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Durée et prix */}
            

              {/* CTA */}
              {/* <motion.button
                className="w-full py-4 rounded-lg bg-gradient-to-r from-[#2fb6d4] to-[#0F4C5C] text-white font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(47, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Prendre rendez-vous
              </motion.button> */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="mt-8" // espace au-dessus si besoin
>
  <HoverBorderGradient
    as="a" // Transforme en lien <a>
    href={`https://wa.me/212688175531?text=${encodeURIComponent(
      `Bonjour ! Je souhaiterais prendre rendez-vous pour ${selectedService?.title || "une consultation"}.\nMerci ! 😊`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    duration={3} // Vitesse de rotation du gradient (plus lent = plus élégant)
    clockwise={false} // Rotation dans le sens anti-horaire
    className="w-full"
    containerClassName="w-full"
  >
 Consultation gratuite sur WhatsApp  </HoverBorderGradient>
</motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
        </div>

        {/* 3D Carousel Container */}
        <div className="relative" ref={carouselRef}>
          <div className="overflow-visible">
            <div className="h-[350px] md:h-[400px] lg:h-[450px] relative flex items-center justify-center">
              <div 
                className="relative w-full h-full"
                style={{ perspective: "1200px" }}
              >
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
                      onLearnMore={setSelectedService}
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