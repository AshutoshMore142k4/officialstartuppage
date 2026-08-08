import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
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
    { label: 'hello@11startups.tech', href: 'mailto:hello@11startups.tech' },
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
              AI consulting for early-stage teams. From strategy to production-ready solutions.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-medium text-foreground">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className="-my-2.5 inline-block py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="-my-2.5 inline-block py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
            <Link to="/privacy-policy" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link to="/disclaimer" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
