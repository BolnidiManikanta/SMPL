export interface ProductFinish {
  name: string;
  hex: string;
  code: string;
  image?: string;
}

export interface TechnicalSpec {
  material: string;
  cartridge?: string;
  flowRate?: string;
  operatingPressure?: string;
  mountingType: string;
  shape?: string;
  connectionSize?: string;
  certifications?: string[];
  dimensions: string;
  weight?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  project: string;
  rating: number;
  date: string;
  comment: string;
  verifiedArchitect: boolean;
}

export interface Product {
  id: string;
  modelNumber: string;
  name: string;
  department: 'Bathroom' | 'Faucets' | 'Showers' | 'Sanitaryware' | 'Kitchen' | 'Accessories';
  category: string;
  subcategory: string;
  collection: 'Contemporary' | 'Minimalist' | 'Sculptural' | 'Timeless' | 'Modern Classic' | 'Organic Luxury';
  space: 'Master Bathroom' | 'Guest Bathroom' | 'Powder Room' | 'Kitchen' | 'Wellness & Spa' | 'Commercial Spaces';
  price: number;
  image: string;
  galleryImages: string[];
  lifestyleImage: string;
  rating: number;
  reviewCount: number;
  finishes: ProductFinish[];
  specs: TechnicalSpec;
  description: string;
  features: string[];
  whatsInTheBox: {
    included: string[];
    requiredSeparately?: string[];
  };
  installationGuide: string;
  cadFileUrl?: string;
  inStock: boolean;
  leadTimeDays: number;
  compatibleProductIds?: string[];
  isBestseller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  reviews?: ReviewItem[];
}

export interface CartItem {
  product: Product;
  selectedFinish: string;
  quantity: number;
}

export interface SpaceCategory {
  id: string;
  title: string;
  image: string;
  description: string;
  itemCount: number;
}

export interface StyleCollection {
  id: string;
  title: string;
  image: string;
  tagline: string;
  aesthetic: string;
}

export interface ProductCategoryItem {
  id: string;
  title: string;
  image: string;
  count: number;
  department: 'Bathroom' | 'Faucets' | 'Showers' | 'Sanitaryware' | 'Kitchen' | 'Tiles' | 'Accessories';
  subcategories: string[];
}
