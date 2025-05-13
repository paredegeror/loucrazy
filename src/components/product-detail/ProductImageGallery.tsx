"use client";

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductImageGalleryProps {
  images: string[];
  altText: string;
  dataAiHint?: string;
}

export default function ProductImageGallery({ images, altText, dataAiHint }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
        No Image Available
      </div>
    );
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square w-full relative rounded-lg overflow-hidden border shadow-md">
        <Image
          src={images[currentImageIndex]}
          alt={`${altText} - Image ${currentImageIndex + 1}`}
          layout="fill"
          objectFit="cover"
          priority={currentImageIndex === 0}
          data-ai-hint={dataAiHint || 'product image'}
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={cn(
                "aspect-square relative rounded-md overflow-hidden border-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all",
                currentImageIndex === index ? "border-primary shadow-lg" : "border-transparent hover:border-muted-foreground/50"
              )}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${altText} - Thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
                data-ai-hint={dataAiHint || 'product thumbnail'}
              />
              {currentImageIndex === index && <div className="absolute inset-0 bg-primary/30"></div>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
