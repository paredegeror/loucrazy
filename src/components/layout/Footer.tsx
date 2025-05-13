import { PawPrint, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container py-8 max-w-screen-2xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl text-foreground">Pawsome Shop</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for all pet needs! Quality products for happy pets.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            {/* Newsletter form can be added here */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/60 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pawsome Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
