
import type { Category, Product } from './types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Dog Supplies',
    slug: 'dog-supplies',
    image: '/images/categories/dog-supplies.jpg', // Updated path
    description: 'Everything your furry friend needs, from food to toys.',
    dataAiHint: 'happy dog',
  },
  {
    id: '2',
    name: 'Cat Supplies',
    slug: 'cat-supplies',
    image: '/images/categories/cat-supplies.jpg', // Updated path
    description: 'Treat your feline to the best products available.',
    dataAiHint: 'playful cat',
  },
  {
    id: '3',
    name: 'Bird Supplies',
    slug: 'bird-supplies',
    image: '/images/categories/bird-supplies.jpg', // Updated path
    description: 'Cages, food, and accessories for your feathered companions.',
    dataAiHint: 'colorful bird',
  },
  {
    id: '4',
    name: 'Fish Supplies',
    slug: 'fish-supplies',
    image: '/images/categories/fish-supplies.jpg', // Updated path
    description: 'Aquariums, filters, and food for your aquatic pets.',
    dataAiHint: 'goldfish aquarium',
  },
];

export const mockFilterOptions = {
  genders: ['Male', 'Female', 'Unisex'] as const,
  colors: ['Red', 'Aquaria', 'Blue H', 'Warm Grey', 'Silver', 'Yellow', 'Black', 'White', 'Brown'] as const,
  brands: ['PawsomeChoice', 'RoyalPet', 'HappyPaws', 'OmegaTreats', 'PetSafe'] as const,
  tags: ['Small Dog', 'Large Dog', 'Puppy', 'Kitten', 'Senior'] as const,
};


export const products: Product[] = [
  // Dog Supplies
  {
    id: 'prod1',
    name: 'Premium Dog Food - Chicken',
    slug: 'premium-dog-food-chicken',
    categoryId: '1',
    images: [
        '/images/products/dog-food-chicken-1.jpg', 
        '/images/products/dog-food-chicken-2.jpg', 
        '/images/products/dog-food-chicken-3.jpg',
        '/images/products/dog-food-chicken-4.jpg',
        '/images/products/dog-food-chicken-5.jpg',
        '/images/products/dog-food-chicken-6.jpg'
    ], // Updated paths
    description: 'Nutritious and delicious premium chicken flavored dog food. Made with real chicken and wholesome grains. Suitable for all breeds.',
    price: 25.99,
    sku: 'DOG-FOOD-001',
    stock: 150,
    rating: 4.5,
    dataAiHint: 'dog food bag',
    gender: 'Unisex',
    colors: ['Brown'],
    brand: 'PawsomeChoice',
    tags: ['Large Dog'],
    age: "Adult",
    size: "Large",
    vaccinated: true,
    dewormed: true,
    cert: "Vet Approved",
    microchip: "Yes",
    location: "Main Warehouse",
    publishedDate: "2023-01-15",
    additionalInfo: "Rich in protein and essential vitamins for active dogs. Grain-friendly formula."
  },
  {
    id: 'prod2',
    name: 'Durable Chew Toy for Dogs',
    slug: 'durable-chew-toy-dogs',
    categoryId: '1',
    images: ['/images/products/chew-toy-1.jpg', '/images/products/chew-toy-2.jpg'], // Updated paths
    description: 'A long-lasting chew toy designed for aggressive chewers. Helps clean teeth and gums.',
    price: 12.50,
    sku: 'DOG-TOY-001',
    stock: 200,
    rating: 4.2,
    dataAiHint: 'dog chew toy',
    gender: 'Unisex',
    colors: ['Red', 'Blue H'],
    brand: 'HappyPaws',
    tags: ['Small Dog', 'Puppy'],
    age: "Puppy / Adult",
    size: "Medium",
    vaccinated: undefined, // Not applicable
    dewormed: undefined, // Not applicable
    cert: "Non-toxic materials",
    microchip: "No",
    location: "Toy Aisle",
    publishedDate: "2023-02-20",
    additionalInfo: "Made from tough, pet-safe rubber. Floats in water for added fun."
  },
  {
    id: 'prod3',
    name: 'Cozy Dog Bed - Large',
    slug: 'cozy-dog-bed-large',
    categoryId: '1',
    images: ['/images/products/dog-bed-large.jpg'], // Updated path
    description: 'Soft and comfortable large dog bed. Provides excellent support and promotes restful sleep.',
    price: 45.00,
    sku: 'DOG-BED-001',
    stock: 50,
    rating: 4.8,
    dataAiHint: 'dog bed',
    gender: 'Unisex',
    colors: ['Warm Grey'],
    brand: 'RoyalPet',
    tags: ['Large Dog', 'Senior'],
    age: "All Ages",
    size: "Large",
    vaccinated: undefined,
    dewormed: undefined,
    cert: "Orthopedic Support",
    microchip: "No",
    location: "Bedding Section",
    publishedDate: "2023-03-10",
    additionalInfo: "Machine washable cover for easy cleaning. Plush, supportive bolsters."
  },

  // Cat Supplies
  {
    id: 'prod4',
    name: 'Gourmet Cat Food - Salmon',
    slug: 'gourmet-cat-food-salmon',
    categoryId: '2',
    images: ['/images/products/cat-food-salmon-1.jpg', '/images/products/cat-food-salmon-2.jpg'], // Updated paths
    description: 'Delicious salmon flavored gourmet cat food. Rich in Omega-3 and essential nutrients for a healthy coat.',
    price: 18.75,
    sku: 'CAT-FOOD-001',
    stock: 120,
    rating: 4.6,
    dataAiHint: 'cat food can',
    gender: 'Unisex',
    colors: ['Silver'],
    brand: 'OmegaTreats',
    tags: ['Kitten', 'Senior'],
    age: "All Life Stages",
    size: "Small", 
    vaccinated: true, 
    dewormed: true, 
    cert: "Grain-Free",
    microchip: "No",
    location: "Cat Food Aisle",
    publishedDate: "2023-04-01",
    additionalInfo: "Made with real salmon as the first ingredient. Supports healthy digestion."
  },
  {
    id: 'prod5',
    name: 'Interactive Feather Wand Toy',
    slug: 'interactive-feather-wand-toy',
    categoryId: '2',
    images: ['/images/products/feather-wand-toy.jpg'], // Updated path
    description: 'Engage your cat with this fun and interactive feather wand. Stimulates natural hunting instincts.',
    price: 8.99,
    sku: 'CAT-TOY-001',
    stock: 300,
    rating: 4.3,
    dataAiHint: 'cat feather toy',
    gender: 'Unisex',
    colors: ['Aquaria', 'Yellow'],
    brand: 'HappyPaws',
    tags: ['Kitten'],
    age: "All Ages",
    size: "Medium", 
    cert: "Natural Feathers",
    publishedDate: "2023-05-12",
    additionalInfo: "Lightweight and easy to handle. Encourages exercise and play."
  },
  {
    id: 'prod6',
    name: 'Cat Scratching Post with Platform',
    slug: 'cat-scratching-post-platform',
    categoryId: '2',
    images: ['/images/products/cat-scratch-post-1.jpg', '/images/products/cat-scratch-post-2.jpg'], // Updated paths
    description: 'Sturdy scratching post with a comfortable viewing platform. Helps protect your furniture.',
    price: 32.00,
    sku: 'CAT-SCRATCH-001',
    stock: 70,
    rating: 4.7,
    dataAiHint: 'cat scratching post',
    gender: 'Unisex',
    colors: ['Brown', 'Warm Grey'],
    brand: 'PetSafe',
    age: "All Ages",
    size: "Large", 
    cert: "Durable Sisal",
    publishedDate: "2023-06-05",
    additionalInfo: "Easy to assemble. Provides a dedicated place for scratching."
  },

  // Bird Supplies
  {
    id: 'prod7',
    name: 'Premium Bird Seed Mix',
    slug: 'premium-bird-seed-mix',
    categoryId: '3',
    images: ['/images/products/bird-seed-mix.jpg'], // Updated path
    description: 'A balanced mix of seeds, nuts, and fruits for various bird species. High in energy and nutrients.',
    price: 15.20,
    sku: 'BIRD-SEED-001',
    stock: 90,
    rating: 4.4,
    dataAiHint: 'bird seed bag',
    gender: 'Unisex',
    colors: ['Yellow', 'Brown'],
    brand: 'PawsomeChoice',
    age: "Adult Birds",
    size: "Medium", 
    cert: "All Natural Ingredients",
    publishedDate: "2023-07-18",
    additionalInfo: "Attracts a wide variety of wild birds. No artificial colors or flavors."
  },
  {
    id: 'prod8',
    name: 'Spacious Bird Cage',
    slug: 'spacious-bird-cage',
    categoryId: '3',
    images: ['/images/products/bird-cage-1.jpg', '/images/products/bird-cage-2.jpg'], // Updated paths
    description: 'A large and secure cage for medium-sized birds, with multiple perches and feeding bowls.',
    price: 75.50,
    sku: 'BIRD-CAGE-001',
    stock: 30,
    rating: 4.1,
    dataAiHint: 'bird cage',
    gender: 'Unisex',
    colors: ['Silver', 'Black'],
    brand: 'PetSafe',
    age: "All Ages",
    size: "Large", 
    cert: "Rust-proof Coating",
    publishedDate: "2023-08-02",
    additionalInfo: "Includes removable tray for easy cleaning. Secure door latch."
  },

  // Fish Supplies
  {
    id: 'prod9',
    name: 'Aquarium Starter Kit - 10 Gallon',
    slug: 'aquarium-starter-kit-10g',
    categoryId: '4',
    images: ['/images/products/aquarium-kit.jpg'], // Updated path
    description: 'Complete 10-gallon aquarium kit including filter, heater, and LED lighting. Perfect for beginners.',
    price: 99.99,
    sku: 'FISH-AQUA-001',
    stock: 25,
    rating: 4.0,
    dataAiHint: 'fish tank',
    gender: 'Unisex',
    colors: ['Black', 'White'],
    brand: 'PawsomeChoice',
    age: "N/A",
    size: "Medium", 
    cert: "Leak-Proof Guarantee",
    publishedDate: "2023-09-10",
    additionalInfo: "Energy-efficient LED lighting. Quiet and effective filter."
  },
  {
    id: 'prod10',
    name: 'Tropical Fish Flakes',
    slug: 'tropical-fish-flakes',
    categoryId: '4',
    images: ['/images/products/fish-flakes.jpg'], // Updated path
    description: 'High-quality fish flakes for tropical fish. Enhances color and vitality.',
    price: 7.50,
    sku: 'FISH-FOOD-001',
    stock: 180,
    rating: 4.3,
    dataAiHint: 'fish food flakes',
    gender: 'Unisex',
    colors: ['Red', 'Yellow'], 
    brand: 'OmegaTreats',
    age: "All Ages",
    size: "Small", 
    cert: "Color Enhancing Formula",
    publishedDate: "2023-10-01",
    additionalInfo: "Does not cloud water. Easily digestible for most tropical fish."
  },
   {
    id: 'prod11',
    name: 'Adjustable Pet Leash - Red',
    slug: 'adjustable-pet-leash-red',
    categoryId: '1', 
    images: ['/images/products/pet-leash-red-1.jpg', '/images/products/pet-leash-red-2.jpg'], // Updated paths
    description: 'Durable and adjustable leash for dogs of all sizes. Features a comfortable grip and reflective stitching for night walks.',
    price: 19.99,
    sku: 'DOG-LEASH-001',
    stock: 100,
    rating: 4.6,
    dataAiHint: 'dog leash',
    gender: 'Unisex',
    colors: ['Red'],
    brand: 'RoyalPet',
    tags: ['Small Dog', 'Large Dog'],
    age: "All Ages",
    size: "Medium", 
    cert: "Reflective Safety",
    publishedDate: "2023-11-05",
    additionalInfo: "Strong nylon material with heavy-duty clasp."
  },
  {
    id: 'prod12',
    name: 'Soft Cat Collar with Bell - Blue',
    slug: 'soft-cat-collar-bell-blue',
    categoryId: '2', 
    images: ['/images/products/cat-collar-blue.jpg'], // Updated path
    description: 'Comfortable and stylish cat collar with a safety release buckle and a small bell.',
    price: 9.50,
    sku: 'CAT-COLLAR-001',
    stock: 150,
    rating: 4.2,
    dataAiHint: 'cat collar',
    gender: 'Unisex',
    colors: ['Blue H', 'Aquaria'],
    brand: 'HappyPaws',
    tags: ['Kitten'],
    age: "All Ages",
    size: "Small", 
    cert: "Safety Release",
    publishedDate: "2023-12-01",
    additionalInfo: "Adjustable to fit most cats. Lightweight and comfortable."
  },
  {
    id: 'prod13',
    name: 'Orthopedic Dog Mattress',
    slug: 'orthopedic-dog-mattress',
    categoryId: '1',
    images: ['/images/products/dog-mattress-ortho.jpg'], // Updated path
    description: 'Supportive orthopedic mattress for older dogs or those with joint issues.',
    price: 65.00,
    stock: 40,
    rating: 4.9,
    dataAiHint: 'dog mattress',
    gender: 'Unisex',
    colors: ['Warm Grey', 'Brown'],
    brand: 'RoyalPet',
    tags: ['Large Dog', 'Senior'],
    age: "Senior / Adult",
    size: "Large",
    cert: "Memory Foam Core",
    publishedDate: "2024-01-15",
    additionalInfo: "Relieves pressure points and provides maximum comfort."
  },
  {
    id: 'prod14',
    name: 'Cat Tree Condo Tower',
    slug: 'cat-tree-condo-tower',
    categoryId: '2',
    images: ['/images/products/cat-tree-tower.jpg'], // Updated path
    description: 'Multi-level cat tree with condos, scratching posts, and perches.',
    price: 89.90,
    stock: 20,
    rating: 4.7,
    dataAiHint: 'cat tree',
    gender: 'Unisex',
    colors: ['Silver', 'White'],
    brand: 'PetSafe',
    age: "All Ages",
    size: "Large",
    cert: "Sturdy Construction",
    publishedDate: "2024-02-01",
    additionalInfo: "Multiple platforms for climbing and lounging. Sisal-wrapped posts."
  },
  {
    id: 'prod15',
    name: 'Wild Bird Feeder Station',
    slug: 'wild-bird-feeder-station',
    categoryId: '3',
    images: ['/images/products/bird-feeder-station.jpg'], // Updated path
    description: 'Decorative and functional feeder station to attract wild birds to your garden.',
    price: 35.00,
    stock: 60,
    rating: 4.3,
    dataAiHint: 'bird feeder',
    gender: 'Unisex',
    colors: ['Brown', 'Black'],
    brand: 'HappyPaws',
    age: "N/A",
    size: "Medium",
    cert: "Weather Resistant",
    publishedDate: "2024-03-10",
    additionalInfo: "Easy to fill and clean. Multiple feeding ports."
  },
   {
    id: 'prod16',
    name: 'Small Animal Hay Feeder',
    slug: 'small-animal-hay-feeder',
    categoryId: '1', 
    images: ['/images/products/hay-feeder.jpg'], // Updated path
    description: 'Convenient hay feeder for rabbits, guinea pigs, and other small animals.',
    price: 14.50,
    stock: 80,
    rating: 4.1,
    dataAiHint: 'hay feeder',
    gender: 'Unisex',
    colors: ['Silver'],
    brand: 'PawsomeChoice',
    tags: ['Small Dog'], 
    age: "All Ages",
    size: "Small",
    cert: "Chew-Proof Metal",
    publishedDate: "2024-04-05",
    additionalInfo: "Reduces hay waste. Easily attaches to cage."
  },
  {
    id: 'prod17',
    name: 'Hypoallergenic Cat Shampoo',
    slug: 'hypoallergenic-cat-shampoo',
    categoryId: '2',
    images: ['/images/products/cat-shampoo-hypo.jpg'], // Updated path
    description: 'Gentle, hypoallergenic shampoo for cats with sensitive skin.',
    price: 16.99,
    stock: 90,
    rating: 4.8,
    dataAiHint: 'cat shampoo',
    gender: 'Unisex',
    colors: ['White'],
    brand: 'OmegaTreats',
    tags: ['Kitten', 'Senior'],
    age: "All Ages",
    size: "Small", 
    cert: "Tear-Free Formula",
    publishedDate: "2024-05-01",
    additionalInfo: "Soothes dry, itchy skin. pH balanced for cats."
  },
];
