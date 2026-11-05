export interface ProductFinish {
  name: string;
  hex: string;
  code: string;
}

export interface TechnicalSpecs {
  cartridge: string;
  operatingPressure: string;
  flowRate: string;
  waterInlet: string;
  certifications: string[];
}

export interface DimensionsDetail {
  height: string;
  width: string;
  depth: string;
  reach?: string;
  weight?: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  collection: string;
  space: string;
  price: number;
  image: string;
  galleryImages?: string[];
  rating: number;
  reviewCount: number;
  finishes: ProductFinish[];
  material: string;
  installationType: string;
  dimensions: string;
  dimensionsDetail?: DimensionsDetail;
  description: string;
  features: string[];
  technicalSpecs?: TechnicalSpecs;
  warranty: string;
  inStock: boolean;
  leadTime?: string;
  isBestseller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  has3DModel?: boolean;
  crossSellIds?: string[];
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
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  finishes: string[];
  materials: string[];
  installationTypes: string[];
  inStockOnly: boolean;
  searchQuery: string;
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
}
