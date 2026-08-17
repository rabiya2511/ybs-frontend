import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Removes default padding, for cards that need edge-to-edge content like tables. */
  noPadding?: boolean;
}

/**
 * Base surface used across the app for stat cards, list cards, and panels.
 * Keep this the single source of truth for border/radius/shadow so every
 * card in the product looks consistent (Section 25: restrained shadows,
 * subtle borders, generous spacing).
 */
export function Card({ children, noPadding = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={[
        'rounded-(--radius-card) border border-border-subtle bg-surface',
        'shadow-[0_1px_2px_rgba(11,30,61,0.04)]',
        noPadding ? '' : 'p-4.5',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}