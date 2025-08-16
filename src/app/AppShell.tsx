/**
 * AppShell Component
 * 
 * Main app shell with mobile-first constraints
 * Edit classes for:
 * - Max width: max-w-[430px]
 * - Background: bg-ghost-white
 * - Safe area padding: pt-safe-top, pb-safe-bottom
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar } from '../components/AppBar';
import { BottomTabs } from '../components/BottomTabs';
import { useUI } from '../state/ui';
import clsx from 'clsx';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const location = useLocation();
  const wireframe = useUI((state) => state.wireframe);
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Supertails Clinic';
      case '/book': return 'Book Appointment';
      case '/prescriptions': return 'Prescriptions';
      case '/reports': return 'Diagnostic Reports';
      case '/records': return 'Medical Records';
      case '/billing': return 'Billing & History';
      default: return 'Supertails Clinic';
    }
  };

  // Apply wireframe class to body
  useEffect(() => {
    if (wireframe) {
      document.body.classList.add('wireframe');
    } else {
      document.body.classList.remove('wireframe');
    }
  }, [wireframe]);

  return (
    <div className={clsx(
      'mx-auto w-full max-w-[430px] min-h-screen flex flex-col font-sans antialiased text-gray-900',
      wireframe ? 'bg-white' : 'bg-ghost-white'
    )}>
      {/* Sticky Header with safe area */}
      <header className="sticky top-0 z-50 pt-safe-top">
        <AppBar title={getPageTitle()} />
      </header>
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-20">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      
      {/* Fixed Bottom Navigation with safe area */}
      <nav className="fixed bottom-0 left-0 right-0 z-50">
        <BottomTabs />
      </nav>
    </div>
  );
};