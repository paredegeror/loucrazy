import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CategoryHeroBannerProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  dataAiHint?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export default function CategoryHeroBanner({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  dataAiHint,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CategoryHeroBannerProps) {
  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-primary/20 via-background to-secondary/20 shadow-lg">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          data-ai-hint={dataAiHint || 'pets banner'}
        />
         <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
      </div>
      <div className="relative container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {title}
            <br />
            <span className="text-primary">{subtitle}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-2">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-base">
              <Link href={primaryButtonLink}>
                {primaryButtonText}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-6 py-3 text-base">
              <Link href={secondaryButtonLink}>
                {secondaryButtonText}
              </Link>
            </Button>
          </div>
        </div>
        {/* Optional: Add a visual element or leave empty for text focus */}
         <div className="hidden md:block relative aspect-video max-w-md mx-auto md:max-w-none md:aspect-[16/9] rounded-lg overflow-hidden shadow-xl opacity-0 pointer-events-none">
          {/* This div is for layout balance, content is primarily on the left. Actual image is background. */}
        </div>
      </div>
    </div>
  );
}
