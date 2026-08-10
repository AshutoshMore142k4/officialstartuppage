import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Lightbulb, TrendingUp, Heart, ArrowRight } from 'lucide-react';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'We stay on the bleeding edge of AI research and translate breakthroughs into practical, revenue-driving solutions for our clients.',
  },
  {
    icon: Target,
    title: 'Outcome-Obsessed',
    description:
      "Every engagement is measured by business impact — not vanity metrics. If it doesn't move the needle, we don't build it.",
  },
  {
    icon: Users,
    title: 'Radical Transparency',
    description:
      'No black boxes. We keep you in the loop at every step — weekly demos, shared dashboards, and honest progress updates.',
  },
  {
    icon: TrendingUp,
    title: 'Speed to Value',
    description: 'We aim to ship a working prototype in under 4 weeks. Rapid iteration means faster learning and quicker ROI.',
  },
  {
    icon: Heart,
    title: 'Responsible AI',
    description:
      "Ethics and safety aren't afterthoughts. We bake fairness, explainability, and compliance into every model we deploy.",
  },
  {
    icon: Rocket,
    title: 'Scalability Built-In',
    description: 'Our solutions are architected for growth from day one — so your AI scales seamlessly as your business expands.',
  },
];

const capabilities = [
  {
    name: 'Strategy',
    description: 'Translating business goals into a prioritised, high-impact AI roadmap.',
  },
  {
    name: 'ML Engineering',
    description: 'Building, training, and deploying production-ready models.',
  },
  {
    name: 'Data & Analytics',
    description: 'Turning messy data into clear, actionable insight.',
  },
  {
    name: 'Design & UX',
    description: 'Making every AI-powered feature feel intuitive to use.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About"
        description="Learn about 11startups.tech — our mission, values, and approach to helping startups and enterprises harness AI for measurable business impact."
        canonical="/about"
      />
      <SiteHeader />

      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">About Us</p>
        <h1 className="mb-5 max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl md:text-6xl">
          We help startups turn AI into unfair advantages
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
          11startups.tech is an AI consulting studio that partners with ambitious startups and enterprises to
          design, build, and scale AI solutions that drive real business outcomes.
        </p>
        <Button size="lg" asChild>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
            Work With Us <ArrowRight className="ml-2 inline h-4 w-4" />
          </a>
        </Button>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Our Mission</p>
            <h2 className="mb-5 text-3xl leading-tight text-foreground md:text-4xl">
              Democratising AI for the next generation of startups
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Too many startups struggle to adopt AI because the talent is scarce and the tooling is fragmented. We
              exist to bridge that gap — providing AI expertise at a fraction of the cost of building in-house.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Whether you're a seed-stage founder exploring your first ML feature or an enterprise scaling
              production models, we bring the strategy, engineering, and support you need to move fast with
              confidence.
            </p>
          </motion.div>
          <motion.div
            className="glass-card rounded-2xl p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <blockquote className="text-lg italic leading-relaxed text-foreground">
              "Our goal is simple: help every ambitious company unlock the power of AI — with speed, safety, and
              measurable results."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">— The 11startups team</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Our Values</p>
          <h2 className="text-3xl leading-tight text-foreground md:text-4xl">
            The principles that guide everything we build
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="glass-card relative rounded-2xl p-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-foreground">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">How We're Built</p>
          <h2 className="text-3xl leading-tight text-foreground md:text-4xl">A small, senior team</h2>
          <p className="mt-4 text-muted-foreground">
            We're a lean, senior team of AI engineers, strategists, data scientists, and designers who've shipped
            ML products before. No layers, no handoffs — you work directly with the people building your solution.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.name}
              className="glass-card relative rounded-2xl p-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
              <h3 className="mb-2 text-lg font-semibold text-foreground">{c.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
