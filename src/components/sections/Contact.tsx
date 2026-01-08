import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";


export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Nom: ${formData.name}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/212688175531?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-[#1E1E1E] to-[#0F0F0F] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0F4C5C] rounded-full filter blur-[120px]" />
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
            {t('contact_title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('contact_subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-[#1E1E1E]/50 backdrop-blur-xl border border-[#0F4C5C]/30 shadow-[0_0_40px_rgba(15,76,92,0.2)]">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>

              <div className="space-y-6">
                <motion.a
                  href="https://maps.app.goo.gl/vBDSb5j2P68EDexm9?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0F4C5C]/20 flex items-center justify-center group-hover:bg-[#0F4C5C]/40 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-[#0F4C5C]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Localisation</h4>
                    <p className="text-gray-400">Marrakech, Morocco</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+212688175531"
                  className="flex items-start space-x-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0F4C5C]/20 flex items-center justify-center group-hover:bg-[#0F4C5C]/40 transition-all duration-300">
                    <Phone className="w-6 h-6 text-[#0F4C5C]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Téléphone</h4>
                    <p className="text-gray-400">+212 524 34 33 64</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:Zairi@dentalzairi.com"
                  className="flex items-start space-x-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0F4C5C]/20 flex items-center justify-center group-hover:bg-[#0F4C5C]/40 transition-all duration-300">
                    <Mail className="w-6 h-6 text-[#0F4C5C]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">Zairi@dentalzairi.com</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <motion.div 
              className="h-64 rounded-2xl overflow-hidden border border-[#0F4C5C]/30 shadow-[0_0_40px_rgba(15,76,92,0.2)] bg-gradient-to-br from-[#0F4C5C]/20 via-[#0A262E]/30 to-[#0F0F0F]/40 backdrop-blur-xl flex items-center justify-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Éléments de décor animés */}
              <div className="absolute inset-0 opacity-20">
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0F4C5C] rounded-full filter blur-2xl"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#2fb6d4] rounded-full filter blur-3xl"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                />
              </div>

              {/* Contenu */}
             <motion.div
  className="relative z-10 w-full h-full rounded-xl overflow-hidden border border-[#0F4C5C]/30 shadow-[0_0_40px_rgba(15,76,92,0.2)]"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <iframe
    title="Dental Zairi Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.2717823730886!2d-8.0358621!3d31.6264082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef007c1cceb1%3A0x6cd5ee558aba20e7!2sDENTAL%20ZAIRI!5e0!3m2!1sfr!2sma!4v1767718687711!5m2!1sfr!2sma"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</motion.div>


            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#1E1E1E]/50 backdrop-blur-xl border border-[#0F4C5C]/30 shadow-[0_0_40px_rgba(15,76,92,0.2)]">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('contact_name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F]/50 border border-[#0F4C5C]/30 text-white focus:border-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('contact_email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F]/50 border border-[#0F4C5C]/30 text-white focus:border-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('contact_phone')}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F]/50 border border-[#0F4C5C]/30 text-white focus:border-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('contact_message')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F]/50 border border-[#0F4C5C]/30 text-white focus:border-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]/50 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#0F4C5C] hover:bg-[#0B3C49] text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(15,76,92,0.5)] hover:shadow-[0_0_30px_rgba(15,76,92,0.8)] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('contact_send')}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="https://wa.me/212688175531"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] transition-all duration-300 z-50"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
  <FaWhatsapp className="w-8 h-8 text-white" />
      </motion.a>
    </section>
  );
}
