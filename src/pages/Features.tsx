import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import {
  Brain,
  Zap,
  Workflow,
  BarChart3,
  Shield,
  Headphones,
  Globe,
  Layers,
  Lock,
  LineChart,
  Bot,
  Sparkles,
} from 'lucide-react';

/* ── Core platform features ─────────────────────────────────── */
const coreFeatures = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    description:
      'We identify the highest-impact AI opportunities for your business and create a clear roadmap to implementation.',
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description:
      'Go from concept to working AI prototype in weeks, not months. Validate ideas fast with minimal investment.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Automate repetitive tasks with intelligent AI agents that learn and adapt to your business processes.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Insights',
    description:
      'Unlock hidden patterns in your data with advanced ML models that drive smarter decision-making.',
  },
  {
    icon: Shield,
    title: 'AI Safety & Compliance',
    description:
      'Deploy AI responsibly with our governance frameworks, bias auditing, and regulatory compliance support.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description:
      'Dedicated AI engineers on call to monitor, optimize, and scale your AI solutions as your business grows.',
  },
];

/* ── Platform capabilities ──────────────────────────────────── */
const platformCapabilities = [
  {
    icon: Globe,
    title: 'Multi-Cloud Deployment',
    description:
      'Deploy seamlessly across AWS, Azure, and GCP with infrastructure-agnostic pipelines that avoid vendor lock-in.',
  },
  {
    icon: Layers,
    title: 'Modular Architecture',
    description:
      'Plug-and-play AI modules let you start small and compose complex solutions as your needs evolve — no rip-and-replace.',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description:
      'End-to-end encryption, SOC 2 controls, and role-based access ensure your data and models stay protected.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Monitoring',
    description:
      'Live dashboards track model accuracy, latency, and drift so you can act on issues before they affect users.',
  },
  {
    icon: Bot,
    title: 'Custom AI Agents',
    description:
      'Build autonomous agents tailored to your workflow — from customer support bots to intelligent data extractors.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Learning',
    description:
      'Our models retrain automatically on fresh data, so your AI gets smarter over time without manual intervention.',
  },
];

/* ── Stats ──────────────────────────────────────────────────── */
const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '3×', label: 'Average ROI' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '< 2 wk', label: 'Prototype Turnaround' },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: { icon: React.ElementType; title: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group glass-card rounded-2xl p-6 relative overflow-hidden hover:border-primary/20 transition-all duration-500"
    >
      <span className="absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
      <span className="absolute h-px opacity-0 group-hover:opacity-30 transition-all duration-500 inset-x-0 bottom-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />

      <div className="mb-4 inline-flex items-center justify-center rounded-xl glass-subtle p-3">
        <feature.icon className="h-5 w-5 text-primary/80" />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Features"
        description="Discover 11startups.tech platform features — multi-cloud deployment, modular architecture, enterprise security, real-time monitoring, custom AI agents, and continuous learning."
        canonical="/features"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">Features</p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
          Everything you need to <br className="hidden md:block" /> succeed with AI
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive platform combining consulting expertise, cutting-edge tooling, and
          enterprise-grade infrastructure — all in one place.
        </p>
      </section>

      {/* Stats Bar */}
      <section className="py-10 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <span className="text-3xl md:text-4xl font-bold text-primary block mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            End-to-end AI consulting
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From strategy to deployment, we provide everything you need to harness the power of
            artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">
            Platform Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for scale & reliability
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our infrastructure is designed to grow with you — secure, observable, and cloud-agnostic
            from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {platformCapabilities.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* Comparison / Why Us */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">Why 11startups</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How we compare
          </h2>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left py-4 px-6 text-muted-foreground font-medium">Feature</th>
                <th className="text-center py-4 px-4 text-primary font-semibold">11startups</th>
                <th className="text-center py-4 px-4 text-muted-foreground font-medium">Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/20">
              {[
                'End-to-end AI consulting',
                'Rapid prototype delivery',
                'Dedicated AI engineer',
                'AI safety & compliance',
                'Multi-cloud support',
                'Continuous model retraining',
                'Transparent weekly demos',
              ].map((row) => (
                <tr key={row} className="hover:bg-foreground/[0.02] transition-colors">
                  <td className="py-3 px-6 text-muted-foreground">{row}</td>
                  <td className="py-3 px-4 text-center text-primary">✓</td>
                  <td className="py-3 px-4 text-center text-muted-foreground/50">—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
