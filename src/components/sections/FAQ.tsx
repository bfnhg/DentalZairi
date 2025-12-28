"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: t('faq_q1'), answer: t('faq_a1') },
    { question: t('faq_q2'), answer: t('faq_a2') },
    { question: t('faq_q3'), answer: t('faq_a3') },
    { question: t('faq_q4'), answer: t('faq_a4') },
    { question: t('faq_q5'), answer: t('faq_a5') },
  ];

  return (
    <section id="faq" className="relative py-32 bg-[#0A262E] overflow-hidden">
      {/* Fond bleu pétrole uniforme */}
      <div className="absolute inset-0 bg-[#0A262E]" />

      {/* Décor subtil */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2fb6d4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2fb6d4]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre "Questions Populaires" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Questions
            <span className="block text-[#2fb6d4] mt-2">Populaires</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto">
            Tout ce que nos patients nous demandent le plus souvent
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div
                  className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-[#2fb6d4]/50 hover:shadow-2xl hover:shadow-[#2fb6d4]/20"
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white pr-6">
                      {faq.question}
                    </h3>

                    {/* Flèche blanche */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.15, ease: "easeInOut" }}
                    >
                      <ChevronDown size={28} className="text-white" strokeWidth={2} />
                    </motion.div>
                  </button>

                  {/* Réponse - Collapse très rapide */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-2">
                          {/* Séparateur bleu clair */}
                          <div className="h-px bg-gradient-to-r from-[#2fb6d4] via-[#2fb6d4]/50 to-transparent mb-6" />

                          <p className="text-white/80 text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA discret */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 text-lg">
            Une autre question ?{' '}
            <span className="text-[#2fb6d4] font-semibold hover:underline cursor-pointer">
              Contactez-nous
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}