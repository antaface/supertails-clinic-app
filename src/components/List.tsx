import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ListItemProps {
  title: string;
  subtitle?: string;
  rightText?: string;
  onClick?: () => void;
  showArrow?: boolean;
  icon?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  rightText,
  onClick,
  showArrow = true,
  icon,
}) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 ${
        onClick ? 'cursor-pointer hover:bg-gray-50' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 flex-1">
        {icon && <div className="text-gray-500">{icon}</div>}
        <div className="flex-1">
          <div className="text-gray-900 font-medium">{title}</div>
          {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {rightText && <span className="text-sm text-gray-500">{rightText}</span>}
        {showArrow && onClick && <ChevronRight className="w-5 h-5 text-gray-400" />}
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
    <div className={`bg-white rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};