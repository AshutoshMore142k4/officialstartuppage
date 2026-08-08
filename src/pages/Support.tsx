import { useState } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, CalendarCheck, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { faqs } from '@/data/faqs';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';

const Support = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setStatus('sending');
    const { error } = await supabase.from('contact_submissions').insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.subject.trim()
        ? `Subject: ${formData.subject.trim()}\n\n${formData.message.trim()}`
        : formData.message.trim(),
    });

    if (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Support Center"
        description="Get help with 11startups.tech. Browse FAQs, contact our support team, or send us a message. We typically respond within 24 hours."
        canonical="/support"
      />
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
        <div className="mb-16 max-w-2xl">
          <h1 className="mb-4 text-4xl text-foreground md:text-5xl">Support Center</h1>
          <p className="text-lg text-muted-foreground">
            We're here to help. Browse our FAQs or reach out directly — our team typically responds within 24
            hours.
          </p>
        </div>

        <div className="mb-20 grid gap-6 sm:grid-cols-2">
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

        <section className="mb-20">
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

        <section>
          <h2 className="mb-2 text-2xl text-foreground md:text-3xl">Still Need Help?</h2>
          <p className="mb-8 text-muted-foreground">
            Send us a message and we'll get back to you as soon as possible.
          </p>

          {status === 'sent' ? (
            <div className="glass-card max-w-xl rounded-2xl p-6 md:p-10">
              <CheckCircle className="mb-4 h-12 w-12 text-success" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground">Thank you for reaching out. Our team will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="support-name" className="sr-only">
                    Your name
                  </Label>
                  <Input
                    id="support-name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="support-email" className="sr-only">
                    Email address
                  </Label>
                  <Input
                    id="support-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="support-subject" className="sr-only">
                  Subject
                </Label>
                <Input
                  id="support-subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="support-message" className="sr-only">
                  Describe your issue or question
                </Label>
                <Textarea
                  id="support-message"
                  required
                  rows={5}
                  placeholder="Describe your issue or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
              {status === 'error' && (
                <p className="text-center text-sm text-destructive">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
