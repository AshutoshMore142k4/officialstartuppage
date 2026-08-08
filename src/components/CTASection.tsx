import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';

export function CTASection() {
  return (
    <section id="contact" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 md:px-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Get In Touch</p>
        <h2 className="text-3xl text-foreground md:text-4xl">Ready to transform your business with AI?</h2>
        <p className="mb-8 mt-4 text-lg text-muted-foreground">
          Schedule a free 30-minute consultation. We'll analyze your business and identify quick AI wins.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book Free Call <ArrowRight className="ml-2 inline h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:hello@11startups.tech">hello@11startups.tech</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
