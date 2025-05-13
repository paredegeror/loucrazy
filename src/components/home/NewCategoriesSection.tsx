import type { Category } from '@/lib/types';
import CategoryCard from '@/components/shared/CategoryCard';

interface NewCategoriesSectionProps {
  categories: Category[];
}

export default function NewCategoriesSection({ categories }: NewCategoriesSectionProps) {
  return (
    <section id="new-categories" className="py-12 md:py-20 bg-background">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What&apos;s new?</h2>
          <p className="text-lg text-muted-foreground mt-2">Take a look at some of our pet categories.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
