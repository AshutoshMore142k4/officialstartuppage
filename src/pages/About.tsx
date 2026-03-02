import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { SEOHead } from '@/components/SEOHead';
import { NeonButton } from '@/components/ui/neon-button';
import { motion } from 'framer-motion';
import {
  Rocket,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Heart,
  ArrowRight,
} from 'lucide-react';

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
      'Every engagement is measured by business impact — not vanity metrics. If it doesn\'t move the needle, we don\'t build it.',
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
    description:
      'We ship working prototypes in weeks, not quarters. Rapid iteration means faster learning and quicker ROI.',
  },
  {
    icon: Heart,
    title: 'Responsible AI',
    description:
      'Ethics and safety aren\'t afterthoughts. We bake fairness, explainability, and compliance into every model we deploy.',
  },
  {
    icon: Rocket,
    title: 'Scalability Built-In',
    description:
      'Our solutions are architected for growth from day one —  so your AI scales seamlessly as your business expands.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3x', label: 'Avg. ROI Achieved' },
  { value: '<4 wks', label: 'Time to First Prototype' },
];

const team = [
  {
    name: 'AI Strategy Team',
    description: 'Former consultants and product leaders who translate business goals into high-impact AI roadmaps.',
  },
  {
    name: 'ML Engineering',
    description: 'Research-grade engineers who build, train, and deploy production-ready models at scale.',
  },
  {
    name: 'Data & Analytics',
    description: 'Data scientists and analysts who turn messy data into clear, actionable insights.',
  },
  {
    name: 'Design & UX',
    description: 'Designers who ensure every AI-powered feature feels intuitive and delightful to use.',
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
        description="Learn about 11startups.tech — our mission, values, and the team helping startups and enterprises harness AI for measurable business impact."
        canonical="/about"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">About Us</p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
          We help startups turn <br className="hidden md:block" /> AI into unfair advantages
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          11startups.tech is an AI consulting studio that partners with ambitious startups and enterprises to design, build, and scale AI solutions that drive real business outcomes.
        </p>
        <NeonButton variant="solid" size="lg">
          Work With Us <ArrowRight className="ml-2 h-4 w-4 inline" />
        </NeonButton>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/30">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <p className="text-4xl md:text-5xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Democratising AI for the next generation of startups
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Too many startups struggle to adopt AI because the talent is scarce and the tooling is fragmented. We exist to bridge that gap — providing world-class AI expertise at a fraction of the cost of building in-house.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a seed-stage founder exploring your first ML feature or an enterprise scaling production models, we bring the strategy, engineering, and support you need to move fast with confidence.
            </p>
          </motion.div>
          <motion.div
            className="relative rounded-2xl border border-border/40 bg-card/40 p-8 backdrop-blur-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
            <blockquote className="relative text-lg text-foreground italic leading-relaxed">
              "Our goal is simple: help every ambitious company unlock the power of AI — with speed, safety, and measurable results."
            </blockquote>
            <p className="relative mt-4 text-sm text-muted-foreground">— The 11startups team</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">Our Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            The principles that guide everything we build
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="group relative rounded-2xl border border-border/40 bg-card/30 p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            A cross-functional crew built for velocity
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We're a lean, senior team of AI engineers, strategists, data scientists, and designers who've shipped ML products at startups and Fortune 500s alike.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl border border-border/40 bg-card/30 p-7 backdrop-blur-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{t.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
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
