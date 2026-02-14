import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TrustedBrands } from '@/components/TrustedBrands';
import { Features } from '@/components/Features';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
