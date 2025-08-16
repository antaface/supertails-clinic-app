/**
 * Card Component
 * 
 * Rounded container with new brand palette
 * Edit classes for:
 * - Rounding: rounded-2xl
 * - Shadow: shadow-sm
 * - Border: border-periwinkle-800/10
 * - Padding: p-4 md:p-5
 */

import React from 'react';
import clsx from 'clsx';
import { useUI } from '../state/ui';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  variant = 'default' 
}) => {
  const wireframe = useUI((state) => state.wireframe);
  
  const variants = wireframe
    ? {
        default: 'bg-white border-2 border-gray-400',
        elevated: 'bg-white border-2 border-gray-500',
        outlined: 'bg-white border-2 border-gray-300',
        gradient: 'bg-white border-2 border-gray-600',
      }
    : {
        default: 'bg-white shadow-sm border border-periwinkle-800/10',
        elevated: 'bg-white shadow-md border border-periwinkle-800/10',
        outlined: 'bg-white border-2 border-periwinkle-200',
        gradient: 'bg-gradient-to-br from-brand-500 to-periwinkle-500 text-white',
      };

  return (
    <div
      className={clsx(
        'rounded-2xl p-4 md:p-5 transition-all duration-150',
        variants[variant],
        onClick && 'cursor-pointer active:scale-[0.98] hover:shadow-md',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};