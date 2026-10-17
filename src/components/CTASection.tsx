import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { GmailIcon } from '@/components/GmailIcon';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';
const FOUNDER_EMAIL = 'founder.ashutoshm@11startups.tech';

export function CTASection() {
  return (
    <section id="contact" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 md:px-8">
        <p className="mb-3 text-eyebrow uppercase text-muted-foreground">Get In Touch</p>
        <h2 className="text-heading text-foreground">Ready to transform your business with AI?</h2>
        <p className="mb-8 mt-4 text-lg text-muted-foreground">
          Schedule a free 30-minute consultation. We'll analyze your business and identify quick AI wins.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book Free Call <ArrowRight className="ml-2 inline h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="self-start px-4 sm:self-auto" asChild>
            <a href={`mailto:${FOUNDER_EMAIL}`} aria-label={`Email the founder at ${FOUNDER_EMAIL}`} title={FOUNDER_EMAIL}>
              <GmailIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
