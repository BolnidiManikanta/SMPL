export interface Product {
  id: string;
  name: string;
  category: string;
  collection: string;
  space: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  finishes: {
    name: string;
    hex: string;
    code: string;
  }[];
  material: string;
  dimensions: string;
  description: string;
  features: string[];
  inStock: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
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
