"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';

const sortOptions = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Rating: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function SortDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort') || 'popularity';

  const handleSortChange = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('sort', value);
    // Reset page to 1 when sort changes
    current.delete('page'); 
    router.push(`${pathname}?${current.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="sort-by" className="text-sm font-medium text-muted-foreground whitespace-nowrap">Sort by:</Label>
      <Select value={currentSort} onValueChange={handleSortChange}>
        <SelectTrigger id="sort-by" className="w-auto sm:w-[180px] h-9">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
