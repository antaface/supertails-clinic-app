/**
 * Card Component
 * 
 * Rounded container with shadow and hover states
 * Edit classes for:
 * - Rounding: rounded-2xl
 * - Shadow: shadow-md hover:shadow-lg
 * - Padding: p-4
 * - Background: bg-white
 */

import React from 'react';
import clsx from 'clsx';
import { useUI } from '../state/ui';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'elevated' | 'outlined';
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
      }
    : {
        default: 'bg-white shadow-md hover:shadow-lg',
        elevated: 'bg-white shadow-lg hover:shadow-xl',
        outlined: 'bg-white border-2 border-gray-200 hover:border-gray-300',
      };

  return (
    <div
      className={clsx(
        'rounded-2xl p-4 transition-all duration-200',
        variants[variant],
        onClick && 'cursor-pointer active:scale-[0.98]',
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