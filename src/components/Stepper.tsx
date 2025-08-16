/**
 * Stepper Component
 * 
 * Multi-step progress indicator
 * Edit classes for:
 * - Active color: bg-brand
 * - Complete color: bg-green-500
 * - Inactive color: bg-gray-200
 * - Size: w-8 h-8 (circles)
 */

import React from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

interface Step {
  id: string;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep, className = '' }) => {
  return (
    <div className={clsx(
      'flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-14 z-40',
      className
    )}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <div
              className={clsx(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all',
                index < currentStep
                  ? 'bg-green-500 text-white shadow-md'
                  : index === currentStep
                  ? 'bg-brand text-white shadow-md animate-pulse'
                  : 'bg-gray-200 text-gray-500'
              )}
            >
              {index < currentStep ? (
                <Check className="w-4 h-4" />
              ) : (
                <span className="font-semibold">{index + 1}</span>
              )}
            </div>
            <span className={clsx(
              'text-xs mt-1 font-medium',
              index <= currentStep ? 'text-gray-900' : 'text-gray-400'
            )}>
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 mx-2">
              <div className="h-0.5 bg-gray-200 relative">
                <div
                  className={clsx(
                    'absolute inset-y-0 left-0 bg-green-500 transition-all duration-300',
                    index < currentStep ? 'right-0' : 'right-full'
                  )}
                />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};