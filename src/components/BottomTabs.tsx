/**
 * BottomTabs Component
 * 
 * Fixed bottom navigation with 5 main sections
 * Edit classes for:
 * - Height: h-16
 * - Active color: text-brand, bg-brand/10
 * - Inactive color: text-gray-500
 * - Shadow: shadow-lg
 */

import React from 'react';
import { Home, Calendar, FileText, Activity, Receipt } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const tabs = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'book', label: 'Book', icon: Calendar, path: '/book' },
  { id: 'prescriptions', label: 'Rx', icon: FileText, path: '/prescriptions' },
  { id: 'reports', label: 'Reports', icon: Activity, path: '/reports' },
  { id: 'records', label: 'Records', icon: Receipt, path: '/records' },
];

export const BottomTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg max-w-screen-sm mx-auto pb-safe-bottom">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={clsx(
                "flex flex-col items-center justify-center w-full h-full transition-all relative group",
                "min-w-[44px] min-h-[44px]", // Accessible touch targets
                isActive ? "text-brand" : "text-gray-500 hover:text-gray-700"
              )}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Active indicator pill */}
              {isActive && (
                <div className="absolute inset-x-2 top-1 bottom-1 bg-brand/10 rounded-lg -z-10 animate-fade-in" />
              )}
              
              <Icon className={clsx(
                "w-5 h-5 mb-1 transition-transform",
                isActive && "transform scale-110"
              )} />
              <span className={clsx(
                "text-xs font-medium",
                isActive && "font-semibold"
              )}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};