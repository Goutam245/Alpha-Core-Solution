import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Users, Flag, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import cctvImage from '@/assets/services/cctv-surveillance.jpg';

const Mission = () => {
  const { t, language } = useLanguage();
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

  const values = [
    {
      icon: Lightbulb,
      title: t('mission.value1.title'),
      desc: t('mission.value1.desc'),
    },
    {
      icon: Users,
      title: t('mission.value2.title'),
      desc: t('mission.value2.desc'),
    },
    {
      icon: Flag,
      title: t('mission.value3.title'),
      desc: t('mission.value3.desc'),
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative bg-gradient-to-b from-background via-secondary/10 to-background bg-acs-pattern"
    >
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={cctvImage} 
                alt="Security Camera" 
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge - 15+ Years */}
            <div className="absolute -bottom-6 left-6 lg:-left-6 bg-card border border-border rounded-2xl p-4 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">15+</span>
                </div>
                <div>
                  <p className={`text-sm font-medium text-foreground ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'سنوات من التميز' : 'Years of Excellence'}
                  </p>
                </div>
              </div>
            </div>

            {/* 24/7 Badge */}
            <div className="absolute -top-4 right-6 lg:-right-6 gradient-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-glow">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-bold">24/7</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span
              className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${isArabic ? 'font-arabic' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              {t('mission.eyebrow')}
            </span>

            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${isArabic ? 'font-arabic' : 'font-display'}`}
              style={{ transitionDelay: '300ms' }}
            >
              {isArabic ? (
                <>
                  حماية ما هو الأهم
                  <br />
                  <span className="gradient-text">من خلال الابتكار والتميز</span>
                </>
              ) : (
                <>
                  Protecting What
                  <br />
                  Matters Most
                  <br />
                  <span className="gradient-text">Through Innovation & Excellence</span>
                </>
              )}
            </h2>

            <div
              className={`space-y-4 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className={`text-muted-foreground leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                {t('mission.body')}
              </p>
              <p className={`text-muted-foreground leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                {t('mission.body2')}
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`glass-card p-5 card-hover transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className={`font-semibold text-foreground mb-1 ${isArabic ? 'font-arabic' : ''}`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
