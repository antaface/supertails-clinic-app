/**
 * AppBar Component
 * 
 * Sticky top navigation bar with title and wireframe toggle
 * Edit classes for:
 * - Height: h-14
 * - Background: bg-white (default) or bg-brand-600 (polished active)
 * - Shadow: shadow-sm
 * - Border: border-b border-gray-100
 */

import React from 'react';
import { ArrowLeft, Sparkles, Grid3x3 } from 'lucide-react';
import { useUI } from '../state/ui';
import clsx from 'clsx';

interface AppBarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({ title, showBack, onBack }) => {
  const wireframe = useUI((state) => state.wireframe);
  const toggle = useUI((state) => state.toggle);

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 max-w-screen-sm mx-auto transition-all',
      wireframe 
        ? 'bg-white border-b-2 border-gray-300' 
        : 'bg-white shadow-sm border-b border-gray-100'
    )}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3">
          {showBack && (
            <button 
              onClick={onBack} 
              className="p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className={clsx(
                'w-5 h-5',
                wireframe ? 'text-gray-700' : 'text-gray-700'
              )} />
            </button>
          )}
          <h1 className="text-lg font-bold tracking-tight text-gray-900">{title}</h1>
        </div>
        <button
          onClick={toggle}
          className={clsx(
            "p-2 rounded-lg transition-all",
            wireframe 
              ? "bg-gray-100 text-gray-600 hover:bg-gray-200" 
              : "bg-brand-100 text-brand-600 hover:bg-brand-200"
          )}
          title={wireframe ? "Switch to polished mode" : "Switch to wireframe mode"}
          aria-label="Toggle UI mode"
        >
          {wireframe ? (
            <Grid3x3 className="w-5 h-5" />
          ) : (
            <Sparkles className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
};