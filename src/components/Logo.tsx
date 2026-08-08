import { cn } from '@/lib/utils';
import { BrandMark } from '@/components/BrandMark';

export function Logo({ className, size = 'default' }: { className?: string; size?: 'default' | 'sm' }) {
  const sizeClass = size === 'sm' ? 'h-6 w-6' : 'h-7 w-7';
  return (
    <BrandMark
      className={cn(sizeClass, 'text-foreground transition-transform duration-200 hover:scale-105', className)}
    />
  );
}
