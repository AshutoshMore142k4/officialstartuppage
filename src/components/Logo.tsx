import { cn } from '@/lib/utils';
import logoImg from '@/assets/logo-s.png';

export function Logo({ className, size = 'default' }: { className?: string; size?: 'default' | 'sm' }) {
  const sizeClass = size === 'sm' ? 'h-6 w-6' : 'h-7 w-7';
  return (
    <img
      src={logoImg}
      alt="11startups logo"
      className={cn(sizeClass, 'rounded-md transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(260,50%,58%,0.5)]', className)}
    />
  );
}
