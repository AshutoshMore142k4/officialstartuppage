import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { useTheme } from '@/components/theme-provider';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '/about' },
  { label: 'Support', href: '/support' },
];

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={className}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

function NavItem({ href, label, className, onClick }: { href: string; label: string; className?: string; onClick?: () => void }) {
  const { pathname } = useLocation();

  if (href.startsWith('#')) {
    const target = pathname === '/' ? href : `/${href}`;
    return pathname === '/' ? (
      <a href={target} className={className} onClick={onClick}>
        {label}
      </a>
    ) : (
      <Link to={target} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const { resolvedTheme } = useTheme();
  const { pathname } = useLocation();

  const close = React.useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Keep the browser-chrome colour in step with the active theme. The pre-paint
  // script in index.html sets the initial value; this handles later toggles.
  React.useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff');
  }, [resolvedTheme]);

  // A back gesture (very common on mobile) changes the route without firing any
  // link onClick, which would otherwise leave the panel open over the new page
  // with body scroll still locked.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // iOS Safari ignores `overflow: hidden` on body for touch scrolling, so the page
  // behind the panel still rubber-bands. Pinning body with a compensating offset is
  // the technique that actually holds, and it preserves scroll position on close.
  React.useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const { body } = document;
    const prev = { position: body.style.position, top: body.style.top, width: body.style.width };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors',
        scrolled || open ? 'glass border-b border-transparent' : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-[max(1rem,env(safe-area-inset-left))] md:px-8">
        <Link to="/" className="-mx-2 flex min-h-11 items-center gap-2 px-2">
          <Logo size="sm" />
          <span className="text-base font-semibold tracking-tight text-foreground">11Startups</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavItem
              key={link.label}
              href={link.href}
              label={link.label}
              className={buttonVariants({ variant: 'ghost', className: 'text-muted-foreground' })}
            />
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'default' })}>
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            ref={menuButtonRef}
            size="icon"
            variant="outline"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          'glass fixed inset-x-0 top-16 bottom-0 z-50 flex-col overflow-y-auto border-t-0 md:hidden',
          open ? 'flex' : 'hidden',
        )}
      >
        <div className="flex min-h-full w-full flex-col gap-y-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="grid gap-y-1">
            {links.map((link) => (
              <NavItem
                key={link.label}
                href={link.href}
                label={link.label}
                onClick={close}
                className={buttonVariants({ variant: 'ghost', className: 'h-12 justify-start text-base' })}
              />
            ))}
          </div>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: 'lg', className: 'mt-auto w-full' })}
            onClick={close}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
