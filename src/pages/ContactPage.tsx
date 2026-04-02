import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import CookieConsent from '@/components/CookieConsent';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    document.title = isArabic 
      ? 'اتصل بنا | ألفا كور سوليوشنز' 
      : 'Contact Us | Alpha Core Solutions';
  }, [isArabic]);

  const content = {
    en: {
      heroTitle: 'Get In Touch',
      heroSubtitle: 'Ready to secure your facility? Let\'s start a conversation.',
      officeTitle: 'Our Office',
      address: 'Riyadh, Kingdom of Saudi Arabia',
      email: 'info@alphacs.sa',
      hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
      emergency: '24/7 Emergency Support Available',
    },
    ar: {
      heroTitle: 'تواصل معنا',
      heroSubtitle: 'هل أنت مستعد لتأمين منشأتك؟ دعنا نبدأ محادثة.',
      officeTitle: 'مكتبنا',
      address: 'الرياض، المملكة العربية السعودية',
      email: 'info@alphacs.sa',
      hours: 'الأحد - الخميس: 8:00 صباحاً - 6:00 مساءً',
      emergency: 'دعم الطوارئ متاح 24/7',
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container-premium text-center">
            <span className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'تواصل معنا' : 'CONTACT US'}
            </span>
            <h1 className={`text-hero font-bold text-foreground mb-6 ${isArabic ? 'font-arabic' : 'font-display'}`}>
              {t.heroTitle}
            </h1>
            <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
              {t.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container-premium">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="glass-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className={`text-lg font-bold text-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? 'العنوان' : 'Address'}
                </h3>
                <p className={`text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                  {t.address}
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className={`text-lg font-bold text-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? 'البريد الإلكتروني' : 'Email'}
                </h3>
                <a href="mailto:info@alphacs.sa" className="text-primary hover:underline">
                  {t.email}
                </a>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className={`text-lg font-bold text-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? 'ساعات العمل' : 'Working Hours'}
                </h3>
                <p className={`text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                  {t.hours}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

        {/* Map Section */}
        <section className="py-16">
          <div className="container-premium">
            <div className="glass-card p-2 overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.0745971073!2d46.49574169843749!3d24.725338799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Alpha Core Solutions Location - Riyadh, Saudi Arabia"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ContactPage;