import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-xs font-medium text-text-primary">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={[
            'rounded-[9px] border bg-surface px-3.5 py-2.5 text-[13px] text-text-primary outline-none transition-colors',
            'placeholder:text-text-muted focus:border-gold',
            error ? 'border-danger' : 'border-border-subtle',
            className,
          ].join(' ')}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <span id={`${inputId}-error`} className="text-[11px] text-danger">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';