import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import { products } from '@/data/products';

const HEADLINE = 'Built by developers, for builders';
const SUPPORT = 'Tools, engineering, and AI infrastructure for turning ambitious ideas into real products.';

// No customer logos or testimonials exist for this site, so none are shown.
// 324 = CodeReportCard's npm downloads (api.npmjs.org, last year). '1k+ worldwide users' is the
// owner's own figure; there's no public source to check it against.
const metrics = [
  { value: '1k+', label: 'worldwide users' },
  { value: '324+', label: 'npm downloads of CodeReportCard' },
  { value: String(products.length), label: 'products shipped' },
];

// Text darkens across this slice of the pinned scroll, then holds before the section releases.
const REVEAL_START = 0.05;
const REVEAL_END = 0.8;
// Foreground at 0.11 → 0.9 opacity ≈ #E4E4E4 → #222 on white; dim grey → near-white on dark.
const DIM = 0.11;
const FULL = 0.9;

type Unit = { key: string; content: ReactNode; block?: boolean; className?: string };

function Reveal({ progress, range, block, className, children }: {
  progress: MotionValue<number>;
  range: [number, number];
  block?: boolean;
  className?: string;
  children: ReactNode;
}) {
  // Function form on purpose: the array form `useTransform(progress, range, [DIM, FULL])` gets
  // hardware-accelerated by Framer into a page-wide ScrollTimeline that ignores useScroll's
  // target/offset, so words lit up ~1000px before the section. The function runs on the JS
  // frameloop against the correct section-relative progress.
  const [a, b] = range;
  const opacity = useTransform(progress, (v) => DIM + (FULL - DIM) * Math.min(1, Math.max(0, (v - a) / (b - a))));
  const Tag = block ? motion.div : motion.span;
  return <Tag style={{ opacity }} className={className}>{children}</Tag>;
}

export function TrustSection() {
  const ref = useRef<HTMLElement>(null);
  // Read the preference only after mount: the server can't know it, and a different first render
  // on the client would break hydration of this section.
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = mounted && !!prefersReduced;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const words = (text: string, prefix: string): Unit[] =>
    text.split(' ').map((w, i) => ({ key: `${prefix}${i}`, content: w }));
  const headline = words(HEADLINE, 'h');
  const support = words(SUPPORT, 's');
  const stats: Unit[] = metrics.map((m) => ({
    key: m.label,
    block: true,
    className: 'flex flex-col-reverse justify-end gap-1',
    content: (
      <>
        <dt className="text-sm text-muted-foreground">{m.label}</dt>
        <dd className="text-title tabular-nums text-foreground">{m.value}</dd>
      </>
    ),
  }));

  // One reading-order sequence; each unit's window overlaps the next a little so the sweep is continuous.
  const all = [...headline, ...support, ...stats];
  const step = (REVEAL_END - REVEAL_START) / all.length;
  const rangeOf = (u: Unit): [number, number] => {
    const i = all.indexOf(u);
    return [REVEAL_START + i * step, REVEAL_START + (i + 1.5) * step];
  };

  const render = (units: Unit[]) =>
    units.map((u, i) => {
      if (reduce) {
        const Tag = u.block ? 'div' : 'span';
        return (
          <Tag key={u.key} className={cn(u.className, 'opacity-90')}>
            {u.content}
            {!u.block && i < units.length - 1 && ' '}
          </Tag>
        );
      }
      return (
        <Reveal key={u.key} progress={scrollYProgress} range={rangeOf(u)} block={u.block} className={u.className}>
          {u.content}
          {!u.block && i < units.length - 1 && ' '}
        </Reveal>
      );
    });

  return (
    <section
      ref={ref}
      id="trust"
      aria-labelledby="trust-heading"
      className={cn('relative border-b border-border', reduce ? 'py-16 md:py-24' : 'h-[220svh]')}
    >
      {/* Pinned with plain CSS sticky: it releases on its own when the section's bottom arrives. */}
      <div className={cn(!reduce && 'sticky top-0 flex h-svh items-center pt-16')}>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <h2 id="trust-heading" className="max-w-4xl text-display text-foreground">
            {render(headline)}
          </h2>
          <p className="mt-6 max-w-3xl text-heading font-light text-foreground md:mt-8">{render(support)}</p>
          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3 md:mt-14">
            {render(stats)}
          </dl>
        </div>
      </div>
    </section>
  );
}
