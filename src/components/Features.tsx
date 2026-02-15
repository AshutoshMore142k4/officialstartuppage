import { Brain, Zap, Shield, BarChart3, Workflow, Headphones } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const features = [
  { icon: Brain, title: 'AI Strategy Consulting', description: 'We identify the highest-impact AI opportunities for your business and create a clear roadmap to implementation.', area: 'md:[grid-area:1/1/2/7]' },
  { icon: Zap, title: 'Rapid Prototyping', description: 'Go from concept to working AI prototype in weeks, not months. Validate ideas fast with minimal investment.', area: 'md:[grid-area:1/7/2/13]' },
  { icon: Workflow, title: 'Workflow Automation', description: 'Automate repetitive tasks with intelligent AI agents that learn and adapt to your business processes.', area: 'md:[grid-area:2/1/3/5]' },
  { icon: BarChart3, title: 'Data Analytics & Insights', description: 'Unlock hidden patterns in your data with advanced ML models that drive smarter decision-making.', area: 'md:[grid-area:2/5/3/9]' },
  { icon: Shield, title: 'AI Safety & Compliance', description: 'Deploy AI responsibly with our governance frameworks, bias auditing, and regulatory compliance support.', area: 'md:[grid-area:2/9/3/13]' },
  { icon: Headphones, title: 'Ongoing Support', description: 'Dedicated AI engineers on call to monitor, optimize, and scale your AI solutions as your business grows.', area: 'md:[grid-area:3/1/4/13]' },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            End-to-end AI consulting
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From strategy to deployment, we provide everything you need to harness the power of artificial intelligence.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {features.map((feature) => (
            <li key={feature.title} className={`min-h-[14rem] list-none ${feature.area}`}>
              <div className="relative h-full rounded-2xl border border-border p-2">
                <GlowingEffect
                  spread={40}
                  glow
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.5px] border-border bg-card p-6">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border border-border p-2">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
