"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).regex(/^\+?[0-9\s-]+$/, "Invalid phone number format."),
  email: z.string().email({ message: "Invalid email address." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormModalProps {
  productName?: string;
}

export default function ContactFormModal({ productName }: ContactFormModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      city: "",
      state: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log("Form data submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    toast({
      title: "Form Submitted!",
      description: `Thank you, ${data.fullName}. We've received your inquiry about ${productName || 'our products'} and will be in touch soon.`,
      variant: "default", 
    });
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3 px-6">
          <Send className="mr-2 h-5 w-5" /> Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] bg-card shadow-xl rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground">Contact Us</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Interested in {productName ? `the ${productName}` : "this product"}? Fill out the form below and we'll get back to you.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Your City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="Your State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {form.formState.isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
