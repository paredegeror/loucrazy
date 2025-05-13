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
  gender?: 'Male' | 'Female' | 'Unisex';
  colors?: string[]; 
  brand?: string; 
  tags?: string[]; 
  // New fields based on the image
  age?: string; // e.g., "2 Months"
  size?: 'Small' | 'Medium' | 'Large' | 'X-Large';
  vaccinated?: boolean;
  dewormed?: boolean;
  cert?: string; // e.g., "KAS" or "None"
  microchip?: string; // e.g., "Yes" or "No" or ID
  location?: string; // e.g., "Ho Chi Minh City"
  publishedDate?: string; // e.g., "2023-10-26"
  additionalInfo?: string;
}
