import { useState } from 'react';
import { NeonButton } from '@/components/ui/neon-button';
import { ArrowRight, Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

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
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - CTA Text */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to transform your business with AI?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Schedule a free 30-minute consultation. We'll analyze your business and identify quick AI wins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <NeonButton variant="solid" size="lg">
                Book Free Call <ArrowRight className="inline ml-2 h-4 w-4" />
              </NeonButton>
              <NeonButton variant="default" size="lg">
                hello@11startups.tech
              </NeonButton>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(260_40%_50%_/_0.04),transparent_70%)]" />
            <div className="relative z-10">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Send us a message</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your name *"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl glass-subtle border-0 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                    />
                    <input
                      type="email"
                      placeholder="Email address *"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl glass-subtle border-0 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    maxLength={100}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full rounded-xl glass-subtle border-0 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                  <textarea
                    placeholder="Tell us about your project *"
                    required
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl glass-subtle border-0 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
                  />
                  <NeonButton
                    variant="solid"
                    className="w-full"
                    type="submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    <Send className="inline ml-2 h-4 w-4" />
                  </NeonButton>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
