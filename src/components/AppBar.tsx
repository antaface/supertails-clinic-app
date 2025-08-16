/**
 * AppBar Component
 * 
 * Sticky top navigation bar (56-64px height)
 * Edit classes for:
 * - Height: h-14 or h-16
 * - Background: bg-white
 * - Border: border-b border-periwinkle-800/10
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
    <div className={clsx(
      'h-14 bg-white flex items-center justify-between px-4 transition-all',
      wireframe 
        ? 'border-b-2 border-gray-300' 
        : 'border-b border-periwinkle-800/10 shadow-sm'
    )}>
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={onBack} 
            className="p-2 -ml-2 rounded-lg hover:bg-ghost-white transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
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
            : "bg-brand-50 text-brand-600 hover:bg-brand-100"
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
  );
};