import { NeonButton } from '@/components/ui/neon-button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="rounded-2xl border border-border bg-card p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ready to transform your business with AI?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation call. We'll analyze your business and identify quick AI wins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NeonButton variant="solid" size="lg">
                Book Free Consultation <ArrowRight className="inline ml-2 h-4 w-4" />
              </NeonButton>
              <NeonButton variant="default" size="lg">
                hello@11startups.tech
              </NeonButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
