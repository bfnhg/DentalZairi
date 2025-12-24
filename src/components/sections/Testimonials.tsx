import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card3D } from '../ui/Card3D';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: { fr: 'Sarah Bennani', ar: 'سارة بنّاني' },
      text: {
        fr: "Une expérience exceptionnelle ! Le Dr. Zairi a transformé mon sourire avec des implants qui ont l'air parfaitement naturels. L'équipe est professionnelle et très attentionnée.",
        ar: 'تجربة استثنائية! د. الزيري حوّل ابتسامتي بزراعة أسنان تبدو طبيعية تمامًا. الفريق محترف ومتعاون للغاية.',
      },
      rating: 5,
    },
    {
      name: { fr: 'Mohammed Alami', ar: 'محمد العلمي' },
      text: {
        fr: "Je recommande vivement ce cabinet. Les technologies utilisées sont de pointe et le résultat dépasse mes attentes. Merci Dr. Zairi !",
        ar: 'أوصي بشدة بهذه العيادة. التقنيات المستخدمة متطورة والنتيجة تفوق توقعاتي. شكرا د. الزيري!',
      },
      rating: 5,
    },
    {
      name: { fr: 'Amina Rifi', ar: 'أمينة الريفي' },
      text: {
        fr: "Un service impeccable du début à la fin. L'intervention était indolore et la guérison très rapide. Je suis ravie de mon nouveau sourire !",
        ar: 'خدمة لا تشوبها شائبة من البداية إلى النهاية. كان التدخل غير مؤلم والشفاء سريع جدًا. أنا سعيدة جدًا بابتسامتي الجديدة!',
      },
      rating: 5,
    },
    {
      name: { fr: 'Karim Idrissi', ar: 'كريم الإدريسي' },
      text: {
        fr: "Le Dr. Zairi est un véritable artiste. Mes facettes sont magnifiques et personne ne peut dire qu'elles ne sont pas naturelles. Merci infiniment !",
        ar: 'د. الزيري فنان حقيقي. القشور الخاصة بي رائعة ولا أحد يستطيع أن يقول أنها ليست طبيعية. شكرا جزيلا!',
      },
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-b from-[#0F0F0F] to-[#1E1E1E] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0F4C5C] rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials_title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('testimonials_subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card3D>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#1E1E1E] to-[#0F0F0F] border border-[#0F4C5C]/30 shadow-[0_0_40px_rgba(15,76,92,0.3)]"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-[#0F4C5C] fill-[#0F4C5C] mx-1" />
                  </motion.div>
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-300 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text[language]}"
              </p>

              <div className="text-center">
                <h4 className="text-xl font-bold text-white">
                  {testimonials[currentIndex].name[language]}
                </h4>
              </div>
            </motion.div>
          </Card3D>

          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#0F4C5C] w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
