import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imageSrc = category.image || '/images/placeholder-category.jpg'; // Fallback image
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative w-full">
          <Image
            src={imageSrc}
            alt={category.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={category.dataAiHint || 'pet category'}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold mb-2 text-foreground">{category.name}</CardTitle>
        {category.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full group">
          <Link href={`/category/${category.slug}`}>
            View More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
