'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageCompareProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  showNavigation?: boolean;
}

export default function ImageCompare({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Depois',
  onPrevious,
  onNext,
  showNavigation = false,
}: ImageCompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Não iniciar arrasto se clicar em botões de navegação
    if ((e.target as HTMLElement).closest('button')) return;
    setIsDragging(true);
    isDraggingRef.current = true;
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // Não iniciar arrasto se tocar em botões de navegação
    if ((e.target as HTMLElement).closest('button')) return;
    setIsDragging(true);
    isDraggingRef.current = true;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="relative flex items-center gap-2 md:gap-4">
      {showNavigation && onPrevious && (
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-2 border-amber-200 hover:border-amber-400 z-20 flex-shrink-0"
          aria-label="Imagem anterior"
          type="button"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
        </Button>
      )}
      
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt={afterLabel}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-gray-800 absolute left-1" />
            <ChevronRight className="w-5 h-5 text-gray-800 absolute right-1" />
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>

        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {showNavigation && onNext && (
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-2 border-amber-200 hover:border-amber-400 z-20 flex-shrink-0"
          aria-label="Próxima imagem"
          type="button"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
        </Button>
      )}
    </div>
  );
}
