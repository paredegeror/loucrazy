"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { mockFilterOptions } from "@/lib/mock-data";

export default function BrandFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedBrands = searchParams.getAll('brand');

  const brands = mockFilterOptions.brands;

  const handleBrandChange = (brand: string, checked: boolean | string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const existingBrands = current.getAll('brand');

    if (checked) {
      if (!existingBrands.includes(brand)) {
        current.append('brand', brand);
      }
    } else {
      current.delete('brand');
      existingBrands.filter(b => b !== brand).forEach(b => current.append('brand', b));
    }
    current.delete('page'); // Reset page
    router.push(`${pathname}?${current.toString()}`);
  };

  return (
    <div>
      <h4 className="font-semibold mb-2 text-foreground">Brand</h4>
      <div className="space-y-2">
        {brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox
              id={`brand-${brand.toLowerCase()}`}
              checked={selectedBrands.includes(brand)}
              onCheckedChange={(checked) => handleBrandChange(brand, checked)}
            />
            <Label htmlFor={`brand-${brand.toLowerCase()}`} className="font-normal cursor-pointer">
              {brand}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
