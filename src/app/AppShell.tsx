/**
 * AppShell Component
 * 
 * Main app shell with sticky header and fixed bottom navigation
 * Edit classes for:
 * - Header height: h-14
 * - Bottom nav height: h-16
 * - Safe area padding: pt-safe-top, pb-safe-bottom
 * - Background color: bg-gray-50
 */

import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar } from '../components/AppBar';
import { BottomTabs } from '../components/BottomTabs';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const location = useLocation();
  
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

  return (
    <div className="min-h-screen bg-gray-50 max-w-screen-sm mx-auto relative">
      {/* Sticky Header */}
      <AppBar title={getPageTitle()} />
      
      {/* Main Content Area with safe area padding */}
      <main className="pt-14 pb-16 min-h-screen">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      
      {/* Fixed Bottom Navigation */}
      <BottomTabs />
    </div>
  );
};