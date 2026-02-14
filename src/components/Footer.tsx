import { Brain } from 'lucide-react';

const footerLinks = {
  Services: ['AI Strategy', 'Prototyping', 'Automation', 'Analytics'],
  Company: ['About', 'Careers', 'Blog', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6 text-primary" />
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
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
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
