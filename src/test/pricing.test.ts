import { describe, it, expect } from 'vitest';
import { getPlanPrice, plans } from '@/components/PricingSection';

describe('getPlanPrice', () => {
  it('returns the correct USD monthly figure per tier', () => {
    plans.forEach((plan) => {
      expect(getPlanPrice(plan, 'USD', false)).toEqual({ price: plan.priceUSD, symbol: '$' });
    });
  });

  it('returns the correct INR monthly figure per tier', () => {
    plans.forEach((plan) => {
      expect(getPlanPrice(plan, 'INR', false)).toEqual({ price: plan.priceINR, symbol: '₹' });
    });
  });

  it('multiplies by 10 for yearly billing', () => {
    plans.forEach((plan) => {
      expect(getPlanPrice(plan, 'USD', true).price).toBe(plan.priceUSD * 10);
      expect(getPlanPrice(plan, 'INR', true).price).toBe(plan.priceINR * 10);
    });
  });
});
