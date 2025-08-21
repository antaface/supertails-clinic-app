/**
 * Accordion Component
 * 
 * Expandable content sections with smooth animations
 * Uses @headlessui/react for accessibility
 */

import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useUI } from '../state/ui';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  title, 
  children, 
  defaultOpen = false 
}) => {
  const wireframe = useUI((state) => state.wireframe);
  
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div className={clsx(
          "rounded-2xl overflow-hidden",
          wireframe 
            ? "bg-white border-2 border-gray-400" 
            : "bg-white shadow-sm border border-periwinkle-800/10"
        )}>
          <Disclosure.Button className={clsx(
            "w-full px-5 py-4 flex items-center justify-between transition-colors",
            wireframe ? "hover:bg-gray-50" : "hover:bg-ghost-white/50"
          )}>
            <h3 className="text-left font-semibold text-gray-900">{title}</h3>
            <ChevronDown
              className={clsx(
                'w-5 h-5 transition-transform duration-200',
                wireframe ? 'text-gray-600' : 'text-gray-500',
                open && 'rotate-180'
              )}
            />
          </Disclosure.Button>
          
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-5 pb-4">
              <div className={clsx(
                "border-t pt-4",
                wireframe ? "border-gray-300" : "border-periwinkle-800/5"
              )}>
                {children}
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};