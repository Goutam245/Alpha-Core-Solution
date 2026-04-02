import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import WhyTrustUs from '@/components/WhyTrustUs';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  useEffect(() => {
    document.title = 'Alpha Core Solutions | Advanced Physical Security | Saudi Arabia';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Stats />
        <WhyTrustUs />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
