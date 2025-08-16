/**
 * Button Component
 * 
 * Flexible button with multiple variants and sizes
 * Edit classes for:
 * - Rounding: rounded-xl
 * - Colors: bg-brand-600 (primary), bg-gray-100 (ghost), bg-red-500 (danger)
 * - Sizes: text-sm/base/lg with corresponding padding
 */

import React from 'react';
import clsx from 'clsx';
import { useUI } from '../state/ui';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const wireframe = useUI((state) => state.wireframe);
  
  const baseClasses = 'font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = wireframe 
    ? {
        primary: 'bg-gray-800 text-white border-2 border-gray-800',
        ghost: 'bg-transparent text-gray-800 border-2 border-gray-300',
        danger: 'bg-gray-800 text-white border-2 border-gray-800',
        outline: 'border-2 border-gray-600 text-gray-800',
      }
    : {
        primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg focus:ring-brand-300',
        ghost: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        danger: 'bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg',
        outline: 'border-2 border-brand-600 text-brand-600 hover:bg-brand-50',
      };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
    >
      {children}
    </button>
  );
};