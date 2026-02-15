import { Brain, Zap, Shield, BarChart3, Workflow, Headphones } from 'lucide-react';

const features = [
  { icon: Brain, title: 'AI Strategy Consulting', description: 'We identify the highest-impact AI opportunities for your business and create a clear roadmap to implementation.' },
  { icon: Zap, title: 'Rapid Prototyping', description: 'Go from concept to working AI prototype in weeks, not months. Validate ideas fast with minimal investment.' },
  { icon: Workflow, title: 'Workflow Automation', description: 'Automate repetitive tasks with intelligent AI agents that learn and adapt to your business processes.' },
  { icon: BarChart3, title: 'Data Analytics & Insights', description: 'Unlock hidden patterns in your data with advanced ML models that drive smarter decision-making.' },
  { icon: Shield, title: 'AI Safety & Compliance', description: 'Deploy AI responsibly with our governance frameworks, bias auditing, and regulatory compliance support.' },
  { icon: Headphones, title: 'Ongoing Support', description: 'Dedicated AI engineers on call to monitor, optimize, and scale your AI solutions as your business grows.' },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-6 relative overflow-hidden hover:border-primary/20 transition-all duration-500"
            >
              {/* Top neon glow line */}
              <span className="absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
              {/* Bottom neon glow line */}
              <span className="absolute h-px opacity-0 group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 bottom-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />

              <div className="mb-4 inline-flex items-center justify-center rounded-xl glass-subtle p-3">
                <feature.icon className="h-5 w-5 text-primary/80" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
