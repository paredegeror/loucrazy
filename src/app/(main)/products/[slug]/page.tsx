import { products, categories } from '@/lib/mock-data';
import ProductImageGallery from '@/components/product-detail/ProductImageGallery';
import ProductInfoPane from '@/components/product-detail/ProductInfoPane';
import ProductCard from '@/components/shared/ProductCard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PackageOpen } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CustomerPhotos from '@/components/product-detail/CustomerPhotos';
import NewsletterSubscription from '@/components/shared/NewsletterSubscription';
import type { Category } from '@/lib/types';


export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container py-12 max-w-screen-2xl text-center">
         <Alert variant="destructive" className="max-w-md mx-auto">
          <PackageOpen className="h-4 w-4" />
          <AlertTitle>Product Not Found</AlertTitle>
          <AlertDescription>
            The product you are looking for does not exist or may have been removed.
             <Link href="/" className="block mt-4">
              <Button variant="outline">Go to Homepage</Button>
            </Link>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const category = categories.find(cat => cat.id === product.categoryId);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    category ? { label: category.name, href: `/category/${category.slug}` } : { label: 'Products', href: '/category/all' },
    { label: product.name },
  ];

  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4); // Show up to 4 related products

  return (
    <div className="bg-background">
      <div className="container py-8 md:py-12 max-w-screen-2xl">
        <Breadcrumbs items={breadcrumbItems} className="mb-6 md:mb-8" />
        
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12"> {/* Changed to 5 columns for layout */}
          <div className="md:col-span-3"> {/* Image gallery takes 3/5 */}
            <ProductImageGallery images={product.images} altText={product.name} dataAiHint={product.dataAiHint} />
          </div>
          <div className="md:col-span-2"> {/* Product info takes 2/5 */}
            <ProductInfoPane product={product} />
          </div>
        </div>
      </div>

      <CustomerPhotos />

      {relatedProducts.length > 0 && (
        <div className="bg-background py-12 md:py-16">
          <div className="container max-w-screen-2xl">
            <div className="text-left mb-8"> {/* Changed to text-left as per image */}
              <p className="text-sm text-primary font-semibold mb-1">What&apos;s new?</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">See More Pets</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </div>
      )}
      <NewsletterSubscription />
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  return {
    title: `${product ? product.name : 'Product'} | Pawsome Shop`,
    description: product?.description.substring(0, 150) || 'Check out this amazing pet product!',
  };
}
