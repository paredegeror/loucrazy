import type { Product } from '@/lib/types';
import ProductCard from '@/components/shared/ProductCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductsSectionProps {
  products: Product[];
}

export default function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Hard to choose right products for your pets?</h2>
          <p className="text-lg text-muted-foreground mt-2">Our Products</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/category/all">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
