/**
 * Section Component
 * 
 * Container with title and optional "See all" link
 * Edit classes for:
 * - Title size: text-lg font-semibold
 * - Spacing: mb-3 (title margin)
 * - Link color: text-brand
 */

import React from 'react';

interface SectionProps {
  title: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  action, 
  children, 
  className = '' 
}) => {
  return (
    <section className={className}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {action && (
          <button
            onClick={action.onClick}
            className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            {action.label}
          </button>
        )}
      </div>
      {children}
    </section>
  );
};