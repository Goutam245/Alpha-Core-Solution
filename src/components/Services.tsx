import { useEffect, useRef, useState } from 'react';
import { Scan, Camera, Radio, Fingerprint, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';


// Import images
import metalDetectionImg from '@/assets/services/metal-detection.jpg';
import cctvImg from '@/assets/services/cctv-surveillance.jpg';
import xrayImg from '@/assets/services/xray-screening.jpg';
import accessControlImg from '@/assets/services/access-control.jpg';

const Services = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isArabic = language === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: isArabic ? 'جميع الخدمات' : 'All Services' },
    { id: 'security', label: isArabic ? 'الأمن المادي' : 'Physical Security' },
    { id: 'it', label: isArabic ? 'تقنية المعلومات' : 'IT Solutions' },
  ];

  const services = [
    {
      slug: 'metal-detection',
      icon: Scan,
      title: t('services.metal.title'),
      desc: t('services.metal.desc'),
      image: metalDetectionImg,
      category: 'security',
      tags: isArabic 
        ? ['متعددة المناطق', 'تحليل AI', 'تنبيهات فورية'] 
        : ['Multi-zone', 'AI Analysis', 'Real-time Alerts'],
    },
    {
      slug: 'cctv',
      icon: Camera,
      title: t('services.cctv.title'),
      desc: t('services.cctv.desc'),
      image: cctvImg,
      category: 'security',
      tags: isArabic 
        ? ['دقة 4K+', 'التعرف على الوجوه', 'التخزين السحابي'] 
        : ['4K+ Resolution', 'Facial Recognition', 'Cloud Storage'],
    },
    {
      slug: 'xray',
      icon: Radio,
      title: t('services.xray.title'),
      desc: t('services.xray.desc'),
      image: xrayImg,
      category: 'security',
      tags: isArabic 
        ? ['ثنائية الطاقة', 'كشف المتفجرات', 'جاهزية الشبكة'] 
        : ['Dual-energy', 'Explosive Detection', 'Network Ready'],
    },
    {
      slug: 'access-control',
      icon: Fingerprint,
      title: t('services.access.title'),
      desc: t('services.access.desc'),
      image: accessControlImg,
      category: 'security',
      tags: isArabic 
        ? ['القياسات الحيوية', 'RFID/NFC', 'بيانات الهاتف'] 
        : ['Biometrics', 'RFID/NFC', 'Mobile Credentials'],
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-background bg-acs-pattern"
    >
      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isArabic ? 'font-arabic' : ''}`}
          >
            {t('services.eyebrow')}
          </span>
          <h2
            className={`text-section font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isArabic ? 'font-arabic' : 'font-display'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {t('services.headline')}
          </h2>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex justify-center gap-2 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'gradient-primary text-primary-foreground shadow-glow'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              } ${isArabic ? 'font-arabic' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border/30 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold text-foreground mb-3 ${isArabic ? 'font-arabic' : ''}`}>
                  {service.title}
                </h3>
                <p className={`text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 ${isArabic ? 'font-arabic' : ''}`}>
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full ${isArabic ? 'font-arabic' : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/services/${service.slug}`}
                  className={`inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all ${isArabic ? 'font-arabic' : ''}`}
                >
                  {t('services.learnMore')}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
