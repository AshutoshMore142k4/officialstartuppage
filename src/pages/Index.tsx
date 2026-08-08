import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SiteHeader } from '@/components/SiteHeader';
import { HeroSection } from '@/components/HeroSection';
import { Features } from '@/components/Features';
import { HowWeWork } from '@/components/HowWeWork';
import PricingSection from '@/components/PricingSection';
import { FaqSection } from '@/components/FaqSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead canonical="/" />
      <SiteHeader />
      <HeroSection />
      <Features />
      <HowWeWork />
      <PricingSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
