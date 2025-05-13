"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GenderFilter from "./filters/GenderFilter";
import ColorFilter from "./filters/ColorFilter";
import PriceFilter from "./filters/PriceFilter";
import BrandFilter from "./filters/BrandFilter";
import { Separator } from "@/components/ui/separator";

export default function FilterSidebar() {
  return (
    <Card className="shadow-none border-border/60 sticky top-20 h-fit"> {/* top-16 (header height) + some padding */}
      <CardHeader>
        <CardTitle className="text-xl">Filter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <GenderFilter />
        <Separator />
        <ColorFilter />
        <Separator />
        <PriceFilter />
        <Separator />
        <BrandFilter />
      </CardContent>
    </Card>
  );
}
