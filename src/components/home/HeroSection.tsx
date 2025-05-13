import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 via-background to-secondary/10 py-16 md:py-24">
      <div className="container max-w-screen-2xl grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Everything Your<br /> <span className="text-primary">Pawsome Pal</span> Needs!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            Discover a wide range of quality pet supplies, from nutritious food to fun toys. Give your furry, feathered, or finned friends the best!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/category/all">
                Shop All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="#new-categories">
                Explore Categories
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-xl mx-auto md:max-w-none md:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/images/home/hero-pets.jpg" // Updated path
            alt="Happy pets"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="happy pets collage"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
