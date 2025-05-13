import type { Product } from '@/lib/types';
import { Star, CheckCircle, ShieldCheck, CalendarDays, MessageSquare } from 'lucide-react';
import ContactFormModal from '@/components/shared/ContactFormModal';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface ProductInfoPaneProps {
  product: Product;
}

const InfoRow = ({ label, value }: { label: string; value?: string | number | boolean | null }) => {
  if (value === undefined || value === null || value === '') return null;
  let displayValue: React.ReactNode = value.toString();
  if (typeof value === 'boolean') {
    displayValue = value ? <CheckCircle className="w-5 h-5 text-green-500" /> : <span className="text-muted-foreground">No</span>;
  }
   if (label === "Published Date" && typeof value === 'string') {
    try {
      displayValue = format(new Date(value), "dd MMM yyyy");
    } catch (e) {
      // fallback to original string if date is invalid
      displayValue = value;
    }
  }


  return (
    <div className="flex justify-between py-2 border-b border-border/50">
      <span className="text-sm text-muted-foreground">{label}:</span>
      <span className="text-sm font-medium text-foreground text-right">
        {displayValue}
      </span>
    </div>
  );
};


export default function ProductInfoPane({ product }: ProductInfoPaneProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{product.name}</h1>
         <p className="text-3xl font-extrabold text-primary mt-2 mb-1">${product.price.toFixed(2)}</p>
        {product.sku && <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>}
      </div>
      
      {product.rating && (
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4", // Smaller stars
                  i < Math.round(product.rating || 0) ? "text-accent fill-accent" : "text-muted-foreground/30"
                )}
              />
            ))}
          </div>
          <span className="text-muted-foreground text-xs">({product.rating.toFixed(1)} rating)</span>
        </div>
      )}

      {product.stock && product.stock > 0 && (
        <Badge variant={product.stock < 10 ? "destructive" : "default"} className="text-xs py-0.5 px-2">
          {product.stock < 10 ? `Only ${product.stock} left!` : `${product.stock} in stock`}
        </Badge>
      )}
      {product.stock === 0 && (
        <Badge variant="outline" className="text-xs py-0.5 px-2">Out of Stock</Badge>
      )}

      <div className="space-y-1">
        <InfoRow label="Gender" value={product.gender} />
        <InfoRow label="Age" value={product.age} />
        <InfoRow label="Color" value={product.colors?.join(', ')} />
        <InfoRow label="Size" value={product.size} />
        <InfoRow label="Brand" value={product.brand} />
        <InfoRow label="Vaccinated" value={product.vaccinated} />
        <InfoRow label="Dewormed" value={product.dewormed} />
        <InfoRow label="Certification" value={product.cert} />
        <InfoRow label="Microchip ID" value={product.microchip} />
        <InfoRow label="Location" value={product.location} />
        <InfoRow label="Published Date" value={product.publishedDate} />
      </div>
      
      <Separator />

      <div className="prose prose-sm max-w-none text-foreground">
        <h3 className="text-lg font-semibold text-foreground mb-1">Product Description</h3>
        <p className="text-sm">{product.description}</p>
        {product.additionalInfo && (
            <>
                <h3 className="text-lg font-semibold text-foreground mt-3 mb-1">Additional Information</h3>
                <p className="text-sm">{product.additionalInfo}</p>
            </>
        )}
      </div>
      
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <ContactFormModal 
          productName={product.name}
          triggerButton={
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3 px-6 flex-1">
              Contact Us
            </Button>
          }
        />
        <Button variant="outline" size="lg" className="w-full sm:w-auto text-base py-3 px-6 flex-1">
          <MessageSquare className="mr-2 h-5 w-5" /> Chat with Pawsome
        </Button>
      </div>
    </div>
  );
}

// Helper function to avoid purge issues with dynamic classes, used in Star rating
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
