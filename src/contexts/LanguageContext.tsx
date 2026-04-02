import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
  isRTL: boolean; // Always false - layout is locked to LTR
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.mission': 'Our Mission',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.preheadline': "Kingdom of Saudi Arabia's Trusted Security Partner",
    'hero.headline1': 'Securing Tomorrow,',
    'hero.headline2': 'Today',
    'hero.subheadline': 'Advanced Physical Security Solutions for Critical Infrastructure & Government Entities',
    'hero.description': 'Cutting-edge Metal Detection | AI-Powered CCTV | X-Ray Technology | Biometric Access Control',
    'hero.cta.primary': 'Explore Our Solutions',
    'hero.cta.secondary': 'Request Consultation',
    'hero.trust': '15+ Years Excellence | Saudi Government Approved',
    
    // Trust Indicators
    'trust.years': '15+ Years Experience',
    'trust.iso': 'ISO 9001 Certified',
    'trust.projects': '100+ Saudi Projects',
    'trust.satisfaction': '98% Client Satisfaction',
    'trust.support': '24/7 Security Support',
    'trust.approved': 'Government Approved',
    
    // Mission
    'mission.eyebrow': 'OUR MISSION',
    'mission.headline': 'Protecting What Matters Most Through Innovation & Excellence',
    'mission.body': "At Alpha Core Solutions, we provide most security and IT products. We've been the trusted partner for Saudi Arabia's government ministries.",
    'mission.body2': "Our mission is simple yet profound: to provide world-class physical security solutions that give our clients absolute peace of mind. Through cutting-edge technology, expert deployment, and 24/7 support, we ensure that every person, asset, and facility under our protection is secured to the highest international standards.",
    'mission.commitment': "We are committed to innovation, reliability, and the safety of the Kingdom.",
    'mission.value1.title': 'Innovation First',
    'mission.value1.desc': 'Adopting latest security tech globally',
    'mission.value2.title': 'Client Trust',
    'mission.value2.desc': 'Building lasting partnerships',
    'mission.value3.title': 'Saudi Excellence',
    'mission.value3.desc': 'Proudly serving the Kingdom',
    
    // Services
    'services.eyebrow': 'OUR SERVICES',
    'services.headline': 'Comprehensive Security Solutions',
    'services.subheadline': 'Advanced security and IT solutions',
    
    'services.military.title': 'Military & Tactical Clothing',
    'services.military.desc': 'Premium military uniforms, tactical gear, and specialized clothing for security personnel, military units, and law enforcement agencies. Durable, comfortable, and compliant with Saudi military standards.',
    'services.military.clients': 'Saudi military compliant',
    
    'services.servers.title': 'Servers & PC Systems',
    'services.servers.desc': 'Enterprise-grade servers, workstations, and personal computers for government and corporate use. High-performance hardware with complete setup, configuration, and ongoing technical support.',
    'services.servers.clients': 'Enterprise solutions',
    
    'services.printers.title': 'Printers & Accessories',
    'services.printers.desc': 'Complete printing solutions including laser printers, multifunction devices, scanners, and genuine consumables. From desktop printers to high-volume production systems for all business needs.',
    'services.printers.clients': 'Full product range',
    
    'services.metal.title': 'Advanced Metal Detection Systems',
    'services.metal.desc': 'State-of-the-art walk-through gates, handheld scanners, and under-vehicle inspection systems. Trusted by international airports, government facilities, and critical infrastructure across Saudi Arabia.',
    'services.metal.clients': 'Deployed in 40+ Saudi facilities',
    
    'services.cctv.title': 'AI-Powered CCTV Surveillance',
    'services.cctv.desc': 'Next-generation surveillance systems with artificial intelligence, facial recognition, behavior analysis, and predictive threat detection. 24/7 monitoring with instant alerts.',
    'services.cctv.clients': '500,000+ cameras deployed',
    
    'services.xray.title': 'X-Ray Screening Solutions',
    'services.xray.desc': 'High-resolution baggage and cargo screening for airports, seaports, and high-security checkpoints. Advanced threat detection with operator-friendly interfaces.',
    'services.xray.clients': 'International aviation compliant',
    
    'services.access.title': 'Intelligent Access Control',
    'services.access.desc': 'Comprehensive access management with biometric authentication, smart cards, mobile credentials, and time-attendance integration. Control who enters, when, and where.',
    'services.access.clients': 'Seamless integration',
    
    'services.learnMore': 'Learn More',
    
    // Stats
    'stats.headline': 'Numbers That Speak',
    'stats.years': 'Years',
    'stats.yearsLabel': 'Industry Leadership',
    'stats.devices': 'Devices',
    'stats.devicesLabel': 'Security Devices Deployed',
    'stats.satisfaction': '%',
    'stats.satisfactionLabel': 'Client Satisfaction Rate',
    'stats.projects': '+',
    'stats.projectsLabel': 'Major Projects Completed',
    'stats.support': '/7',
    'stats.supportLabel': 'Monitoring & Support',
    'stats.certified': 'Excellence',
    'stats.certifiedLabel': 'Certified Excellence',
    
    // Clients
    'clients.eyebrow': 'TRUSTED BY',
    'clients.headline': 'Proudly Serving the Kingdom',
    'clients.subheadline': 'Trusted by Leading Saudi Institutions Across Critical Sectors',
    'clients.government': 'Government & Ministries',
    'clients.governmentDesc': 'Protecting sensitive government facilities and personnel',
    'clients.aviation': 'Aviation & Airports',
    'clients.aviationDesc': 'Securing international and domestic aviation hubs',
    'clients.healthcare': 'Healthcare Institutions',
    'clients.healthcareDesc': 'Safeguarding hospitals and medical facilities',
    'clients.energy': 'Energy & Petrochemicals',
    'clients.energyDesc': 'Defending critical national infrastructure',
    'clients.education': 'Education & Universities',
    'clients.educationDesc': 'Campus security for academic institutions',
    'clients.hospitality': 'Hospitality & Events',
    'clients.hospitalityDesc': 'VIP protection and event security management',
    'clients.secured': 'Facilities Secured',
    
    // Testimonials
    'testimonials.eyebrow': 'SUCCESS STORIES',
    'testimonials.headline': 'What Our Clients Say',
    
    // Contact
    'contact.eyebrow': 'GET IN TOUCH',
    'contact.headline': "Let's Discuss Your Security Needs",
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company/Organization',
    'contact.service': 'Service Interest',
    'contact.message': 'Project Details',
    'contact.messagePlaceholder': 'Tell us about your security requirements...',
    'contact.consent': 'I agree to privacy policy and terms',
    'contact.submit': 'Request Consultation',
    'contact.success': 'Thank you! Our team will contact you within 24 hours.',
    'contact.phone.label': 'Phone',
    'contact.email.label': 'Email',
    'contact.address.label': 'Address',
    'contact.hours.label': 'Business Hours',
    'contact.address.value': 'Riyadh, Kingdom of Saudi Arabia',
    'contact.hours.value': 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    'contact.emergency': 'Emergency Support: Available 24/7',
    
    // Footer
    'footer.tagline': 'Securing Tomorrow, Today',
    'footer.description': 'Leading provider of advanced physical security solutions in the Kingdom of Saudi Arabia.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Stay Updated',
    'footer.newsletterPlaceholder': 'Enter your email',
    'footer.subscribe': 'Subscribe',
    'footer.rights': '© 2026 Alpha Core Solutions Est. All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.serving': 'Proudly Serving the Kingdom of Saudi Arabia',
    
    // Navbar
    'navbar.trustBadge': 'KSA Trusted Partner',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.mission': 'مهمتنا',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.partners': 'شركاؤنا',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.preheadline': 'الشريك الأمني الموثوق للمملكة العربية السعودية',
    'hero.headline1': 'تأمين اليوم',
    'hero.headline2': 'والغد',
    'hero.subheadline': 'حلول الأمن المادي المتقدمة للبنية التحتية الحيوية والجهات الحكومية',
    'hero.description': 'أحدث تقنيات الكشف عن المعادن / كاميرات مراقبة مدعومة بالذكاء الاصطناعي / تقنيات الأشعة السينية / أنظمة التحكم في الدخول باستخدام القياسات الحيوية',
    'hero.cta.primary': 'استكشف حلولنا',
    'hero.cta.secondary': 'اطلب استشارة',
    'hero.trust': 'أكثر من 15 عاماً من التميز | معتمد حكومياً',
    
    // Trust Indicators
    'trust.years': 'أكثر من 15 عاماً خبرة',
    'trust.iso': 'حاصلة على شهادة ISO 9001',
    'trust.projects': 'أكثر من 100 مشروع سعودي',
    'trust.satisfaction': '98% رضا العملاء',
    'trust.support': 'دعم أمني 24/7',
    'trust.approved': 'معتمد حكومياً',
    
    // Mission
    'mission.eyebrow': 'مهمتنا',
    'mission.headline': 'نحمي ما يهم أكثر من خلال الابتكار والتميز',
    'mission.body': 'حيث نُقدم مجموعة واسعة من منتجات الأمن وتقنية المعلومات، ولطالما كنا الشريك الموثوق به للوزارات الحكومية في المملكة العربية السعودية.',
    'mission.body2': 'مهمتنا بسيطة في صياغتها، عميقة في جوهرها: حيث نقدم حلول أمن مادي عالمية المستوى تمنح عملاءنا راحة بال تامة. ومن خلال أحدث التقنيات والتنفيذ الاحترافي والدعم المتواصل على مدار الساعة، كما نضمن حماية كل فرد وممتلكات ومنشأة تقع ضمن نطاق مسؤوليتنا وفق لأعلى المعايير الدولية.',
    'mission.commitment': 'نحن ملتزمون الابتكار، والموثوقية وتعزيز أمن وسلامة المملكة.',
    'mission.value1.title': 'الابتكار أولاً',
    'mission.value1.desc': 'نتبنى أحدث التقنيات الأمنية على مستوى العالم',
    'mission.value2.title': 'ثقة العملاء',
    'mission.value2.desc': 'بناء شراكات مستدامة وطويلة الأمد',
    'mission.value3.title': 'التميّز السعودي',
    'mission.value3.desc': 'خدمة المملكة العربية السعودية بكل فخر',
    
    // Services
    'services.eyebrow': 'خدماتنا',
    'services.headline': 'حلول أمنية شاملة',
    'services.subheadline': 'حلول أمنية وتقنية معلومات متقدمة',
    
    'services.military.title': 'الملابس العسكرية والتكتيكية',
    'services.military.desc': 'أزياء عسكرية عالية الجودة ومعدات تكتيكية وملابس مخصصة لأفراد الأمن والوحدات العسكرية والجهات الأمنية. أزياء سميكة ومريحة ومتوافقة مع المعايير العسكرية السعودية.',
    'services.military.clients': 'متوافقة مع المعايير العسكرية السعودية',
    
    'services.servers.title': 'أنظمة الخوادم والحواسيب Servers & PC Systems',
    'services.servers.desc': 'خوادم ومحطات عمل وحواسيب شخصية بمستوى المؤسسات، مخصصة للاستخدام الحكومي والتجاري. أجهزة متطورة مع إعداد وتكوين كامل ودعم فني مستمر.',
    'services.servers.clients': 'حلول مؤسسية',
    
    'services.printers.title': 'الطابعات والملحقات',
    'services.printers.desc': 'حلول طباعة متكاملة تشمل الطابعات الليزرية والأجهزة متعددة الوظائف والماسحات الضوئية والمواد الاستهلاكية الأصلية. من الطابعات المكتبية الى أنظمة الإنتاج عالية الحجم لتلبية جميع احتياجات الأعمال.',
    'services.printers.clients': 'جميع المنتجات متوفرة',
    
    'services.metal.title': 'أنظمة متقدمة للكشف عن المعادن',
    'services.metal.desc': 'بوابات مرور متطورة للمُشاة، وأجهزة مسح ضوئي محمولة وأنظمة فحص أسفل المركبات. موثوقة لدى المطارات الدولية والمنشآت الحكومية والبنية التحتية الحيوية في جميع أنحاء المملكة العربية السعودية.',
    'services.metal.clients': 'منتشرة في أكثر من 40 منشأة سعودية',
    
    'services.cctv.title': 'كاميرات مراقبة مدعومة بالذكاء الاصطناعي',
    'services.cctv.desc': 'أنظمة مراقبة من الجيل الجديد مدعومة بالذكاء الاصطناعي والتعرف على الوجوه وتحليل السلوك والكشف المسبق عن التهديدات. مراقبة على مدار الساعة 24/7 مع تنبيهات فورية.',
    'services.cctv.clients': 'نشر أكثر من 500,000 كاميرا مُثبّتة',
    
    'services.xray.title': 'حلول فحص بالأشعة السينية X-Ray',
    'services.xray.desc': 'فحص عالي الدقة للأمتعة والبضائع في المطارات والموانئ البحرية ونقاط التفتيش الأمنية المُشددة. كشف متقدم للتهديدات مع واجهات تشغيل سهلة الاستخدام.',
    'services.xray.clients': 'متوافقة مع معايير الطيران الدولية',
    
    'services.access.title': 'أنظمة التحكم الذكية في الوصول',
    'services.access.desc': 'إدارة شاملة للدخول باستخدام المصادقة البيومترية، والبطاقات الذكية، وبيانات الاعتماد عبر الهاتف المحمول، وتكامل نظام الحضور والانصراف. وكذلك تحكّم بمن يدخل ومتى وأين.',
    'services.access.clients': 'تكامل سلس مع الأنظمة الأخرى',
    
    'services.learnMore': 'اعرف المزيد',
    
    // Stats
    'stats.headline': 'الأرقام تتحدث عن نفسها',
    'stats.years': 'سنة',
    'stats.yearsLabel': 'رواد المجال لأكثر من 15 سنة في التصنيع',
    'stats.devices': 'جهاز',
    'stats.devicesLabel': 'أكثر من 100,000 جهاز أمني',
    'stats.satisfaction': '%',
    'stats.satisfactionLabel': 'معدل رضا العملاء 98%',
    'stats.projects': '+',
    'stats.projectsLabel': 'أكثر من 150 مشروع رئيسي مُنجز',
    'stats.support': '/7',
    'stats.supportLabel': 'مراقبة ودعم متواصل على مدار 24/7',
    'stats.certified': 'الموثوقية',
    'stats.certifiedLabel': 'الموثوقية',
    
    // Clients
    'clients.eyebrow': 'موثوق بنا من قبل',
    'clients.headline': 'نفخر بخدمة المملكة العربية السعودية',
    'clients.subheadline': 'موثوق بنا من قبل أبرز المؤسسات السعودية في القطاعات الحيوية',
    'clients.government': 'الجهات الحكومية والوزارات',
    'clients.governmentDesc': 'حماية المنشآت الحكومية الحساسة والأفراد',
    'clients.aviation': 'الطيران والمطارات',
    'clients.aviationDesc': 'تأمين مراكز الطيران الدولية والمحلية',
    'clients.healthcare': 'المراكز الصحية',
    'clients.healthcareDesc': 'حماية المستشفيات والمرافق الطبية',
    'clients.energy': 'الطاقة والبتروكيماويات',
    'clients.energyDesc': 'حماية البنية التحتية الوطنية الحيوية',
    'clients.education': 'التعليم والجامعات',
    'clients.educationDesc': 'أمن الحرم الجامعي للمؤسسات الأكاديمية',
    'clients.hospitality': 'الضيافة والفعاليات',
    'clients.hospitalityDesc': 'حماية الشخصيات المهمة وإدارة أمن الفعاليات',
    'clients.secured': 'أكثر من 100 منشأة مؤمنة',
    
    // Testimonials
    'testimonials.eyebrow': 'قصص النجاح',
    'testimonials.headline': 'ماذا يقول عملاؤنا',
    
    // Contact
    'contact.eyebrow': 'تواصل معنا',
    'contact.headline': 'تواصل معنا لنُناقش احتياجاتك الأمنية',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.company': 'الشركة/المؤسسة',
    'contact.service': 'الخدمة المطلوبة',
    'contact.message': 'تفاصيل المشروع',
    'contact.messagePlaceholder': 'أخبرنا عن متطلباتك الأمنية...',
    'contact.consent': 'أوافق على سياسة الخصوصية والشروط',
    'contact.submit': 'اطلب استشارة',
    'contact.success': 'شكراً لك! سيتواصل معك فريقنا خلال 24 ساعة.',
    'contact.phone.label': 'الهاتف',
    'contact.email.label': 'البريد الإلكتروني',
    'contact.address.label': 'العنوان',
    'contact.hours.label': 'ساعات العمل',
    'contact.address.value': 'الرياض، المملكة العربية السعودية',
    'contact.hours.value': 'الأحد - الخميس: 8:00 صباحاً - 6:00 مساءً',
    'contact.emergency': 'الدعم الطارئ: متاح 24/7',
    
    // Footer
    'footer.tagline': 'تأمين اليوم والغد',
    'footer.description': 'الشركة الرائدة في تقديم حلول الأمن المادي المتقدمة في المملكة العربية السعودية.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.newsletter': 'ابق على اطلاع',
    'footer.newsletterPlaceholder': 'أدخل بريدك الإلكتروني',
    'footer.subscribe': 'اشترك',
    'footer.rights': '© 2026 ألفا كور سوليوشنز. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.serving': 'نفخر بخدمة المملكة العربية السعودية',
    
    // Navbar
    'navbar.trustBadge': 'شريك موثوق',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  // IMPORTANT: Do NOT modify any CSS or layout properties
  // This is a pure text-replacement system
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // isRTL is always false - layout is locked to LTR, only text changes
  const isRTL = false;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
