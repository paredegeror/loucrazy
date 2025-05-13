"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { mockFilterOptions } from "@/lib/mock-data";

const colorMap: Record<string, string> = {
  'Red': 'bg-red-500',
  'Aquaria': 'bg-teal-400', // Light blue/teal
  'Blue H': 'bg-blue-700', // Dark blue
  'Warm Grey': 'bg-gray-500',
  'Silver': 'bg-gray-300',
  'Yellow': 'bg-yellow-400',
  'Black': 'bg-black',
  'White': 'bg-white border border-gray-300', // White needs a border
  'Brown': 'bg-yellow-700', // Using yellow-700 for brown
};

export default function ColorFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedColors = searchParams.getAll('color');

  const colors = mockFilterOptions.colors;

  const handleColorChange = (color: string, checked: boolean | string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const existingColors = current.getAll('color');
    
    if (checked) {
      if (!existingColors.includes(color)) {
        current.append('color', color);
      }
    } else {
      current.delete('color');
      existingColors.filter(c => c !== color).forEach(c => current.append('color', c));
    }
    current.delete('page'); // Reset page
    router.push(`${pathname}?${current.toString()}`);
  };

  return (
    <div>
      <h4 className="font-semibold mb-2 text-foreground">Color</h4>
      <div className="space-y-2">
        {colors.map((color) => (
          <div key={color} className="flex items-center space-x-2">
            <Checkbox
              id={`color-${color.toLowerCase().replace(' ', '-')}`}
              checked={selectedColors.includes(color)}
              onCheckedChange={(checked) => handleColorChange(color, checked)}
            />
            <Label
              htmlFor={`color-${color.toLowerCase().replace(' ', '-')}`}
              className="font-normal flex items-center cursor-pointer"
            >
              <span
                className={`inline-block w-4 h-4 rounded-sm mr-2 ${colorMap[color] || 'bg-gray-200'}`}
              ></span>
              {color}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
