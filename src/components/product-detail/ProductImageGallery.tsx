"use client";

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ShieldCheck, BadgeCheck } from 'lucide-react'; // Added BadgeCheck

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
      <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden border shadow-md"> {/* Changed aspect ratio to match image */}
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
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2"> {/* Adjusted to 6 for more thumbnails */}
          {images.slice(0,6).map((image, index) => ( // Show up to 6 thumbnails
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
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md text-sm">
          <ShieldCheck className="h-6 w-6 text-green-600" />
          <span className="text-green-700 font-medium">100% Health guarantee for pets</span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-md text-sm">
          <BadgeCheck className="h-6 w-6 text-blue-600" />
          <span className="text-blue-700 font-medium">100% Guarantee of pet identification</span>
        </div>
      </div>
    </div>
  );
}
