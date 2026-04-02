import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Partners = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isArabic = language === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Using text-based partner logos for a clean professional look
  const partners = [
    { name: 'Dell', category: 'IT Infrastructure' },
    { name: 'HP', category: 'Computing' },
    { name: 'Lenovo', category: 'Enterprise' },
    { name: 'Canon', category: 'Printing' },
    { name: 'Xerox', category: 'Solutions' },
    { name: 'Hikvision', category: 'CCTV' },
    { name: 'Dahua', category: 'Security' },
    { name: 'ZKTeco', category: 'Access Control' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 relative overflow-hidden bg-secondary/20 bg-acs-pattern"
    >
      <div className="container-premium relative z-10">
        {/* Header */}
        <p
          className={`text-center text-lg text-muted-foreground mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isArabic ? 'font-arabic' : ''}`}
        >
          {isArabic ? 'شراكات مع قادة عالميين لتقديم التميز' : 'Partnering with global names to deliver excellence'}
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`glass-card p-4 text-center transition-all duration-500 hover:bg-secondary/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <p className="font-display font-bold text-lg text-foreground">{partner.name}</p>
              <p className="text-xs text-muted-foreground">{partner.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
