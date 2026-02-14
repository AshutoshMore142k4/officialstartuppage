import React from 'react';
import { cn } from '@/lib/utils';
import { MenuToggle } from '@/components/ui/menu-toggle';
import { NeonButton } from '@/components/ui/neon-button';
import logoImg from '@/assets/logo.png';
import { Sheet, SheetContent } from '@/components/ui/sheet';

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { title: 'Services', href: '#services' },
    { title: 'Features', href: '#features' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-500',
      scrolled && 'glass border-border/30'
    )}>
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logoImg} alt="11startups.tech" className="h-7 w-7" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            11startups<span className="text-primary">.tech</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <NeonButton variant="ghost" size="sm">Sign In</NeonButton>
          <NeonButton variant="solid" size="default">Get Started</NeonButton>
        </div>

        <div className="md:hidden">
          <MenuToggle open={open} onOpenChange={setOpen} />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="glass-strong w-80 border-l border-border/30 p-0">
            <div className="flex flex-col h-full pt-12 px-6">
              <div className="flex items-center gap-2 mb-8">
                <img src={logoImg} alt="11startups.tech" className="h-6 w-6" />
                <span className="text-lg font-bold text-foreground">
                  11startups<span className="text-primary">.tech</span>
                </span>
              </div>

              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-foreground py-3 px-4 rounded-xl hover:bg-foreground/5 transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-auto pb-8">
                <NeonButton variant="ghost" className="w-full">Sign In</NeonButton>
                <NeonButton variant="solid" className="w-full">Get Started</NeonButton>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
