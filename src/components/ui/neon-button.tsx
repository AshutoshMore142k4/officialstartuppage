import React from 'react'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from "class-variance-authority";

const neonButtonVariants = cva(
  "relative group border text-foreground mx-auto text-center rounded-full cursor-pointer font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-primary/5 hover:bg-primary/0 border-primary/20",
        solid: "bg-primary hover:bg-primary/90 text-primary-foreground border-transparent hover:border-foreground/50",
        ghost: "border-transparent bg-transparent hover:border-border hover:bg-secondary",
      },
      size: {
        default: "px-7 py-2 text-sm",
        sm: "px-4 py-1 text-sm",
        lg: "px-10 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
  neon?: boolean;
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, neon = true, size, variant, children, ...props }, ref) => {
    return (
      <button
        className={cn(neonButtonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <span className={cn(
          "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent hidden",
          neon && "block"
        )} />
        {children}
        <span className={cn(
          "absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent hidden",
          neon && "block"
        )} />
      </button>
    );
  }
);
NeonButton.displayName = 'NeonButton';

export { NeonButton, neonButtonVariants };
