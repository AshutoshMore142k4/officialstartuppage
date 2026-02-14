import { Building2 } from 'lucide-react';

const brands = [
  'TechCorp', 'DataFlow', 'NeuralNet', 'ScaleAI', 'DeepVision', 'CloudMind'
];

export function TrustedBrands() {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-widest">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              <Building2 className="h-5 w-5" />
              <span className="text-lg font-semibold tracking-tight">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
