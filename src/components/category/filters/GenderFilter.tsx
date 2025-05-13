"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Product } from "@/lib/types";
import { mockFilterOptions } from "@/lib/mock-data";

export default function GenderFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedGender = searchParams.get('gender') || '';

  const genders = mockFilterOptions.genders;

  const handleGenderChange = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (value === selectedGender || value === 'all') { // 'all' or deselecting current
      current.delete('gender');
    } else {
      current.set('gender', value);
    }
    current.delete('page'); // Reset page
    router.push(`${pathname}?${current.toString()}`);
  };

  return (
    <div>
      <h4 className="font-semibold mb-2 text-foreground">Gender</h4>
      <RadioGroup value={selectedGender} onValueChange={handleGenderChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="gender-all" />
          <Label htmlFor="gender-all" className="font-normal cursor-pointer">Any</Label>
        </div>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center space-x-2">
            <RadioGroupItem value={gender} id={`gender-${gender.toLowerCase()}`} />
            <Label htmlFor={`gender-${gender.toLowerCase()}`} className="font-normal cursor-pointer">
              {gender}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
