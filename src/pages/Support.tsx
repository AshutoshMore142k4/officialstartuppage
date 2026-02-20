import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { NeonButton } from '@/components/ui/neon-button';
import { SEOHead } from '@/components/SEOHead';

const faqs = [
  {
    question: 'How do I get started with 11startups.tech?',
    answer:
      'Simply click "Get Started" on our homepage or reach out via the contact form below. Our team will schedule a free consultation to understand your needs and propose the best AI solution for your business.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We work across a wide range of industries including fintech, healthcare, e-commerce, logistics, SaaS, and more. Our AI solutions are tailored to the unique challenges of each sector.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity. A proof-of-concept or prototype typically takes 2–4 weeks, while a full production implementation can take 2–3 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes! We offer dedicated support and maintenance plans to ensure your AI solutions continue to perform optimally. This includes monitoring, updates, and iterative improvements.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer flexible pricing including project-based, retainer, and subscription plans. Visit our Pricing page or contact us for a custom quote tailored to your requirements.',
  },
  {
    question: 'Can I cancel or change my plan?',
    answer:
      'Absolutely. You can upgrade, downgrade, or cancel your plan at any time. We believe in flexibility and transparency — no hidden fees or long-term lock-ins.',
  },
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Support Center"
        description="Get help with 11startups.tech. Browse FAQs, contact our support team, or send us a message. We typically respond within 24 hours."
        canonical="/support"
      />
      <Navbar />
      <main className="pt-28 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Support Center</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Browse our FAQs or reach out directly — our team typically responds
            within 24 hours.
          </p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          <div className="rounded-2xl border border-border/40 bg-card p-6 text-center hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
            <p className="text-sm text-muted-foreground mb-3">For general inquiries & support</p>
            <a href="mailto:support@11startups.tech" className="text-sm text-primary hover:underline">
              support@11startups.tech
            </a>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card p-6 text-center hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-3">Mon – Fri, 9 AM – 6 PM IST</p>
            <span className="text-sm text-primary">Coming Soon</span>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card p-6 text-center hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Documentation</h3>
            <p className="text-sm text-muted-foreground mb-3">Guides, tutorials & API docs</p>
            <span className="text-sm text-primary">Coming Soon</span>
          </div>
        </div>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/40 bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-foreground/[0.02] transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            Still Need Help?
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Send us a message and we'll get back to you as soon as possible.
          </p>

          {submitted ? (
            <div className="max-w-xl mx-auto text-center rounded-2xl border border-primary/30 bg-primary/5 p-10">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. Our team will respond within 24 hours.
              </p>
              <NeonButton variant="ghost" size="sm" onClick={() => setSubmitted(false)}>
                Send Another Message
              </NeonButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                  placeholder="Describe your issue or question..."
                />
              </div>
              <NeonButton type="submit" variant="solid" className="w-full">
                Send Message
              </NeonButton>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
