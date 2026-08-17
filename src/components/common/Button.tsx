import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold' | 'danger';
type ButtonSize = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-navy text-white hover:bg-navy-2 disabled:hover:bg-navy',
  secondary:
    'bg-canvas text-text-primary border border-border-subtle hover:border-gold',
  ghost:
    'bg-transparent text-text-primary hover:bg-canvas',
  gold:
    'bg-gold text-navy hover:bg-gold-light',
  danger:
    'bg-transparent text-danger border border-danger/40 hover:bg-danger/10',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4.5 py-2.5 text-[13px]',
};

/**
 * Base interactive button used across the app. Keep this the single
 * source of truth for hover / active / focus / disabled states so every
 * button in the product behaves consistently.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={[
          'inline-flex items-center justify-center gap-2 rounded-[9px] font-semibold font-sans',
          'transition-colors duration-150',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          className,
        ].join(' ')}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';