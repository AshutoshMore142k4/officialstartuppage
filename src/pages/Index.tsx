import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SiteHeader } from '@/components/SiteHeader';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { Features } from '@/components/Features';
import PricingSection from '@/components/PricingSection';
import { FaqSection } from '@/components/FaqSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { faqPage, productList } from '@/lib/seo';

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
      <SEOHead
        canonical="/"
        description="11Startups is an applied AI company. We build language models and products on top of them, including CodeReportCard, Pebble mk1 and GrindSDE."
        jsonLd={[faqPage(), productList()]}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustSection />
        <Features />
        <PricingSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
