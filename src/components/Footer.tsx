import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { GmailIcon } from '@/components/GmailIcon';

function ProductHuntIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z" />
    </svg>
  );
}

const SOCIALS = [
  { label: 'Email', href: 'mailto:founder.ashutoshm@11startups.tech', Icon: GmailIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/11startups/', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/11Startups/', Icon: Github },
  { label: 'Product Hunt', href: 'https://www.producthunt.com/@11startups', Icon: ProductHuntIcon },
];

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Docs', href: '/docs' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Support', href: '/support' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
  Connect: [
    { label: 'Book a call', href: 'https://cal.com/ash-28uynq/30min' },
    ...SOCIALS.map(({ label, href }) => ({ label, href })),
  ],
};

export function Footer() {
  return (
    <footer aria-label="Site footer" className="border-t border-border py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Logo size="sm" />
              <span className="text-base font-semibold text-foreground">11startups.tech</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              An applied AI company building language models and the products around them.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-medium text-foreground">{category}</h4>
              <ul className="space-y-0.5">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-8 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} 11startups.tech. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label === 'Email' ? 'Email the founder' : `11Startups on ${label}`}
                className="inline-flex min-h-11 min-w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
            <Link to="/privacy-policy" className="inline-flex min-h-11 items-center text-xs text-muted-foreground transition-colors hover:text-foreground active:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="inline-flex min-h-11 items-center text-xs text-muted-foreground transition-colors hover:text-foreground active:text-foreground">
              Terms
            </Link>
            <Link to="/disclaimer" className="inline-flex min-h-11 items-center text-xs text-muted-foreground transition-colors hover:text-foreground active:text-foreground">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
