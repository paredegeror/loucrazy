"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    // Simulate subscription
    console.log('Subscribing email:', email);
    toast({
      title: "Subscribed!",
      description: `Thank you for subscribing with ${email}.`,
      variant: "default",
    });
    setEmail('');
  };

  return (
    <section className="py-12 md:py-16 bg-secondary/20"> {/* Using a lighter shade of secondary for background */}
      <div className="container max-w-screen-lg text-center">
        <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Register Now So You Don&apos;t Miss Our Programs
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Stay updated with the latest products, special offers, and pet care tips from Pawsome Shop.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow h-12 text-base bg-background"
            aria-label="Email for newsletter"
          />
          <Button type="submit" size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
