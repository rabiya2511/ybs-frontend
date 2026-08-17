import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';

/**
 * Top-level authenticated shell: fixed sidebar + topbar with a scrolling
 * content area between them. Individual pages render via <Outlet /> and
 * should not re-implement page chrome themselves.
 */
export function DashboardLayout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-canvas">
      <Sidebar isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onMenuClick={() => setIsMobileNavOpen(true)} />

        <main className="scroll-thin flex-1 overflow-x-hidden overflow-y-auto px-4 py-6 sm:px-7 sm:py-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}