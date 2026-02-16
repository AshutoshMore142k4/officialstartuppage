import React from 'react';
import { ChevronRight } from 'lucide-react';
import { NeonButton } from '@/components/ui/neon-button';

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated purple gradient blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(260_50%_30%_/_0.4),transparent_70%)] blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(280_40%_25%_/_0.3),transparent_70%)] blur-3xl animate-[pulse_10s_ease-in-out_2s_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[350px] rounded-full bg-[radial-gradient(ellipse_at_center,hsl(250_45%_28%_/_0.25),transparent_70%)] blur-3xl animate-[pulse_12s_ease-in-out_4s_infinite]" />
      </div>

      <section className="relative z-[2] max-w-full mx-auto">
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 md:py-40 gap-12 md:px-8">
          <div className="space-y-6 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-muted-foreground group mx-auto px-5 py-2 glass-subtle rounded-full w-fit cursor-default">
              AI Consulting for Modern Startups
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>

            <h2 className="text-4xl tracking-tight font-bold mx-auto md:text-6xl lg:text-7xl text-foreground leading-tight">
              Scale your business with AI-powered{' '}
               solutions
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
