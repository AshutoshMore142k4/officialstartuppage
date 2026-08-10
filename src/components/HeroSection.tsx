import { Button } from '@/components/ui/button';
import { PixelCanvas } from '@/components/ui/pixel-canvas';
import { useIsMobile } from '@/hooks/use-mobile';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';
const PRISM_COLORS = ['#00dfd8', '#007cf0', '#7928ca', '#ff0080'];

export function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      {/*
        PixelCanvas is the in-flow container here, not an absolute overlay: its <canvas> is
        absolutely positioned inside it while `children` stay in normal flow. That lets the
        section grow past the viewport when the copy is tall (small phones) instead of
        clipping its own CTAs, and keeps the copy inside the canvas element so pointer
        events over the text still paint the trail.
        `svh` (not `dvh`) so the box doesn't resize as the mobile URL bar collapses.
      */}
      <PixelCanvas
        colors={PRISM_COLORS}
        gap={isMobile ? 12 : 7}
        speed={0.025}
        variant="glow"
        className="flex min-h-[calc(100svh-4rem)] items-center"
        canvasClassName="opacity-[0.55]"
      >
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:py-16 md:px-8">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground sm:mb-4 sm:text-sm">
              Agentic AI &amp; LLM Integration
            </p>

            <h1 className="text-[1.75rem] leading-[1.15] text-foreground sm:text-4xl sm:leading-tight md:text-6xl md:leading-[1.05]">
              Beyond Automation. Building AI-Native Companies.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              We help ambitious startups evolve into AI-native businesses by integrating autonomous AI agents,
              custom LLMs, and intelligent decision-making across products, operations, and customer experiences.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Button size="lg" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#pricing">View pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </PixelCanvas>
    </section>
  );
}
