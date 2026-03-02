import {
  Cpu, Brain, Zap, Globe, Shield, BarChart3,
  Database, Cloud, Layers, Rocket, Terminal, Wifi,
} from 'lucide-react';

const brands = [
  { name: 'TechCorp', icon: Cpu },
  { name: 'DataFlow', icon: Database },
  { name: 'NeuralNet', icon: Brain },
  { name: 'ScaleAI', icon: Rocket },
  { name: 'DeepVision', icon: Layers },
  { name: 'CloudMind', icon: Cloud },
  { name: 'CyberShield', icon: Shield },
  { name: 'MetricAI', icon: BarChart3 },
  { name: 'ZapLabs', icon: Zap },
  { name: 'GlobalSync', icon: Globe },
  { name: 'DevStack', icon: Terminal },
  { name: 'NetPulse', icon: Wifi },
];

export function TrustedBrands() {
  return (
    <section className="pt-4 pb-16 border-t border-border/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs text-muted-foreground mb-10 uppercase tracking-[0.2em]">
          Trusted by innovative companies worldwide
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee gap-12 w-max">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center gap-2.5 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300 shrink-0"
            >
              <brand.icon className="h-5 w-5" />
              <span className="text-lg font-semibold tracking-tight whitespace-nowrap">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
