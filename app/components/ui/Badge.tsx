'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { classNames } from '~/utils/classNames';

const badgeVariants = cva(
  'inline-flex items-center gap-1 transition-colors focus:outline-none focus:ring-2 focus:ring-wl-elements-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-wl-elements-background text-wl-elements-textPrimary hover:bg-wl-elements-background/80',
        secondary:
          'border-transparent bg-wl-elements-background text-wl-elements-textSecondary hover:bg-wl-elements-background/80',
        destructive: 'border-transparent bg-red-500/10 text-red-500 hover:bg-red-500/20',
        outline: 'text-wl-elements-textPrimary',
        primary: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
        success: 'bg-green-500/10 text-green-600 dark:text-green-400',
        warning: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
        danger: 'bg-red-500/10 text-red-600 dark:text-red-400',
        info: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
        subtle:
          'border border-wl-elements-borderColor/30 dark:border-wl-elements-borderColor-dark/30 bg-white/50 dark:bg-wl-elements-background-depth-4/50 backdrop-blur-sm text-wl-elements-textSecondary dark:text-wl-elements-textSecondary-dark',
      },
      size: {
        default: 'rounded-full px-2.5 py-0.5 text-xs font-semibold',
        sm: 'rounded-full px-1.5 py-0.5 text-xs',
        md: 'rounded-md px-2 py-1 text-xs font-medium',
        lg: 'rounded-md px-2.5 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  icon?: string;
}

function Badge({ className, variant, size, icon, children, ...props }: BadgeProps) {
  return (
    <div className={classNames(badgeVariants({ variant, size }), className)} {...props}>
      {icon && <span className={icon} />}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
