/**
 * List Component
 * 
 * List container and list items with leading icons
 * Edit classes for:
 * - Item padding: px-4 py-3
 * - Hover state: hover:bg-gray-50
 * - Icon size: w-5 h-5
 * - Border: border-b border-gray-100
 */

import React from 'react';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface ListItemProps {
  title: string;
  subtitle?: string;
  rightText?: string;
  onClick?: () => void;
  showArrow?: boolean;
  icon?: React.ReactNode;
  selected?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  rightText,
  onClick,
  showArrow = true,
  icon,
  selected = false,
}) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between px-4 py-3 bg-white transition-colors',
        'border-b border-gray-100 last:border-b-0',
        onClick && 'cursor-pointer hover:bg-gray-50 active:bg-gray-100',
        selected && 'bg-brand/5'
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {icon && (
          <div className="text-gray-500 flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-gray-900 font-medium truncate">{title}</div>
          {subtitle && (
            <div className="text-sm text-gray-500 truncate">{subtitle}</div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {rightText && (
          <span className="text-sm text-gray-500">{rightText}</span>
        )}
        {showArrow && onClick && (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </div>
    </div>
  );
};

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const List: React.FC<ListProps> = ({ children, className = '' }) => {
  return (
    <div className={clsx(
      'bg-white rounded-2xl overflow-hidden shadow-sm',
      className
    )}>
      {children}
    </div>
  );
};