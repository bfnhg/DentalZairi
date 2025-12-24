import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Phone, Clock } from 'lucide-react';

export function Emergency() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0F0F0F] via-[#1E1E1E] to-[#0F0F0F] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600 opacity-10 rounded-full filter blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0F4C5C] opacity-10 rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#1E1E1E] to-[#0F0F0F] border-2 border-red-600/30 shadow-[0_0_60px_rgba(220,38,38,0.3)]"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-600/20 flex items-center justify-center"
            >
              <Phone className="w-12 h-12 text-red-600" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('emergency_title')}
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              {t('emergency_subtitle')}
            </p>

            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              {t('emergency_description')}
            </p>

            <motion.a
              href="tel:+212537371113"
              className="inline-flex items-center space-x-3 px-12 py-5 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-xl shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_rgba(220,38,38,0.8)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
              <span>{t('emergency_call')}</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex items-center justify-center space-x-2 text-gray-400"
            >
              <Clock className="w-5 h-5" />
              <span>{t('emergency_available')}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
