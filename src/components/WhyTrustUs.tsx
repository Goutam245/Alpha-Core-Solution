import { useEffect, useRef, useState } from 'react';
import { Award, Globe, Users, Headphones, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyTrustUs = () => {
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

  const reasons = [
    {
      icon: Award,
      title: isArabic ? '15+ سنة من التميز' : '15+ Years of Excellence',
      desc: isArabic ? 'خبرة رائدة في صناعة الأمن السعودية' : 'Leading expertise in Saudi security industry',
    },
    {
      icon: Globe,
      title: isArabic ? 'جودة عالمية، فهم محلي' : 'Global Quality, Local Understanding',
      desc: isArabic ? 'منتجات عالمية مع خدمة محلية متميزة' : 'World-class products with local service excellence',
    },
    {
      icon: Users,
      title: isArabic ? 'فريق خبراء معتمد' : 'Certified Expert Team',
      desc: isArabic ? 'محترفون مدربون ومعتمدون دولياً' : 'Internationally trained and certified professionals',
    },
    {
      icon: Headphones,
      title: isArabic ? 'دعم على مدار الساعة' : '24/7 Support',
      desc: isArabic ? 'دعم فني متواصل لضمان راحة بالك' : 'Round-the-clock technical support for your peace of mind',
    },
  ];

  const checklist = [
    isArabic ? 'معتمدون من الجهات الحكومية' : 'Government Approved Vendor',
    isArabic ? 'شراكات مع علامات عالمية' : 'Global Brand Partnerships',
    isArabic ? 'حلول متكاملة من البداية للنهاية' : 'End-to-End Solutions',
    isArabic ? 'ضمان وصيانة شاملة' : 'Comprehensive Warranty & Maintenance',
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background bg-acs-pattern"
    >
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            <span
              className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${isArabic ? 'font-arabic' : ''}`}
            >
              {isArabic ? 'لماذا نحن' : 'WHY CHOOSE US'}
            </span>
            
            <h2
              className={`text-section font-bold text-foreground mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${isArabic ? 'font-arabic' : 'font-display'}`}
              style={{ transitionDelay: '100ms' }}
            >
              {isArabic ? (
                <>
                  لماذا تثق السعودية
                  <br />
                  <span className="gradient-text">بألفا كور سوليوشنز</span>
                </>
              ) : (
                <>
                  Why Saudi Arabia
                  <br />
                  Trusts <span className="gradient-text">Alpha Core Solutions</span>
                </>
              )}
            </h2>

            {/* Reasons */}
            <div className="space-y-5">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <reason.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-foreground mb-1 ${isArabic ? 'font-arabic' : ''}`}>
                      {reason.title}
                    </h3>
                    <p className={`text-muted-foreground text-sm ${isArabic ? 'font-arabic' : ''}`}>
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="glass-card p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-14 h-14 text-primary" />
                <div>
                  <h3 className={`text-xl font-bold text-foreground ${isArabic ? 'font-arabic' : 'font-display'}`}>
                    {isArabic ? 'شريكك الموثوق' : 'Your Trusted Partner'}
                  </h3>
                  <p className={`text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'في أمن المملكة' : 'In Saudi Security'}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className={`text-foreground ${isArabic ? 'font-arabic' : ''}`}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Certification Badges */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="px-4 py-2 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-semibold text-foreground">ISO 9001</span>
                  </div>
                  <div className="px-4 py-2 bg-secondary/50 rounded-lg">
                    <span className="text-sm font-semibold text-foreground">{isArabic ? 'معتمد حكومياً' : 'Gov. Certified'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
