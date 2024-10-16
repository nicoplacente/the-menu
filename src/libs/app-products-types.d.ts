export interface Product {
  categoryId?: string;
  name: string;
  productImage?: string | null;
  price: number;
  isStock: boolean;
  description?: string;
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  categoryImage?: string | null;
  subcategories?: Subcategory[] | null;
  products?: Product[] | null;
}
