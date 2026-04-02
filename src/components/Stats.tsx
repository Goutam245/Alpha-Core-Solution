import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Stats = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isArabic = language === 'ar';

  const stats = [
    { value: 15, suffix: '+', label: isArabic ? 'سنوات الريادة' : 'Years Leading' },
    { value: 100, suffix: ',000+', label: isArabic ? 'الأجهزة الأمنية' : 'Security Devices' },
    { value: 98, suffix: '%', label: isArabic ? 'رضا العملاء' : 'Client Satisfaction' },
    { value: 150, suffix: '+', label: isArabic ? 'المشاريع المنجزة' : 'Projects Completed' },
    { value: 24, suffix: '/7', label: isArabic ? 'الدعم المتواصل' : 'Continuous Support' },
    { value: 190, suffix: '+', label: isArabic ? 'الشركاء' : 'Partners' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-r from-secondary/30 via-card to-secondary/30 bg-acs-pattern"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <h2
          className={`text-section font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isArabic ? 'font-arabic' : 'font-display'}`}
        >
          {isArabic ? 'سجل حافل بالإنجازات' : 'Proven Track Record'}
        </h2>

        {/* Stats Grid - 6 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-block mb-3">
                <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                  {counts[index]}
                  <span className="text-xl md:text-2xl">{stat.suffix}</span>
                </span>
              </div>
              <p className={`text-sm text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
