import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ChevronDown } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { useTheme } from '@/components/theme-provider';
import { AnnouncementBanner } from '@/components/AnnouncementBanner';

const CAL_LINK = 'https://cal.com/ash-28uynq/30min';

const links = [
  { label: 'Docs', href: '/docs' },
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
  const pill = useScroll(10) && !open;
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const headerRef = React.useRef<HTMLElement>(null);
  // The banner above the header scrolls away, so the menu panel can't assume the header sits at y=64.
  const [panelTop, setPanelTop] = React.useState(64);
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
    <>
      <AnnouncementBanner />
      <header
        ref={headerRef}
        className={cn(
          'sticky top-0 z-50 w-full transition-colors',
          open ? 'glass-nav' : 'border-b border-transparent bg-transparent',
        )}
      >
      {/*
        On scroll the bar collapses into a floating pill. mt-2 + h-14 = h-16, so the header's
        layout height never changes and the page doesn't jump. The mobile menu keeps the
        full-width bar (`open` above) because its panel is anchored to the 64px header.
      */}
      <nav
        className={cn(
          'mx-auto flex items-center justify-between transition-[width,max-width,height,margin,padding,border-radius,background-color,box-shadow] duration-300 ease-out motion-reduce:transition-none',
          pill
            ? 'glass-nav mt-2 h-14 w-[calc(100%-1.5rem)] max-w-5xl rounded-full px-4 lg:px-6'
            : 'border border-transparent h-16 w-full max-w-6xl px-[max(1rem,env(safe-area-inset-left))] lg:px-8',
        )}
      >
        <Link to="/" className="-mx-2 flex min-h-11 items-center gap-2 px-2">
          <Logo size="sm" />
          <span className="text-base font-semibold tracking-tight text-foreground">11Startups</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavItem
              key={link.label}
              href={link.href}
              label={link.label}
              className={buttonVariants({ variant: 'ghost', className: 'text-foreground/80 hover:text-foreground' })}
            />
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Try our products
                <ChevronDown className="ml-1 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {products.map((p) => (
                <DropdownMenuItem key={p.name} asChild className="cursor-pointer flex-col items-start gap-0.5">
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    <span className="font-medium">{p.name}</span>
                    {p.stat && <span className="text-xs text-muted-foreground">{p.stat}</span>}
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/products">View all products</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'default' })}>
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            ref={menuButtonRef}
            size="icon"
            variant="outline"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => {
              setPanelTop(headerRef.current?.getBoundingClientRect().bottom ?? 64);
              setOpen(!open);
            }}
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
        </nav>
      </header>

      {/*
        This panel MUST stay outside <header>. The header carries `glass-nav`
        (backdrop-filter) whenever it is scrolled or open, and a non-none
        backdrop-filter makes an element a containing block for its
        position:fixed descendants. Nested inside, the panel's `top-16
        bottom-0` resolved against the 66px header instead of the viewport
        and collapsed to 2px tall, so tapping the menu button appeared to
        do nothing.
      */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          'glass-nav fixed inset-x-0 bottom-0 z-40 flex-col overflow-y-auto lg:hidden',
          open ? 'flex' : 'hidden',
        )}
        style={{ top: panelTop }}
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
          <div className="mt-4 grid gap-y-1 border-t border-border pt-4">
            <p className="px-3 text-eyebrow uppercase text-muted-foreground">Try our products</p>
            {products.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className={buttonVariants({ variant: 'ghost', className: 'h-12 justify-start text-base' })}
              >
                {p.name}
              </a>
            ))}
            <Link to="/products" onClick={close} className={buttonVariants({ variant: 'ghost', className: 'h-12 justify-start text-base' })}>
              View all products
            </Link>
          </div>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: 'lg', className: 'mt-auto w-full shrink-0' })}
            onClick={close}
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
