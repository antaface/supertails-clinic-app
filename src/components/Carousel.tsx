/**
 * Carousel Component
 * 
 * Horizontal scrolling carousel with snap behavior
 * Uses embla-carousel-react for smooth scrolling
 */

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { useUI } from '../state/ui';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  showControls?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  className = '',
  showControls = false 
}) => {
  const wireframe = useUI((state) => state.wireframe);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={clsx('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">
          {children}
        </div>
      </div>
      
      {showControls && (
        <>
          <button
            onClick={scrollPrev}
            className={clsx(
              "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
              wireframe 
                ? "bg-white border-2 border-gray-400 hover:bg-gray-50" 
                : "bg-white/90 backdrop-blur shadow-md hover:bg-white"
            )}
            aria-label="Previous"
          >
            <ChevronLeft className={clsx("w-4 h-4", wireframe ? "text-gray-600" : "text-gray-700")} />
          </button>
          <button
            onClick={scrollNext}
            className={clsx(
              "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
              wireframe 
                ? "bg-white border-2 border-gray-400 hover:bg-gray-50" 
                : "bg-white/90 backdrop-blur shadow-md hover:bg-white"
            )}
            aria-label="Next"
          >
            <ChevronRight className={clsx("w-4 h-4", wireframe ? "text-gray-600" : "text-gray-700")} />
          </button>
        </>
      )}
    </div>
  );
};

// Simple alternative without Embla for basic horizontal scroll
export const SimpleCarousel: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={clsx(
      'flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2',
      className
    )}>
      {children}
    </div>
  );
};