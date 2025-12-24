"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- TITRE ANIMÉ HARMONISÉ ---
const AnimatedTitle = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="inline-block mr-3"
        >
          {word === "EXPERTISES." ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C5C] to-[#2fb6d4]">
              {word}
            </span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </h2>
  );
};

// --- CONTENU DÉTAILLÉ ---
const services = [
  { 
    id: "01",
    title: "Dentisterie Esthétique", 
    desc: "Redéfinissez l'harmonie de votre visage. Nous utilisons des facettes E-max ultra-fines et le blanchiment laser Zoom pour des résultats naturels et éclatants en un temps record.", 
    details: ["Veneers", "Digital Smile Design", "Blanchiment"] 
  },
  { 
    id: "02",
    title: "Chirurgie Implantaire", 
    desc: "Une solution fixe et durable pour vos dents manquantes. Nos implants en titane Grade 5 assurent une bio-intégration parfaite et une force de mastication retrouvée.", 
    details: ["Implants Premium", "Greffe Osseuse", "Sinus Lift"] 
  },
  { 
    id: "03",
    title: "Chirurgie Orale", 
    desc: "Expertise chirurgicale pour les cas complexes : extractions de dents de sagesse incluses, kystes et chirurgie pré-prothétique sous protocoles de sédation douce.", 
    details: ["Dents de sagesse", "Chirurgie Tissus", "Biopsies"] 
  },
  { 
    id: "04",
    title: "Orthodontie & ODF", 
    desc: "Réalignement fonctionnel et esthétique. Nous traitons les malocclusions chez l'enfant et l'adulte pour prévenir l'usure dentaire et sublimer le profil facial.", 
    details: ["Brackets", "Multi-attaches", "Suivi Enfant"] 
  },
  { 
    id: "05",
    title: "Invisalign", 
    desc: "La liberté d'un traitement invisible. Aligneurs amovibles conçus par IA pour redresser vos dents sans contraintes alimentaires et avec une hygiène simplifiée.", 
    details: ["Scan iTero", "Sans bagues", "Invisible"] 
  },
  { 
    id: "06",
    title: "Pédodontie", 
    desc: "Parce que les premières visites comptent. Un environnement ludique dédié aux enfants pour des soins sans peur (soins des caries, bagues de maintien, prévention).", 
    details: ["Espace Enfant", "Prévention", "Doux"] 
  },
  { 
    id: "07",
    title: "Dentisterie Digitale", 
    desc: "Précision millimétrée par ordinateur. Empreintes optiques sans pâte, planification 3D et prothèses conçues par CFAO pour une adaptation parfaite en bouche.", 
    details: ["Empreinte 3D", "Design CAO", "Usinage"] 
  },
  { 
    id: "08",
    title: "Radiologie 2D/3D", 
    desc: "Diagnostic de haute sécurité. Notre scanner Cone Beam (CBCT) permet de visualiser vos structures osseuses et nerveuses en 3D avec une dose de radiation minimale.", 
    details: ["Cone Beam", "Panoramique", "Sécurité"] 
  }
];

function CometCard({ service }: { service: typeof services[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full min-h-[380px] w-full rounded-[2.5rem] bg-[#0F323A]/40 border border-white/5 p-10 flex flex-col group hover:bg-[#13414B]/60 transition-colors duration-500 overflow-hidden shadow-2xl"
      >
        {/* Spotlight dynamique */}
        <motion.div 
          className="absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              (values: number[]) => `radial-gradient(400px circle at ${(values[0] + 0.5) * 100}% ${(values[1] + 0.5) * 100}%, rgba(47, 182, 212, 0.12), transparent 80%)`
            )
          }}
        />

        {/* --- REMPLACEMENT ICONE PAR BADGE NUMÉRIQUE --- */}
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
          <div className="mb-8">
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#2fb6d4] to-[#0F4C5C] opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              {service.id}
            </span>
            <div className="w-12 h-[2px] bg-[#2fb6d4] mt-2 group-hover:w-20 transition-all duration-500" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#2fb6d4] transition-colors">
            {service.title}
          </h3>
          
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            {service.desc}
          </p>
        </div>

        {/* --- FOOTER TAGS --- */}
        <div style={{ transform: "translateZ(30px)" }} className="mt-auto flex flex-wrap gap-2 relative z-10">
          {service.details.map((d, i) => (
            <span key={i} className="text-[9px] font-black text-[#2fb6d4] bg-[#2fb6d4]/5 uppercase tracking-widest border border-[#2fb6d4]/10 px-3 py-1.5 rounded-full">
              {d}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#0A262E] overflow-hidden">
      {/* Grille de fond subtile */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#2fb6d4 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* EN-TÊTE */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4 text-[#2fb6d4] font-bold uppercase tracking-[0.3em] text-[10px]"
          >
            <span className="w-10 h-[2px] bg-[#2fb6d4]"></span>
            Innovation & Soins
          </motion.div>
          
          <AnimatedTitle text="SERVICES EXPERTISES." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <CometCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}