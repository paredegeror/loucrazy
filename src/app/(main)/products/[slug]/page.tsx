import { products, categories } from '@/lib/mock-data';
import ProductImageGallery from '@/components/product-detail/ProductImageGallery';
import ProductInfoPane from '@/components/product-detail/ProductInfoPane';
import ProductCard from '@/components/shared/ProductCard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PackageOpen } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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

  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4); // Show up to 4 related products

  return (
    <div className="container py-8 md:py-12 max-w-screen-2xl">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <ProductImageGallery images={product.images} altText={product.name} dataAiHint={product.dataAiHint} />
        </div>
        <div>
          <ProductInfoPane product={product} />
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16 md:mt-24">
          <Separator className="my-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center md:text-left">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
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
