"use client";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";

const plans = [
  {
    name: "Starter",
    description: "Great for small businesses and startups looking to get started with AI",
    price: 499,
    yearlyPrice: 4499,
    buttonText: "Get Started",
    variant: "default" as const,
    includes: [
      "AI readiness assessment",
      "1 consultation session/month",
      "Email support",
      "Basic workflow analysis",
      "Implementation roadmap",
    ],
  },
  {
    name: "Business",
    description: "Best value for growing businesses that need advanced AI solutions",
    price: 1499,
    yearlyPrice: 13499,
    buttonText: "Get Started",
    variant: "solid" as const,
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "4 consultation sessions/month",
      "Custom AI model prototyping",
      "Priority support",
      "Dedicated AI engineer",
      "Monthly performance reports",
    ],
  },
  {
    name: "Enterprise",
    description: "Advanced plan with full-service AI integration for large teams",
    price: 3999,
    yearlyPrice: 35999,
    buttonText: "Contact Sales",
    variant: "default" as const,
    includes: [
      "Everything in Business, plus:",
      "Unlimited consultations",
      "On-site workshops",
      "AI safety & compliance audit",
      "Custom model training",
      "24/7 dedicated support",
    ],
  },
];

function PricingSwitch({ onSwitch }: { onSwitch: (value: string) => void }) {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center mb-12">
      <div className="glass-card rounded-full p-1 flex gap-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors",
            selected === "0" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {selected === "0" && (
            <motion.div
              layoutId="pricing-pill"
              className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">Monthly</span>
        </button>
        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors",
            selected === "1" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {selected === "1" && (
            <motion.div
              layoutId="pricing-pill"
              className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">Yearly</span>
        </button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-primary/80 uppercase tracking-[0.15em] mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Plans that work best for you
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by startups worldwide. Explore which option is right for your business.
          </p>
        </div>

        <PricingSwitch onSwitch={togglePricingPeriod} />

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={cn(
                "glass-card rounded-2xl p-6 flex flex-col relative",
                plan.popular && "border-primary/30 glow-primary-sm"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="glass-subtle text-xs font-medium text-primary px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-muted-foreground text-lg">$</span>
                  <NumberFlow
                    value={isYearly ? plan.yearlyPrice : plan.price}
                    className="text-4xl font-bold text-foreground"
                    format={{ useGrouping: true }}
                  />
                  <span className="text-muted-foreground text-sm">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="flex-1">
                <NeonButton
                  variant={plan.variant}
                  className="w-full mb-6"
                >
                  {plan.buttonText}
                </NeonButton>

                <ul className="space-y-3">
                  {plan.includes.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      {i === 0 ? (
                        <span className="text-muted-foreground font-medium">{feature}</span>
                      ) : (
                        <>
                          <Check className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
