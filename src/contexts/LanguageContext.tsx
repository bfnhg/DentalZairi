import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    brand: 'DENTAL ZAIRI',
    tagline: "Centre d'implantologie et d'esthétique",
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_services: 'Services',
    nav_testimonials: 'Témoignages',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    hero_title: 'Votre sourire, notre passion',
    hero_subtitle: 'Excellence en implantologie et esthétique dentaire',
    hero_cta_appointment: 'Prendre rendez-vous',
    hero_cta_emergency: 'Urgence dentaire',
    about_title: 'Dr. Karim Zairi',
    about_subtitle: 'Expert en implantologie et esthétique dentaire',
    about_description: 'Avec plus de 15 ans d\'expérience, le Dr. Karim Zairi est un pionnier dans le domaine de l\'implantologie dentaire au Maroc. Diplômé des meilleures universités européennes, il combine expertise technique et approche artistique pour offrir des sourires naturels et harmonieux.',
    about_experience: 'Années d\'expérience',
    about_patients: 'Patients satisfaits',
    about_implants: 'Implants réalisés',
    services_title: 'Nos Services',
    services_subtitle: 'Excellence et innovation pour votre sourire',
    service_surgery: 'Chirurgie dentaire',
    service_surgery_desc: 'Interventions chirurgicales avancées avec précision et sécurité',
    service_implant: 'Implantologie',
    service_implant_desc: 'Implants dentaires de dernière génération pour un sourire permanent',
    service_aesthetic: 'Esthétique dentaire',
    service_aesthetic_desc: 'Embellissement du sourire avec des techniques innovantes',
    service_prosthesis: 'Prothèses',
    service_prosthesis_desc: 'Prothèses sur mesure pour un confort optimal',
    service_conservative: 'Soins conservateurs',
    service_conservative_desc: 'Préservation et restauration de vos dents naturelles',
    testimonials_title: 'Témoignages',
    testimonials_subtitle: 'L\'expérience de nos patients',
    faq_title: 'Questions fréquentes',
    faq_subtitle: 'Tout ce que vous devez savoir',
    faq_q1: 'Les implants dentaires sont-ils douloureux ?',
    faq_a1: 'Non, l\'intervention se fait sous anesthésie locale. Vous ne ressentez aucune douleur pendant l\'opération. Un léger inconfort peut survenir après, facilement géré avec des antalgiques simples.',
    faq_q2: 'Combien de temps dure un implant dentaire ?',
    faq_a2: 'Avec un entretien approprié, les implants dentaires peuvent durer toute une vie. Nos implants ont un taux de succès de plus de 95% sur 20 ans.',
    faq_q3: 'Quel est le délai pour une procédure complète ?',
    faq_a3: 'Le processus complet prend généralement 3 à 6 mois, incluant la période d\'ostéointégration. Dans certains cas, nous proposons des solutions de mise en charge immédiate.',
    faq_q4: 'Les soins esthétiques abîment-ils les dents ?',
    faq_a4: 'Non, nos techniques modernes comme les facettes ultra-fines préservent au maximum vos dents naturelles tout en transformant votre sourire.',
    faq_q5: 'Acceptez-vous les assurances ?',
    faq_a5: 'Oui, nous travaillons avec la plupart des compagnies d\'assurance. Notre équipe vous aide dans vos démarches de remboursement.',
    emergency_title: 'Urgence Dentaire',
    emergency_subtitle: 'Nous sommes là pour vous 24/7',
    emergency_description: 'En cas d\'urgence dentaire, notre équipe est disponible pour vous prendre en charge rapidement et soulager votre douleur.',
    emergency_call: 'Appeler maintenant',
    emergency_available: 'Disponible 24h/24, 7j/7',
    contact_title: 'Contactez-nous',
    contact_subtitle: 'Prenez rendez-vous dès aujourd\'hui',
    contact_name: 'Nom complet',
    contact_email: 'Email',
    contact_phone: 'Téléphone',
    contact_message: 'Message',
    contact_send: 'Envoyer',
    contact_address: 'Adresse',
    contact_address_line: 'Rue Oued Fes, lot. Fadwa, Kenitra, Maroc',
    footer_rights: 'Tous droits réservés',
    footer_privacy: 'Politique de confidentialité',
    footer_terms: 'Conditions d\'utilisation',
  },
  ar: {
    brand: 'DENTAL ZAIRI',
    tagline: 'مركز زراعة الأسنان والتجميل',
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_services: 'الخدمات',
    nav_testimonials: 'الشهادات',
    nav_faq: 'الأسئلة الشائعة',
    nav_contact: 'اتصل بنا',
    hero_title: 'ابتسامتك، شغفنا',
    hero_subtitle: 'التميز في زراعة الأسنان والتجميل',
    hero_cta_appointment: 'احجز موعد',
    hero_cta_emergency: 'طوارئ الأسنان',
    about_title: 'د. كريم الزيري',
    about_subtitle: 'خبير في زراعة الأسنان والتجميل',
    about_description: 'مع أكثر من 15 عامًا من الخبرة، د. كريم الزيري رائد في مجال زراعة الأسنان في المغرب. متخرج من أفضل الجامعات الأوروبية، يجمع بين الخبرة التقنية والنهج الفني لتقديم ابتسامات طبيعية ومتناسقة.',
    about_experience: 'سنوات من الخبرة',
    about_patients: 'مريض راضٍ',
    about_implants: 'عملية زراعة',
    services_title: 'خدماتنا',
    services_subtitle: 'التميز والابتكار لابتسامتك',
    service_surgery: 'جراحة الأسنان',
    service_surgery_desc: 'تدخلات جراحية متقدمة بدقة وأمان',
    service_implant: 'زراعة الأسنان',
    service_implant_desc: 'زراعة أسنان من أحدث جيل لابتسامة دائمة',
    service_aesthetic: 'تجميل الأسنان',
    service_aesthetic_desc: 'تجميل الابتسامة بتقنيات مبتكرة',
    service_prosthesis: 'التركيبات',
    service_prosthesis_desc: 'تركيبات مخصصة لراحة مثالية',
    service_conservative: 'العلاجات التحفظية',
    service_conservative_desc: 'الحفاظ على أسنانك الطبيعية واستعادتها',
    testimonials_title: 'الشهادات',
    testimonials_subtitle: 'تجربة مرضانا',
    faq_title: 'الأسئلة الشائعة',
    faq_subtitle: 'كل ما تحتاج إلى معرفته',
    faq_q1: 'هل زراعة الأسنان مؤلمة؟',
    faq_a1: 'لا، يتم التدخل تحت التخدير الموضعي. لا تشعر بأي ألم أثناء العملية. قد يحدث إزعاج خفيف بعد ذلك، يمكن التحكم فيه بسهولة بمسكنات بسيطة.',
    faq_q2: 'كم تدوم زراعة الأسنان؟',
    faq_a2: 'مع العناية المناسبة، يمكن أن تدوم زراعة الأسنان مدى الحياة. لدى زراعتنا معدل نجاح أكثر من 95٪ على مدى 20 عامًا.',
    faq_q3: 'ما هي المدة الزمنية للإجراء الكامل؟',
    faq_a3: 'تستغرق العملية الكاملة عادة من 3 إلى 6 أشهر، بما في ذلك فترة الاندماج العظمي. في بعض الحالات، نقدم حلول التحميل الفوري.',
    faq_q4: 'هل العلاجات التجميلية تضر الأسنان؟',
    faq_a4: 'لا، تقنياتنا الحديثة مثل القشور الرقيقة جدًا تحافظ على أسنانك الطبيعية قدر الإمكان مع تحويل ابتسامتك.',
    faq_q5: 'هل تقبلون التأمين؟',
    faq_a5: 'نعم، نعمل مع معظم شركات التأمين. يساعدك فريقنا في إجراءات السداد.',
    emergency_title: 'طوارئ الأسنان',
    emergency_subtitle: 'نحن هنا من أجلك 24/7',
    emergency_description: 'في حالة طوارئ الأسنان، فريقنا متاح لرعايتك بسرعة وتخفيف ألمك.',
    emergency_call: 'اتصل الآن',
    emergency_available: 'متاح 24/7',
    contact_title: 'اتصل بنا',
    contact_subtitle: 'احجز موعدك اليوم',
    contact_name: 'الاسم الكامل',
    contact_email: 'البريد الإلكتروني',
    contact_phone: 'الهاتف',
    contact_message: 'الرسالة',
    contact_send: 'إرسال',
    contact_address: 'العنوان',
    contact_address_line: 'شارع وادي فاس، حي الفضوى، القنيطرة، المغرب',
    footer_rights: 'جميع الحقوق محفوظة',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'شروط الاستخدام',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'ar' : 'fr'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
