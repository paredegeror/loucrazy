export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  dataAiHint?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  images: string[]; // Array of image URLs
  description: string;
  price: number;
  sku?: string;
  stock?: number;
  rating?: number; // e.g., 1-5
  dataAiHint?: string;
  gender?: 'Male' | 'Female' | 'Unisex'; // Added for filtering
  colors?: string[]; // Added for filtering e.g. ['Red', 'Blue']
  brand?: string; // Added for filtering
  tags?: string[]; // e.g. ['Small Dog', 'Puppy']
}
