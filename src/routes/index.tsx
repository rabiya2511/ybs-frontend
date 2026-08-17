import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { AuthGuard } from '@/components/auth/AuthGuard';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Services from '@/pages/Services';
import Packages from '@/pages/Packages';
import Checkout from '@/pages/Checkout';
import ProjectTracker from '@/pages/ProjectTracker';
import Notifications from '@/pages/Notifications';
import Referral from '@/pages/Referral';
import Profile from '@/pages/Profile';
import AIAssistant from '@/pages/AIAssistant';

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/services', element: <Services /> },
      { path: '/packages/:serviceId?', element: <Packages /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/projects', element: <ProjectTracker /> },
      { path: '/notifications', element: <Notifications /> },
      { path: '/referrals', element: <Referral /> },
      { path: '/profile', element: <Profile /> },
      { path: '/assistant', element: <AIAssistant /> },
      { path: '*', element: <Navigate to="/dashboard" replace /> },
    ],
  },
]);