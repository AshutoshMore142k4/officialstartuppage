import React from 'react';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { NeonButton } from '@/components/ui/neon-button';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { title: 'Services', href: '#services' },
    { title: 'Features', href: '#features' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300',
      scrolled && 'bg-background/80 border-border backdrop-blur-xl'
    )}>
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <Brain className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">11startups<span className="text-primary">.tech</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.title} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <NeonButton variant="ghost" size="sm">Sign In</NeonButton>
          <NeonButton variant="solid" size="default">Get Started</NeonButton>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {open && (
        <div className="fixed top-16 inset-x-0 bottom-0 z-40 bg-background/95 backdrop-blur-xl border-t md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <a key={link.title} href={link.href} onClick={() => setOpen(false)} className="text-lg text-foreground py-2 border-b border-border">
                {link.title}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <NeonButton variant="ghost" className="w-full">Sign In</NeonButton>
              <NeonButton variant="solid" className="w-full">Get Started</NeonButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
