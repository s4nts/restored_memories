'use client';

import Image from 'next/image';
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
  return (
    <div className="relative flex items-center gap-2 md:gap-4">
      {showNavigation && onPrevious && (
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-2 border-amber-200 hover:border-amber-400 z-20 flex-shrink-0"
          aria-label="Imagem anterior"
          type="button"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
        </Button>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        <div className="relative w-full h-[400px] md:h-[600px] bg-gray-100 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
          <Image
            src={beforeImage}
            alt={beforeLabel}
            width={800}
            height={600}
            className="object-contain max-w-full max-h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
            {beforeLabel}
          </div>
        </div>

        <div className="relative w-full h-[400px] md:h-[600px] bg-gray-100 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
          <Image
            src={afterImage}
            alt={afterLabel}
            width={800}
            height={600}
            className="object-contain max-w-full max-h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
            {afterLabel}
          </div>
        </div>
      </div>

      {showNavigation && onNext && (
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
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
