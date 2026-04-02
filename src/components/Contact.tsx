import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isArabic = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: isArabic ? 'تم الإرسال!' : 'Success!',
      description: t('contact.success'),
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const services = [
    isArabic ? 'أنظمة الكشف عن المعادن' : 'Metal Detection Systems',
    isArabic ? 'كاميرات المراقبة' : 'CCTV Surveillance',
    isArabic ? 'فحص بالأشعة السينية' : 'X-Ray Screening',
    isArabic ? 'التحكم في الدخول' : 'Access Control',
    isArabic ? 'حل أمني متكامل' : 'Complete Security Solution',
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: isArabic ? 'البريد الإلكتروني' : 'Email',
      value: 'info@alphacs.sa',
      href: 'mailto:info@alphacs.sa',
    },
    {
      icon: MapPin,
      label: isArabic ? 'العنوان' : 'Address',
      value: isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
    },
    {
      icon: Clock,
      label: isArabic ? 'ساعات العمل' : 'Working Hours',
      value: isArabic ? 'الأحد - الخميس: 8 ص - 6 م' : 'Sun - Thu: 8AM - 6PM',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-secondary/30 via-card/50 to-background bg-acs-pattern"
    >
      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isArabic ? 'font-arabic' : ''}`}
          >
            {t('contact.eyebrow')}
          </span>
          <h2
            className={`text-section font-bold text-foreground transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isArabic ? 'font-arabic' : 'font-display'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {isArabic ? (
              <>
                لنناقش
                <br />
                <span className="gradient-text">احتياجاتك الأمنية</span>
              </>
            ) : (
              <>
                Let's Discuss Your
                <br />
                <span className="gradient-text">Security Needs</span>
              </>
            )}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className={`block text-sm text-muted-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={isArabic ? 'أدخل اسمك' : 'Enter your name'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm text-muted-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  />
                </div>

                {/* Company */}
                <div className="md:col-span-2">
                  <label className={`block text-sm text-muted-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {t('contact.company')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={isArabic ? 'اسم الشركة (اختياري)' : 'Company name (optional)'}
                  />
                </div>
              </div>

              {/* Service Select */}
              <div className="mt-5">
                <label className={`block text-sm text-muted-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {t('contact.service')}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all ${isArabic ? 'font-arabic' : ''}`}
                >
                  <option value="">{isArabic ? 'اختر الخدمة' : 'Select a service'}</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className={`block text-sm text-muted-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? 'رسالتك' : 'Your Message'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none ${isArabic ? 'font-arabic' : ''}`}
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full mt-6 btn-premium text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-70 ${isArabic ? 'font-arabic' : ''}`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span className="relative z-10">{t('contact.success')}</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">{t('contact.submit')}</span>
                    <Send className="w-5 h-5 relative z-10" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Contact Info Card */}
            <div className="glass-card p-6">
              <h3 className={`text-xl font-bold text-foreground mb-5 ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className={`text-sm text-muted-foreground mb-0.5 ${isArabic ? 'font-arabic' : ''}`}>
                          {item.label}
                        </p>
                        <p className={`text-foreground font-medium group-hover:text-primary transition-colors ${isArabic ? 'font-arabic' : ''}`}>
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className={`text-sm text-muted-foreground mb-0.5 ${isArabic ? 'font-arabic' : ''}`}>
                          {item.label}
                        </p>
                        <p className={`text-foreground font-medium ${isArabic ? 'font-arabic' : ''}`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Emergency */}
              <div className="mt-5 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <p className={`text-primary font-medium text-sm ${isArabic ? 'font-arabic' : ''}`}>
                    {t('contact.emergency')}
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass-card p-2 overflow-hidden rounded-2xl">
              <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.0745971073!2d46.49574169843749!3d24.725338799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Alpha Core Solutions Location - Riyadh, Saudi Arabia"
                />
                {/* Map Overlay with Pin */}
                <div className="absolute bottom-3 left-3 glass-card px-3 py-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className={`text-sm font-medium text-foreground ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? 'الرياض' : 'Riyadh'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
