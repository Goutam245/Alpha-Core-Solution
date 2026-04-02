import { useState, useEffect } from 'react';
import { Menu, X, Shield, Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();
  const isArabic = language === 'ar';
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      e.preventDefault();
      const sectionId = href.split('#')[1];
      
      // If we're on the home page, scroll directly
      if (location.pathname === '/' || href.startsWith('/#')) {
        if (location.pathname !== '/') {
          navigate('/');
          setTimeout(() => scrollToSection(sectionId), 100);
        } else {
          scrollToSection(sectionId);
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/#home', label: t('nav.home') },
    { href: '/#services', label: t('nav.services') },
    { href: '/#about', label: isArabic ? 'من نحن' : 'About' },
    { href: '/#projects', label: t('nav.projects') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-xl py-3 shadow-lg border-b border-border/20'
            : 'bg-gradient-to-b from-background/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Side - Logo + KSA Trust Badge */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="/#home"
                onClick={(e) => handleNavClick(e, '/#home')}
                className="flex items-center group"
              >
                <img
                  src={logo}
                  alt="Alpha Core Solutions"
                  className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
              </a>
              
              {/* KSA Trusted Partner Badge - Desktop */}
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/30">
                <Shield className="w-3.5 h-3.5" />
                <span className={isArabic ? 'font-arabic' : ''}>{t('navbar.trustBadge')}</span>
              </span>
            </div>

            {/* Center - Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5 ${isArabic ? 'font-arabic' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Side - Language Toggle + Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow gradient-primary"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-3 text-foreground hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Mobile KSA Badge */}
          <span className="mb-8 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-primary bg-primary/10 border border-primary/30">
            <Shield className="w-4 h-4" />
            <span className={isArabic ? 'font-arabic' : ''}>{t('navbar.trustBadge')}</span>
          </span>

          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-2xl font-bold text-foreground hover:text-primary transition-all duration-300 ${isArabic ? 'font-arabic' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Language Toggle */}
          <button
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="mt-10 flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold text-primary-foreground transition-all duration-300 gradient-primary"
          >
            <Globe className="w-5 h-5" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
