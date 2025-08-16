/**
 * AppBar Component
 * 
 * Sticky top navigation bar with title and wireframe toggle
 * Edit classes for:
 * - Height: h-14
 * - Background: bg-white
 * - Shadow: shadow-sm
 * - Border: border-b border-gray-100
 */

import React from 'react';
import { ArrowLeft, Sparkles, Grid3x3 } from 'lucide-react';
import { useWireframe } from '../contexts/WireframeContext';
import clsx from 'clsx';

interface AppBarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({ title, showBack, onBack }) => {
  const { isWireframe, toggleWireframe } = useWireframe();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-100 z-50 max-w-screen-sm mx-auto">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3">
          {showBack && (
            <button 
              onClick={onBack} 
              className="p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          <h1 className="text-lg font-semibold text-gray-900 tracking-tight">{title}</h1>
        </div>
        <button
          onClick={toggleWireframe}
          className={clsx(
            "p-2 rounded-lg transition-all",
            isWireframe 
              ? "bg-gray-100 text-gray-600" 
              : "bg-brand/10 text-brand hover:bg-brand/20"
          )}
          title={isWireframe ? "Switch to polished mode" : "Switch to wireframe mode"}
          aria-label="Toggle UI mode"
        >
          {isWireframe ? (
            <Grid3x3 className="w-5 h-5" />
          ) : (
            <Sparkles className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
};