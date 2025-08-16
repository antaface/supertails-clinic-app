import React from 'react';
import { Home, Calendar, FileText, Activity, Receipt, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'book', label: 'Book', icon: Calendar, path: '/book' },
  { id: 'prescriptions', label: 'Rx', icon: FileText, path: '/prescriptions' },
  { id: 'reports', label: 'Reports', icon: Activity, path: '/reports' },
  { id: 'records', label: 'Records', icon: Receipt, path: '/records' },
  { id: 'billing', label: 'Bills', icon: Receipt, path: '/billing' },
];

export const BottomTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-mobile mx-auto">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center w-full h-full ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};