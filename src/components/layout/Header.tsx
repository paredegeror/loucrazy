import Link from 'next/link';
import { PawPrint, Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { products } from '@/lib/mock-data'; // For product detail link

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
    {children}
  </Link>
);

export default function Header() {
  const firstProductSlug = products.length > 0 ? products[0].slug : 'all'; // Fallback if no products

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <PawPrint className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl text-foreground">Pawsome Shop</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/category/all">Category</NavLink>
          <NavLink href={`/products/${firstProductSlug}`}>Product Detail</NavLink>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden sm:flex flex-1 max-w-xs items-center gap-2">
            <Input type="search" placeholder="Search products..." className="h-9" />
            <Button type="submit" size="icon" variant="ghost" className="h-9 w-9">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                   <Link href="/" className="flex items-center gap-2">
                    <PawPrint className="h-6 w-6 text-primary" />
                    <span className="font-semibold text-lg text-foreground">Pawsome Shop</span>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                     </Button>
                  </SheetClose>
                </div>
                <Input type="search" placeholder="Search products..." />
                <nav className="grid gap-4">
                  <SheetClose asChild>
                    <Link href="/" className="font-medium hover:text-primary">Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                     <Link href="/category/all" className="font-medium hover:text-primary">
                       Category
                     </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={`/products/${firstProductSlug}`} className="font-medium hover:text-primary">Product Detail</Link>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
