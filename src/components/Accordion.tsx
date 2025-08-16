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
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div className="bg-white rounded-2xl shadow-sm border border-periwinkle-800/10 overflow-hidden">
          <Disclosure.Button className="w-full px-5 py-4 flex items-center justify-between hover:bg-ghost-white/50 transition-colors">
            <h3 className="text-left font-semibold text-gray-900">{title}</h3>
            <ChevronDown
              className={clsx(
                'w-5 h-5 text-gray-500 transition-transform duration-200',
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
              <div className="border-t border-periwinkle-800/5 pt-4">
                {children}
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};