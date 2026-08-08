import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';

export function CTASection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('sending');
    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('sent');
      setForm({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Get In Touch</p>
            <h2 className="text-3xl text-foreground md:text-4xl">Ready to transform your business with AI?</h2>
            <p className="mb-6 mt-4 text-lg text-muted-foreground">
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

          <div className="glass-card rounded-2xl p-6 md:p-8">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-success" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">Message sent!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Send us a message</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="contact-name" className="sr-only">
                      Your name
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Your name *"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="sr-only">
                      Email address
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Email address *"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-company" className="sr-only">
                    Company (optional)
                  </Label>
                  <Input
                    id="contact-company"
                    type="text"
                    placeholder="Company (optional)"
                    maxLength={100}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="sr-only">
                    Tell us about your project
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your project *"
                    required
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <Button className="w-full" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 inline h-4 w-4" />
                </Button>
                {status === 'error' && (
                  <p className="text-center text-sm text-destructive">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
