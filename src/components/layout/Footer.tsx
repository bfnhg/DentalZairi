import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#0F0F0F] border-t border-[#0F4C5C]/30 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0F4C5C] to-transparent animate-pulse" />

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('brand')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('tagline')}
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0F4C5C]/20 hover:bg-[#0F4C5C]/40 flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5 text-[#0F4C5C]" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0F4C5C]/20 hover:bg-[#0F4C5C]/40 flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 text-[#0F4C5C]" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0F4C5C]/20 hover:bg-[#0F4C5C]/40 flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-[#0F4C5C]" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['nav_home', 'nav_about', 'nav_services', 'nav_contact'].map((key) => (
                <li key={key}>
                  <a
                    href={`#${key.replace('nav_', '')}`}
                    className="text-gray-400 hover:text-[#0F4C5C] transition-colors duration-300"
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('contact_address_line')}</li>
              <li>Tel: 0537 37 11 13</li>
              <li>Email: contact@dentalzairi.ma</li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-[#0F4C5C]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 {t('brand')}. {t('footer_rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#0F4C5C] transition-colors duration-300">
                {t('footer_privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0F4C5C] transition-colors duration-300">
                {t('footer_terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
