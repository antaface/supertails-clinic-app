/**
 * BottomTabs Component
 * 
 * Fixed bottom navigation with safe area padding
 * Active state: bg-brand-600 text-white rounded-full
 */

import React from 'react';
import { Home, Calendar, FileText, Activity, Receipt } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUI } from '../state/ui';
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
  const wireframe = useUI((state) => state.wireframe);

  return (
    <div className={clsx(
      'max-w-[430px] mx-auto w-full pb-safe-bottom transition-all',
      wireframe 
        ? 'bg-white border-t-2 border-gray-300' 
        : 'bg-white/95 backdrop-blur-md border-t border-brand-100 shadow-[0_-8px_24px_rgba(147,129,255,0.15)]'
    )}>
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={clsx(
                "flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-3 py-2 rounded-full transition-all",
                wireframe 
                  ? isActive 
                    ? "bg-gray-800 text-white" 
                    : "text-gray-500"
                  : isActive 
                    ? "bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg scale-105" 
                    : "text-gray-500 hover:text-brand-600 hover:bg-brand-50"
              )}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={clsx(
                "transition-transform",
                isActive ? "w-5 h-5 scale-110" : "w-5 h-5"
              )} />
              <span className={clsx(
                "text-[10px] mt-0.5",
                isActive ? "font-semibold" : "font-medium"
              )}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};