import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import {
  Brain,
  Zap,
  Workflow,
  BarChart3,
  Shield,
  Headphones,
  CheckCircle2,
  Globe,
  Layers,
  Lock,
  LineChart,
  Bot,
  Sparkles,
} from 'lucide-react';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';

const services = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    tagline: 'Find the right AI opportunities',
    description:
      'We audit your operations, identify high-impact AI use cases, and build a prioritised roadmap so you invest where it matters most.',
    benefits: [
      'Comprehensive AI readiness assessment',
      'Opportunity mapping & ROI analysis',
      'Technology stack recommendations',
      'Executive-ready implementation roadmap',
    ],
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    tagline: 'From idea to working AI in weeks',
    description:
      'Validate concepts quickly with functional prototypes. We spin up proof-of-concept models so you can test assumptions before committing big budgets.',
    benefits: [
      'Working prototype in 2–4 weeks',
      'Iterative feedback loops',
      'Risk-free concept validation',
      'Seamless handoff to production',
    ],
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    tagline: 'Eliminate repetitive work',
    description:
      'Deploy intelligent agents that learn your processes and handle repetitive tasks — from document processing to customer routing — so your team can focus on high-value work.',
    benefits: [
      'Custom AI agent development',
      'Document & data extraction',
      'Intelligent task routing',
      'Continuous process optimisation',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Insights',
    tagline: 'Turn data into decisions',
    description:
      'We build advanced ML pipelines and dashboards that surface hidden patterns, enabling faster, data-driven decision-making across your organisation.',
    benefits: [
      'Custom ML model development',
      'Real-time analytics dashboards',
      'Predictive forecasting',
      'Natural language querying',
    ],
  },
  {
    icon: Shield,
    title: 'AI Safety & Compliance',
    tagline: 'Deploy AI responsibly',
    description:
      'Navigate the evolving regulatory landscape with our governance frameworks, bias auditing, and compliance toolkits designed for enterprise AI deployment.',
    benefits: [
      'Bias & fairness auditing',
      'Regulatory compliance (EU AI Act, etc.)',
      'Model explainability reports',
      'AI ethics governance playbook',
    ],
  },
  {
    icon: Headphones,
    title: 'Ongoing Support & Optimisation',
    tagline: 'We grow with you',
    description:
      'Dedicated AI engineers monitor, fine-tune, and scale your solutions post-launch, ensuring peak performance as your business evolves.',
    benefits: [
      'Proactive monitoring & alerting',
      'Model retraining & drift detection',
      'Performance optimisation sprints',
      '24/7 enterprise SLA available',
    ],
  },
];

const platformCapabilities = [
  {
    icon: Globe,
    title: 'Multi-Cloud Deployment',
    description: 'Deploy seamlessly across AWS, Azure, and GCP with infrastructure-agnostic pipelines that avoid vendor lock-in.',
  },
  {
    icon: Layers,
    title: 'Modular Architecture',
    description: 'Plug-and-play AI modules let you start small and compose complex solutions as your needs evolve — no rip-and-replace.',
  },
  {
    icon: Lock,
    title: 'Security-First Architecture',
    description: 'End-to-end encryption, strict access controls, and audit logging keep your data and models protected.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Monitoring',
    description: 'Live dashboards track model accuracy, latency, and drift so you can act on issues before they affect users.',
  },
  {
    icon: Bot,
    title: 'Custom AI Agents',
    description: 'Build autonomous agents tailored to your workflow — from customer support bots to intelligent data extractors.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Learning',
    description: 'Models retrain on fresh data over time, so your AI keeps improving without manual intervention.',
  },
];

const processSteps = [
  { step: '01', title: 'Discovery', description: 'We deep-dive into your business, data, and goals to pinpoint the highest-value AI opportunities.' },
  { step: '02', title: 'Design', description: 'Our team architects a tailored solution — selecting the right models, data pipelines, and integration points.' },
  { step: '03', title: 'Build', description: 'We develop, test, and iterate rapidly, keeping you in the loop with weekly demos and feedback cycles.' },
  { step: '04', title: 'Deploy & Scale', description: 'We launch into production with monitoring, support, and a clear plan for scaling impact over time.' },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Services"
        description="Explore 11startups.tech AI consulting services — strategy, rapid prototyping, workflow automation, data analytics, AI safety & compliance, and ongoing support."
        canonical="/services"
      />
      <SiteHeader />
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Our Services</p>
        <h1 className="mb-5 max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl md:text-6xl">
          AI solutions built for real business impact
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
          From strategy through production, we partner with startups and enterprises to design, build, and
          maintain AI systems that deliver measurable ROI.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book a Free Consultation
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/#pricing">See Pricing</a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
        <div className="space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="glass-card relative rounded-2xl p-6 md:p-10"
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
              <div className="md:flex md:items-start md:gap-10">
                <div className="mb-6 shrink-0 md:mb-0">
                  <div className="inline-flex items-center justify-center rounded-md bg-secondary p-4">
                    <service.icon className="h-7 w-7 text-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">{service.tagline}</p>
                  <h3 className="mb-3 text-xl font-semibold text-foreground md:text-2xl">{service.title}</h3>
                  <p className="mb-5 max-w-2xl leading-relaxed text-muted-foreground">{service.description}</p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Platform Capabilities</p>
          <h2 className="text-3xl text-foreground md:text-5xl">Built for scale & reliability</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our infrastructure is designed to grow with you — secure, observable, and cloud-agnostic from day one.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {platformCapabilities.map((feature) => (
            <div key={feature.title} className="glass-card relative rounded-2xl p-6">
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
              <feature.icon className="mb-4 h-5 w-5 text-muted-foreground" />
              <h3 className="mb-2 text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">How We Work</p>
          <h2 className="text-3xl text-foreground md:text-5xl">A proven four-step process</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transparent, iterative, and designed to get you from idea to impact as fast as possible.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card relative rounded-2xl p-6"
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
              <span className="mb-2 block text-4xl font-semibold text-muted-foreground/30">{item.step}</span>
              <h4 className="mb-2 font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
