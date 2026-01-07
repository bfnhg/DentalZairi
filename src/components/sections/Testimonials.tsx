"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { CardContainer, CardBody, CardItem } from "../../components/ui/3d-card"; // Aceternity

type Testimonial = {
  name: string;
  role: string;
  treatment: string;
  text: string;
  rating: number;
  before: string[];
  after: string[];
};

const testimonials: Testimonial[] = [
  
  // {
  //   name: "Sara ben Amor",
  //   role: "Résultat après 4 mois",
  //   treatment: "Blanchiment dentaire",
  //   text: "Résultat naturel et indolore. Je recommande fortement cette clinique.",
  //   rating: 5,
  //   before: ["/image/testii1before.jpeg"],
  //   after: ["/image/testii1after.jpeg"],
  // },
  
  // {
  //   name: "Salma Trabelsi",
  //   role: "Résultat après 6 mois",
  //   treatment: "Couronne zircone",
  //   text: "Je suis très satisfait du résultat. L’équipe était professionnelle et rassurante du début à la fin.",
  //   rating: 5,
  
  //    before: ["/image/testi5before.jpeg"],
  //   after: ["/image/testi5after.jpeg","/image/testii5after.jpeg"],
  // },
   {
    name: "Salma Trabelsi",
    role: "Résultat après 6 mois",
    treatment: "Couronne zircone",
    text: "Je suis très satisfait du résultat. L’équipe était professionnelle et rassurante du début à la fin.",
    rating: 5,
  
     before: ["/image/testi5before.jpeg"],
    after: ["/image/testi5after.jpeg","/image/testii5after.jpeg"],
  },
  {
    name: "Nadia Khaled",
    role: "Résultat après 4 mois",
    treatment: "Blanchiment dentaire",
    text: "Résultat naturel et indolore. Je recommande fortement cette clinique.",
    rating: 5,
    before: ["/image/testi2before.jpeg"],
    after: ["/image/testi2after.jpeg"],
  },
  {
    name: "Rania Belhaje",
    role: "Résultat après 6 mois",
    treatment: "Implants dentaires",
    text: "Je suis très satisfait du résultat. L’équipe était professionnelle et rassurante du début à la fin.",
    rating: 5,
     before: ["/image/testi3before.jpeg"],
    after: ["/image/testi3after.jpeg"],
  },

];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = testimonials[activeIndex];

  const handlePrev = () => {
  setActiveIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};

const handleNext = () => {
  setActiveIndex((prev) =>
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
};
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Témoignages Patients
          </h2>
          <p className="text-slate-600 mt-3">
            Des résultats réels, visibles et durables
          </p>
        </motion.div>

        {/* CARD */}
        <CardContainer className="inter-var">
          <CardBody className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* LEFT */}
                <div>
                  <CardItem
                    translateZ={40}
                    className="inline-block mb-4 px-4 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold"
                  >
                    {t.treatment}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ={30}
                    className="text-lg text-slate-700 leading-relaxed mb-6"
                  >
                    “{t.text}”
                  </CardItem>

                  {/* STARS */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <Star className="w-5 h-5 fill-teal-600 text-teal-600" />
                      </motion.div>
                    ))}
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { src: t.before[0], label: "Avant", badge: "bg-black/70" },
                    { src: t.after[0], label: "Après", badge: "bg-teal-600" },
                  ].map((img, i) => (
                    <CardItem
                      key={i}
                      translateZ={50}
                      className="relative rounded-xl overflow-hidden"
                    >
                      <motion.img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-56 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <span
                        className={`absolute top-2 left-2 ${img.badge} text-white text-xs px-2 py-1 rounded`}
                      >
                        {img.label}
                      </span>
                    </CardItem>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </CardBody>
        </CardContainer>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-10 bg-teal-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>


<div className="flex items-center justify-center gap-6 mt-10">
  
  {/* PREV */}
  <button
    onClick={handlePrev}
    className="group flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white shadow hover:bg-teal-50 transition"
  >
    <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-teal-600 transition" />
  </button>

  {/* NEXT */}
  <button
    onClick={handleNext}
    className="group flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white shadow hover:bg-teal-50 transition"
  >
    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-teal-600 transition" />
  </button>

</div>

        
      </div>
    </section>
  );
}
