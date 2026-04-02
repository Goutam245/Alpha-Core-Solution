import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';


const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing for smooth page load
      const timer = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => setIsVisible(true), 50);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const openConsentSettings = () => {
    setIsVisible(false);
    setTimeout(() => setIsAnimating(false), 400);
    navigate('/cookie-policy');
  };

  if (!isAnimating) return null;

  const content = {
    en: {
      title: 'Consent for Data Processing',
      description: 'This website uses cookies and similar technologies ("Technologies") that enable us to provide you with optimized online experiences and enable content to your interests. By clicking "Accept All", you consent that these Technologies may be used and personal information may be transmitted to and stored by our service providers.',
      acceptAll: 'Accept All',
      essentialOnly: 'Strictly Necessary Only',
      consentSettings: 'Consent Settings',
      learnMore: 'Learn more about our Cookie Policy',
      privacyPolicy: 'Privacy Policy',
      legalNotice: 'Legal Notice',
    },
    ar: {
      title: 'موافقة على معالجة البيانات',
      description: 'يستخدم هذا الموقع ملفات تعريف الارتباط والتقنيات المماثلة ("التقنيات") التي تمكننا من تزويدك بتجارب محسّنة عبر الإنترنت وتمكين المحتوى الذي يناسب اهتماماتك. بالنقر على "قبول الكل"، فإنك توافق على استخدام هذه التقنيات ونقل المعلومات الشخصية وتخزينها بواسطة مزودي الخدمة لدينا.',
      acceptAll: 'قبول الكل',
      essentialOnly: 'الضرورية فقط',
      consentSettings: 'إعدادات الموافقة',
      learnMore: 'تعرف على سياسة ملفات تعريف الارتباط',
      privacyPolicy: 'سياسة الخصوصية',
      legalNotice: 'إشعار قانوني',
    },
  };

  const t = content[language];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[10000] p-4 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Dark Overlay Bar */}
      <div className="w-full bg-[#1a1a1a]/98 backdrop-blur-md border-t border-border/30">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Left Content */}
            <div className="flex-1">
              {/* Title */}
              <h3 className={`text-base font-bold text-foreground mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                {t.title}
              </h3>
              
              {/* Description */}
              <p className={`text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 max-w-4xl ${isArabic ? 'font-arabic' : ''}`}>
                {t.description}
              </p>
              
              {/* Links */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/cookie-policy"
                  className={`text-xs text-primary hover:underline ${isArabic ? 'font-arabic' : ''}`}
                >
                  {t.learnMore}
                </Link>
                <Link
                  to="/privacy-policy"
                  className={`text-xs text-primary hover:underline ${isArabic ? 'font-arabic' : ''}`}
                >
                  {t.privacyPolicy}
                </Link>
              </div>
            </div>

            {/* Right - Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full lg:w-auto">
              <button
                onClick={openConsentSettings}
                className={`px-4 py-2.5 text-sm font-medium text-foreground bg-[#3a7d44] hover:bg-[#2d6236] rounded transition-colors ${isArabic ? 'font-arabic' : ''}`}
              >
                {t.consentSettings}
              </button>
              <button
                onClick={acceptEssential}
                className={`px-4 py-2.5 text-sm font-medium text-foreground bg-[#3a7d44] hover:bg-[#2d6236] rounded transition-colors ${isArabic ? 'font-arabic' : ''}`}
              >
                {t.essentialOnly}
              </button>
              <button
                onClick={acceptAll}
                className={`px-6 py-2.5 text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded transition-all duration-300 hover:scale-[1.02] ${isArabic ? 'font-arabic' : ''}`}
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;