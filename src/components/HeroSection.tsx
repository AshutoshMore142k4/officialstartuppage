import React from 'react';
import { ChevronRight } from 'lucide-react';
import { NeonButton } from '@/components/ui/neon-button';
import { EtheralShadow } from '@/components/ui/etheral-shadow';

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--dark-line": darkLineColor,
  } as React.CSSProperties;

  return (
    <div className="pointer-events-none absolute size-full overflow-hidden [perspective:200px]" style={{ ...gridStyles, opacity }}>
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%" />
    </div>
  );
};

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <EtheralShadow
          color="hsl(260, 30%, 15%)"
          animation={{ scale: 80, speed: 60 }}
          noise={{ opacity: 0.4, scale: 1 }}
          sizing="fill"
        />
      </div>

      <div className="absolute top-0 z-[1] h-full w-full bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,hsl(260_40%_30%_/_0.15),transparent)]" />

      <section className="relative z-[2] max-w-full mx-auto">
        <RetroGrid angle={65} opacity={0.15} cellSize={50} darkLineColor="hsl(260, 40%, 50%, 0.08)" />
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 md:py-40 gap-12 md:px-8">
          <div className="space-y-6 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-muted-foreground group mx-auto px-5 py-2 glass-subtle rounded-full w-fit cursor-default">
              AI Consulting for Modern Startups
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>

            <h2 className="text-4xl tracking-tight font-bold mx-auto md:text-6xl lg:text-7xl text-foreground leading-tight">
              Scale your business with{' '}
              <span className="text-foreground">AI-powered solutions</span>
            </h2>

            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              We help startups and enterprises integrate cutting-edge AI into their workflows — from strategy to deployment, with measurable ROI.
            </p>

            <div className="items-center justify-center gap-4 flex flex-col sm:flex-row pt-4">
              <NeonButton variant="solid" size="lg">
                Book a Free Consultation
              </NeonButton>
              <NeonButton variant="default" size="lg">
                View Case Studies
              </NeonButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
