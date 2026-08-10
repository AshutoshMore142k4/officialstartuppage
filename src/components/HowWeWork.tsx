const steps = [
  { step: '01', title: 'Discovery', description: 'We deep-dive into your business, data, and goals to pinpoint the highest-value AI opportunities.' },
  { step: '02', title: 'Design', description: 'Our team architects a tailored solution — selecting the right models, data pipelines, and integration points.' },
  { step: '03', title: 'Build', description: 'We develop, test, and iterate rapidly, keeping you in the loop with weekly demos. We aim to ship a working prototype in under 4 weeks.' },
  { step: '04', title: 'Deploy & Scale', description: 'We launch into production with monitoring, support, and a clear plan for scaling impact over time.' },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">How We Work</p>
          <h2 className="text-3xl text-foreground md:text-5xl">A proven four-step process</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transparent, iterative, and designed to get you from idea to impact as fast as possible.
          </p>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="relative border-t-2 border-border pt-6">
              <span className="mb-2 block text-sm font-medium text-muted-foreground">{item.step}</span>
              <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
