import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Scan, Camera, Radio, Fingerprint, Shield, Server, Printer } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.png';

const heroVideoUrl = '/videos/hero-video.mp4';

const Hero = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    setIsMobile(window.innerWidth < 768);
    
    if (videoRef.current && window.innerWidth >= 768) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isArabic = language === 'ar';

  const serviceIcons = [
    { icon: Scan, label: isArabic ? 'كشف المعادن' : 'Metal Detection' },
    { icon: Camera, label: isArabic ? 'كاميرات المراقبة' : 'CCTV' },
    { icon: Radio, label: isArabic ? 'الأشعة السينية' : 'X-Ray' },
    { icon: Fingerprint, label: isArabic ? 'التحكم بالدخول' : 'Access Control' },
    { icon: Shield, label: isArabic ? 'الملابس التكتيكية' : 'Tactical Gear' },
    { icon: Server, label: isArabic ? 'الخوادم' : 'Servers' },
    { icon: Printer, label: isArabic ? 'الطابعات' : 'Printers' },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {!isMobile && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={heroBg}
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        )}
        
        <img
          src={heroBg}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-500 ${!isMobile && videoLoaded ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-premium text-center pt-32 pb-24">
        {/* Main Headline */}
        <h1 className={`font-display text-hero font-bold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
          <span
            className={`block text-foreground transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {t('hero.headline1')}
          </span>
          <span
            className={`block gradient-text transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {t('hero.headline2')}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isArabic ? 'font-arabic' : ''}`}
          style={{ transitionDelay: '800ms' }}
        >
          {t('hero.subheadline')}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className={`btn-premium text-primary-foreground flex items-center gap-2 group hover:scale-105 ${isArabic ? 'font-arabic' : ''}`}
          >
            <span className="relative z-10">{t('hero.cta.primary')}</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className={`btn-outline-premium flex items-center gap-2 hover:scale-105 ${isArabic ? 'font-arabic' : ''}`}
          >
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Trust Badge */}
        <div
          className={`flex items-center justify-center gap-3 text-sm text-muted-foreground transition-all duration-1000 mb-16 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isArabic ? 'font-arabic' : ''}`}
          style={{ transitionDelay: '1100ms' }}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>{t('hero.trust')}</span>
        </div>

        {/* Service Icons Bar */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="glass-card p-6 md:p-8 inline-block">
            <div className="grid grid-cols-4 md:grid-cols-7 gap-4 md:gap-8">
              {serviceIcons.map((service, index) => (
                <a
                  key={index}
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <span className={`text-xs text-muted-foreground group-hover:text-primary transition-colors text-center ${isArabic ? 'font-arabic' : ''}`}>
                    {service.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1400ms' }}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll-bounce" />
          </div>
          <ChevronDown className="w-5 h-5 animate-bounce opacity-60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
