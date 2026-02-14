import { cn } from '@/lib/utils';

export function Logo({ className, size = 'default' }: { className?: string; size?: 'default' | 'sm' }) {
  const sizeClass = size === 'sm' ? 'h-6 w-6' : 'h-7 w-7';
  return (
    <svg
      viewBox="0 0 100 100"
      style={{ filter: 'drop-shadow(0 0 0px transparent)' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClass, 'transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(260,50%,58%,0.5)]', className)}
    >
      <rect rx="22" width="100" height="100" fill="hsl(260, 50%, 58%)" />
      <path
        d="M30 38C30 38 34 32 42 30C50 28 56 32 58 36C60 40 58 46 52 50C46 54 40 56 38 60C36 64 40 68 46 70C52 72 58 70 62 66"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
