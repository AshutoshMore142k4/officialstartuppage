import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

const footerLinks = {
  Services: [
    { label: 'All Services', href: '/services' },
    { label: 'AI Strategy', href: '/services' },
    { label: 'Prototyping', href: '/services' },
    { label: 'Automation', href: '/services' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Features', href: '/features' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
  Support: [
    { label: 'Help Center', href: '/support' },
    { label: 'Contact Support', href: '/support' },
    { label: 'FAQ', href: '/support' },
  ],
};

export function Footer() {
  return (
    <footer aria-label="Site footer" className="border-t border-border/30 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-5 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size="sm" />
              <span className="text-lg font-bold text-foreground">11startups<span className="text-primary">.tech</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI consulting that delivers real results. From strategy to production-ready solutions.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('/') ? (
                      <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 11startups.tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
