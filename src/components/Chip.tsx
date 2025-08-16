/**
 * Chip Component
 * 
 * Status pills/chips with color-coded states
 * Edit classes for:
 * - Rounding: rounded-full
 * - Padding: px-3 py-1
 * - Colors: defined in statusColors object
 */

import React from 'react';
import clsx from 'clsx';

interface ChipProps {
  label: string;
  status?: 'success' | 'warning' | 'danger' | 'info' | 'default';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ 
  label, 
  status = 'default',
  size = 'sm',
  icon 
}) => {
  const statusColors = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-amber-100 text-amber-800 border-amber-200',
    danger: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    default: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={clsx(
      'inline-flex items-center gap-1 font-medium rounded-full border',
      statusColors[status],
      sizeClasses[size]
    )}>
      {icon && <span className="w-3 h-3">{icon}</span>}
      {label}
    </span>
  );
};