import { Button } from '@/components/ui/button';
import { PixelCanvas } from '@/components/ui/pixel-canvas';
import { useIsMobile } from '@/hooks/use-mobile';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';
const PRISM_COLORS = ['#00dfd8', '#007cf0', '#7928ca', '#ff0080'];

export function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section id="hero" className="relative min-h-[calc(100dvh-4rem)] overflow-hidden border-b border-border">
      <PixelCanvas
        colors={PRISM_COLORS}
        gap={isMobile ? 12 : 7}
        speed={0.025}
        variant="glow"
        className="absolute inset-0"
        canvasClassName="opacity-[0.55]"
      >
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 py-16 md:px-8">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Agentic AI &amp; LLM Integration
            </p>

            <h1 className="text-4xl leading-tight text-foreground md:text-6xl md:leading-[1.05]">
              Beyond Automation. Building AI-Native Companies.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We help ambitious startups evolve into AI-native businesses by integrating autonomous AI agents,
              custom LLMs, and intelligent decision-making across products, operations, and customer experiences.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
