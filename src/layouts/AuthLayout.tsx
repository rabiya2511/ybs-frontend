import type { ReactNode } from 'react';

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-[380px]">
        <div className="mb-6 text-center">
          <div className="font-display text-2xl font-bold text-navy dark:text-white">DIOS</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.08em] text-text-muted">
            Digital Intelligence Operating System
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}