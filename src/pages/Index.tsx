import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TrustedBrands } from '@/components/TrustedBrands';
import { Features } from '@/components/Features';
import PricingSection from '@/components/PricingSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        canonical="/"
        description="11startups.tech delivers end-to-end AI consulting — strategy, rapid prototyping, workflow automation, data analytics, compliance, and ongoing support. Measurable ROI from day one."
      />
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <Features />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
