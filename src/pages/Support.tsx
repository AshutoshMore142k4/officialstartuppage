import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, CalendarCheck } from 'lucide-react';
import { faqs } from '@/data/faqs';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Support Center"
        description="Get help with 11startups.tech. Browse FAQs or reach us directly by email or by booking a call. We typically respond within 24 hours."
        canonical="/support"
      />
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
        <div className="mb-10 max-w-2xl md:mb-16">
          <h1 className="mb-4 text-3xl text-foreground sm:text-4xl md:text-5xl">Support Center</h1>
          <p className="text-lg text-muted-foreground">
            We're here to help. Browse our FAQs or reach out directly — our team typically responds within 24
            hours.
          </p>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 md:mb-20">
          <a href="mailto:support@11startups.tech" className="glass-card relative block rounded-2xl p-6">
            <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
            <Mail className="mb-4 h-6 w-6 text-muted-foreground" />
            <h3 className="mb-1 font-semibold text-foreground">Email Us</h3>
            <p className="mb-3 text-sm text-muted-foreground">For general inquiries & support</p>
            <span className="text-sm text-foreground underline-offset-4 hover:underline">support@11startups.tech</span>
          </a>

          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card relative block rounded-2xl p-6"
          >
            <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
            <CalendarCheck className="mb-4 h-6 w-6 text-muted-foreground" />
            <h3 className="mb-1 font-semibold text-foreground">Book a Call</h3>
            <p className="mb-3 text-sm text-muted-foreground">30-minute consultation</p>
            <span className="text-sm text-foreground underline-offset-4 hover:underline">Schedule on Cal.com</span>
          </a>
        </div>

        <section>
          <h2 className="mb-8 text-2xl text-foreground md:text-3xl">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
