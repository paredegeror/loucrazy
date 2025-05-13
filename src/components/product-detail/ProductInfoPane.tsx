import type { Product } from '@/lib/types';
import { Star, CheckCircle, ShieldCheck } from 'lucide-react';
import ContactFormModal from '@/components/shared/ContactFormModal';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ProductInfoPaneProps {
  product: Product;
}

export default function ProductInfoPane({ product }: ProductInfoPaneProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{product.name}</h1>
        {product.sku && <p className="text-sm text-muted-foreground mt-1">SKU: {product.sku}</p>}
      </div>

      {product.rating && (
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < Math.round(product.rating || 0) ? "text-accent fill-accent" : "text-muted-foreground/50"
                )}
              />
            ))}
          </div>
          <span className="text-muted-foreground text-sm">({product.rating.toFixed(1)} rating)</span>
        </div>
      )}

      <p className="text-4xl font-extrabold text-primary">${product.price.toFixed(2)}</p>

      {product.stock && product.stock > 0 && (
        <Badge variant={product.stock < 10 ? "destructive" : "default"} className="text-sm py-1 px-3">
          {product.stock < 10 ? `Only ${product.stock} left!` : `${product.stock} in stock`}
        </Badge>
      )}
      {product.stock === 0 && (
        <Badge variant="outline" className="text-sm py-1 px-3">Out of Stock</Badge>
      )}

      <Separator />

      <div className="prose prose-sm sm:prose-base max-w-none text-foreground">
        <h3 className="text-xl font-semibold text-foreground mb-2">Product Description</h3>
        <p>{product.description}</p>
      </div>

      <div className="space-y-3 pt-2">
         <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>High Quality Materials</span>
         </div>
         <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Vet Approved (Simulated)</span>
         </div>
      </div>

      <Separator />
      
      <div className="pt-2">
        <ContactFormModal productName={product.name} />
      </div>
    </div>
  );
}

// Helper function to avoid purge issues with dynamic classes, used in Star rating
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
