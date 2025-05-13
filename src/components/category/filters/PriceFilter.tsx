"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function PriceFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');

  useEffect(() => {
    setMinPrice(searchParams.get('minPrice') || '');
    setMaxPrice(searchParams.get('maxPrice') || '');
  }, [searchParams]);

  const handleApplyPriceFilter = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (minPrice) {
      current.set('minPrice', minPrice);
    } else {
      current.delete('minPrice');
    }
    if (maxPrice) {
      current.set('maxPrice', maxPrice);
    } else {
      current.delete('maxPrice');
    }
    current.delete('page'); // Reset page
    router.push(`${pathname}?${current.toString()}`);
  };

  return (
    <div>
      <h4 className="font-semibold mb-2 text-foreground">Price</h4>
      <div className="flex items-center space-x-2 mb-2">
        <div className="flex-1">
          <Label htmlFor="min-price" className="sr-only">Min Price</Label>
          <Input
            id="min-price"
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="h-9"
            min="0"
          />
        </div>
        <span className="text-muted-foreground">-</span>
        <div className="flex-1">
          <Label htmlFor="max-price" className="sr-only">Max Price</Label>
          <Input
            id="max-price"
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="h-9"
            min="0"
          />
        </div>
      </div>
      <Button onClick={handleApplyPriceFilter} size="sm" className="w-full h-9">Apply</Button>
    </div>
  );
}
