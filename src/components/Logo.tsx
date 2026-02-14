import { cn } from '@/lib/utils';

export function Logo({ className, size = 'default' }: { className?: string; size?: 'default' | 'sm' }) {
  const sizeClass = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClass, className)}
    >
      <rect rx="20" width="100" height="100" fill="hsl(260, 50%, 58%)" />
      <path
        d="M68 28C68 28 62 28 56 32C50 36 44 44 38 50C32 56 26 60 22 62C26 56 32 48 38 42C44 36 50 32 56 28C62 24 68 28 68 28Z"
        fill="white"
        opacity="0.3"
      />
      <path
        d="M30 38C30 38 34 32 42 30C50 28 56 32 58 36C60 40 58 46 52 50C46 54 40 56 38 60C36 64 40 68 46 70C52 72 58 70 62 66"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
