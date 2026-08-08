import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';

// REVIEW BEFORE LAUNCH: proposed market-rate figures, not yet confirmed.
// Yearly = 10x monthly (2 months free). INR is inclusive of 18% GST.
const plans = [
  {
    name: 'Starter',
    description: 'For small businesses and startups getting started with AI',
    priceUSD: 599,
    priceINR: 45000,
    buttonText: 'Get Started',
    variant: 'outline' as const,
    includes: [
      'AI readiness assessment',
      '1 consultation session/month',
      'Email support',
      'Basic workflow analysis',
      'Implementation roadmap',
    ],
  },
  {
    name: 'Growth',
    description: 'For growing businesses that need advanced AI solutions',
    priceUSD: 1799,
    priceINR: 135000,
    buttonText: 'Get Started',
    variant: 'default' as const,
    popular: true,
    includes: [
      'Everything in Starter, plus:',
      '4 consultation sessions/month',
      'Custom AI model prototyping',
      'Priority support',
      'Dedicated AI engineer',
      'Monthly performance reports',
    ],
  },
  {
    name: 'Scale',
    description: 'Full-service AI integration for larger teams',
    priceUSD: 4499,
    priceINR: 350000,
    buttonText: 'Contact Sales',
    variant: 'outline' as const,
    includes: [
      'Everything in Growth, plus:',
      'Unlimited consultations',
      'On-site workshops',
      'AI safety & compliance audit',
      'Custom model training',
      '24/7 dedicated support',
    ],
  },
];

function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  layoutId,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  layoutId: string;
}) {
  return (
    <div className="flex gap-1 rounded-md border border-border p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            'relative inline-flex min-h-11 items-center justify-center rounded px-4 text-sm font-medium transition-colors',
            value === opt.value ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {value === opt.value && (
            <motion.div
              layoutId={layoutId}
              className="absolute inset-0 rounded bg-secondary"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}

export function getPlanPrice(plan: (typeof plans)[number], currency: 'USD' | 'INR', isYearly: boolean) {
  const base = currency === 'USD' ? plan.priceUSD : plan.priceINR;
  return {
    price: isYearly ? base * 10 : base,
    symbol: currency === 'USD' ? '$' : '₹',
  };
}

export { plans };

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'INR'>(() =>
    typeof navigator !== 'undefined' && navigator.language?.toLowerCase().endsWith('-in') ? 'INR' : 'USD',
  );

  return (
    <section id="pricing" className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">Pricing</p>
            <h2 className="text-3xl text-foreground md:text-5xl">Plans that work best for you</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore which option is right for your business.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <SegmentedControl
              layoutId="period-pill"
              value={isYearly ? 'yearly' : 'monthly'}
              onChange={(v) => setIsYearly(v === 'yearly')}
              options={[
                { value: 'monthly', label: 'Monthly' },
                { value: 'yearly', label: 'Yearly' },
              ]}
            />
            <SegmentedControl
              layoutId="currency-pill"
              value={currency}
              onChange={(v) => setCurrency(v)}
              options={[
                { value: 'USD', label: 'USD' },
                { value: 'INR', label: 'INR' },
              ]}
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => {
            const { price, symbol } = getPlanPrice(plan, currency, isYearly);

            return (
              <div
                key={plan.name}
                className={cn(
                  'glass-card relative flex flex-col rounded-2xl p-6',
                  plan.popular && 'ring-1 ring-foreground/30',
                )}
              >
                <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />

                {plan.popular && (
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
                    <span className="rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{plan.name}</h3>
                  <div className="my-4 flex flex-wrap items-baseline gap-1">
                    <span className="text-lg text-muted-foreground">{symbol}</span>
                    <NumberFlow
                      value={price}
                      className="text-3xl font-semibold text-foreground sm:text-4xl"
                      locales={currency === 'INR' ? 'en-IN' : 'en-US'}
                      format={{ useGrouping: true }}
                    />
                    <span className="text-sm text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {currency === 'INR' ? 'Inclusive of 18% GST' : 'Billed internationally · taxes as applicable'}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex-1">
                  <Button variant={plan.variant} className="mb-6 w-full" asChild>
                    <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                      {plan.buttonText}
                    </a>
                  </Button>

                  <ul className="space-y-3">
                    {plan.includes.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        {i === 0 ? (
                          <span className="font-medium text-muted-foreground">{feature}</span>
                        ) : (
                          <>
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                            <span className="text-muted-foreground">{feature}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass-card mt-8 max-w-3xl rounded-2xl p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            AI usage — model API tokens, inference, and compute — is billed directly to your own provider accounts.
            We never mark it up or resell it. You keep full visibility and control of what you spend.
          </p>
        </div>
      </div>
    </section>
  );
}
