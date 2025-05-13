import HeroSection from '@/components/home/HeroSection';
import NewCategoriesSection from '@/components/home/NewCategoriesSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import { categories, products } from '@/lib/mock-data';

export default function HomePage() {
  // Typically, you'd fetch this data or pass it from a server component
  const featuredCategories = categories.slice(0, 4); // Show 4 categories
  const featuredProducts = products.slice(0, 8); // Show 8 products

  return (
    <>
      <HeroSection />
      <NewCategoriesSection categories={featuredCategories} />
      <FeaturedProductsSection products={featuredProducts} />
    </>
  );
}
