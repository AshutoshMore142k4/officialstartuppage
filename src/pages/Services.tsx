import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { NeonButton } from '@/components/ui/neon-button';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import {
  Brain,
  Zap,
  Workflow,
  BarChart3,
  Shield,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

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
      <Navbar />
      <section className="relative pt-28 pb-20 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">Our Services</p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
          AI solutions built for <br className="hidden md:block" /> real business impact
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          From strategy through production, we partner with startups and enterprises to design, build,
          and maintain AI systems that deliver measurable ROI.
        </p>
        <div className="flex justify-center gap-4 flex-col sm:flex-row">
          <NeonButton variant="solid" size="lg">
            Book a Free Consultation
          </NeonButton>
          <NeonButton variant="default" size="lg">
            See Pricing
          </NeonButton>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="group glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden hover:border-primary/20 transition-all duration-500"
            >
              {/* Glow lines */}
              <span className="absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />

              <div className="md:flex md:items-start md:gap-10">
                <div className="shrink-0 mb-6 md:mb-0">
                  <div className="inline-flex items-center justify-center rounded-xl glass-subtle p-4">
                    <service.icon className="h-7 w-7 text-primary/80" />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-xs text-primary/70 uppercase tracking-widest mb-1">{service.tagline}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                    {service.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary/60 mt-0.5 shrink-0" />
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

      {/* Process */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            A proven four-step process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transparent, iterative, and designed to get you from idea to impact as fast as possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group hover:border-primary/20 transition-all duration-500"
            >
              <span className="text-4xl font-black text-primary/10 block mb-2">{item.step}</span>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
