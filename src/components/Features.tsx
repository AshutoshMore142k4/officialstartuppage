import { Brain, Zap, Shield, BarChart3, Workflow, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GlowingEffect } from '@/components/ui/glowing-effect';

// `wide` cards span 2 of 3 columns at lg. Units sum to 9 so the bento fills exactly:
// [wide][narrow] / [narrow][wide] / [narrow][wide]
const features = [
  { icon: Brain, title: 'AI Strategy Consulting', description: 'We identify the highest-impact AI opportunities for your business and create a clear roadmap to implementation.', wide: true },
  { icon: Zap, title: 'Rapid Prototyping', description: 'Go from concept to working AI prototype in weeks, not months. Validate ideas fast with minimal investment.' },
  { icon: Workflow, title: 'Workflow Automation', description: 'Automate repetitive tasks with intelligent AI agents that learn and adapt to your business processes.' },
  { icon: BarChart3, title: 'Data Analytics & Insights', description: 'Unlock hidden patterns in your data with advanced ML models that drive smarter decision-making.', wide: true },
  { icon: Shield, title: 'AI Safety & Compliance', description: 'Deploy AI responsibly with our governance frameworks, bias auditing, and regulatory compliance support.' },
  { icon: Headphones, title: 'Ongoing Support', description: 'Dedicated AI engineers on call to monitor, optimize, and scale your AI solutions as your business grows.', wide: true },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">What We Offer</p>
          <h2 className="text-3xl text-foreground md:text-5xl">End-to-end AI consulting</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From strategy to deployment, we provide everything you need to harness the power of artificial
            intelligence.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className={cn(
                'group glass-card relative flex flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl',
                feature.wide && 'lg:col-span-2',
              )}
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
              <feature.icon className="mb-4 h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
              <h3 className="mb-2 text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
