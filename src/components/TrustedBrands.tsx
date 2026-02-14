import { Building2 } from 'lucide-react';

const brands = [
  'TechCorp', 'DataFlow', 'NeuralNet', 'ScaleAI', 'DeepVision', 'CloudMind'
];

export function TrustedBrands() {
  return (
    <section className="py-16 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs text-muted-foreground mb-10 uppercase tracking-[0.2em]">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300">
              <Building2 className="h-5 w-5" />
              <span className="text-lg font-semibold tracking-tight">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
