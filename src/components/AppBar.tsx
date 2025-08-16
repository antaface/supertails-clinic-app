import React from 'react';
import { ArrowLeft, Grid3x3 } from 'lucide-react';
import { useWireframe } from '../contexts/WireframeContext';

interface AppBarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({ title, showBack, onBack }) => {
  const { isWireframe, toggleWireframe } = useWireframe();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 max-w-mobile mx-auto">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3">
          {showBack && (
            <button onClick={onBack} className="p-1">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        </div>
        <button
          onClick={toggleWireframe}
          className="p-2 rounded-lg hover:bg-gray-100"
          title={isWireframe ? "Disable wireframe mode" : "Enable wireframe mode"}
        >
          <Grid3x3 className={`w-5 h-5 ${isWireframe ? 'text-gray-600' : 'text-blue-600'}`} />
        </button>
      </div>
    </div>
  );
};