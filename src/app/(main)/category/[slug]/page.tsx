import { products, categories, mockFilterOptions } from '@/lib/mock-data';
import type { Product } from '@/lib/types';
import ProductCard from '@/components/shared/ProductCard';
import PaginationControls from '@/components/shared/PaginationControls';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ListTree } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import FilterSidebar from '@/components/category/FilterSidebar';
import SortDropdown from '@/components/category/SortDropdown';
import CategoryHeroBanner from '@/components/category/CategoryHeroBanner';

const ITEMS_PER_PAGE = 9; // 3 columns * 3 rows

export async function generateStaticParams() {
  const categorySlugs = categories.map((category) => ({ slug: category.slug }));
  return [...categorySlugs, { slug: 'all' }];
}

export default function CategoryPage({ 
  params, 
  searchParams 
}: { 
  params: { slug: string }; 
  searchParams: { 
    page?: string;
    sort?: string;
    gender?: string;
    color?: string | string[];
    brand?: string | string[];
    minPrice?: string;
    maxPrice?: string;
  } 
}) {
  const { slug } = params;
  const currentPage = Number(searchParams?.page) || 1;
  const currentSort = searchParams?.sort || 'popularity';
  
  const selectedGender = searchParams?.gender;
  const selectedColors = typeof searchParams?.color === 'string' ? [searchParams.color] : searchParams?.color;
  const selectedBrands = typeof searchParams?.brand === 'string' ? [searchParams.brand] : searchParams?.brand;
  const minPrice = searchParams?.minPrice ? parseFloat(searchParams.minPrice) : undefined;
  const maxPrice = searchParams?.maxPrice ? parseFloat(searchParams.maxPrice) : undefined;

  const category = categories.find((cat) => cat.slug === slug);
  
  let baseProducts: Product[];
  let pageTitle: string;
  let breadcrumbItems = [{ label: 'Home', href: '/' }];
  let heroImageUrl = '/images/banners/category-hero-all.jpg'; // Default for 'all'
  let heroImageAlt = 'Assortment of happy pets';
  let heroDataAiHint = 'happy pets collage';


  if (slug === 'all') {
    baseProducts = products;
    pageTitle = "All Products";
    breadcrumbItems.push({ label: 'All Products' });
  } else if (category) {
    baseProducts = products.filter((product) => product.categoryId === category.id);
    pageTitle = category.name;
    breadcrumbItems.push({ label: category.name });
    heroImageUrl = category.image || '/images/banners/category-hero-default.jpg'; // Use category image or a default
    heroImageAlt = `${category.name} products`;
    heroDataAiHint = category.dataAiHint || 'pet products';
  } else {
    return (
      <div className="container py-12 max-w-screen-2xl text-center">
        <Alert variant="destructive" className="max-w-md mx-auto">
          <ListTree className="h-4 w-4" />
          <AlertTitle>Category Not Found</AlertTitle>
          <AlertDescription>
            The category you are looking for does not exist.
            <Link href="/" className="block mt-4">
              <Button variant="outline">Go to Homepage</Button>
            </Link>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Apply filters
  let filteredProducts = baseProducts.filter(product => {
    if (selectedGender && product.gender !== selectedGender && selectedGender !== 'Unisex' && product.gender !== 'Unisex') return false;
    if (selectedColors && selectedColors.length > 0 && !selectedColors.some(color => product.colors?.includes(color))) return false;
    if (selectedBrands && selectedBrands.length > 0 && !selectedBrands.includes(product.brand || '')) return false;
    if (minPrice !== undefined && product.price < minPrice) return false;
    if (maxPrice !== undefined && product.price > maxPrice) return false;
    return true;
  });

  // Apply sorting
  if (currentSort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating-desc') {
    filteredProducts.sort((a,b) => (b.rating || 0) - (a.rating || 0));
  } else if (currentSort === 'newest') {
    filteredProducts.sort((a,b) => parseInt(b.id.replace('prod','')) - parseInt(a.id.replace('prod','')));
  }
   else if (currentSort === 'popularity') {
    filteredProducts.sort((a,b) => (b.rating || 0) - (a.rating || 0));
  }


  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container py-8 md:py-12 max-w-screen-2xl">
      <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      
      <div className="md:grid md:grid-cols-[280px_1fr] md:gap-8">
        <FilterSidebar />
        
        <div className="flex flex-col">
          <CategoryHeroBanner 
            title="One More Friend"
            subtitle="Thousands More Fun!"
            description="Monitor your pet's health and stay connected with them, no matter where you are. Explore our range of smart pet products."
            imageUrl={heroImageUrl}
            imageAlt={heroImageAlt}
            dataAiHint={heroDataAiHint}
            primaryButtonText="View Shop"
            primaryButtonLink="/category/all"
            secondaryButtonText="Explore Now"
            secondaryButtonLink="#products"
          />

          <div id="products" className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-6 pt-6"> {/* Added pt-6 for spacing after banner */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{pageTitle}</h1>
              {category?.description && slug !== 'all' && (
                <p className="text-muted-foreground mt-1">{category.description}</p>
              )}
              <p className="text-sm text-muted-foreground mt-1">{totalItems} products available</p>
            </div>
            <SortDropdown />
          </div>

          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {totalPages > 1 && (
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  hasNextPage={currentPage < totalPages}
                  hasPrevPage={currentPage > 1}
                />
              )}
            </>
          ) : (
            <Alert className="max-w-md mx-auto text-center mt-8">
              <ListTree className="h-4 w-4 mx-auto mb-2" />
              <AlertTitle>No Products Found</AlertTitle>
              <AlertDescription>
                No products match your current filters. Try adjusting them or check back soon!
                <Link href={`/category/${slug}`} className="block mt-4">
                  <Button variant="outline">Clear Filters for this Category</Button>
                </Link>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (slug === 'all') {
    return { title: 'All Products | Pawsome Shop' };
  }
  const category = categories.find((cat) => cat.slug === slug);
  return {
    title: `${category ? category.name : 'Category'} | Pawsome Shop`,
    description: category?.description || `Browse products in the ${category?.name} category.`,
  };
}
