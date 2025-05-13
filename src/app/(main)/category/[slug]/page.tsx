import { products, categories } from '@/lib/mock-data';
import type { Product } from '@/lib/types';
import ProductCard from '@/components/shared/ProductCard';
import PaginationControls from '@/components/shared/PaginationControls';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ListTree } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ITEMS_PER_PAGE = 8;

export async function generateStaticParams() {
  // Add 'all' to static params for /category/all
  const categorySlugs = categories.map((category) => ({ slug: category.slug }));
  return [...categorySlugs, { slug: 'all' }];
}

export default function CategoryPage({ params, searchParams }: { params: { slug: string }; searchParams: { page?: string } }) {
  const { slug } = params;
  const currentPage = Number(searchParams?.page) || 1;

  const category = categories.find((cat) => cat.slug === slug);
  
  let categoryProducts: Product[];
  let pageTitle: string;

  if (slug === 'all') {
    categoryProducts = products;
    pageTitle = "All Products";
  } else if (category) {
    categoryProducts = products.filter((product) => product.categoryId === category.id);
    pageTitle = category.name;
  } else {
    // Category not found
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

  const totalItems = categoryProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginatedProducts = categoryProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container py-8 md:py-12 max-w-screen-2xl">
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">{pageTitle}</h1>
        {category?.description && slug !== 'all' && (
          <p className="text-lg text-muted-foreground mt-2">{category.description}</p>
        )}
      </div>

      {paginatedProducts.length > 0 ? (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
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
        <Alert className="max-w-md mx-auto">
          <ListTree className="h-4 w-4" />
          <AlertTitle>No Products Found</AlertTitle>
          <AlertDescription>
            There are no products available in this category yet. Check back soon!
            <Link href="/" className="block mt-4">
              <Button variant="outline">Explore Other Categories</Button>
            </Link>
          </AlertDescription>
        </Alert>
      )}
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
