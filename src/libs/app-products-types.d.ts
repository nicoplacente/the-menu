export interface Product {
  categoryId?: string;
  name: string;
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
  subcategories?: Subcategory[] | null;
  products?: Product[] | null;
}

export interface Card {
  appId: string;
  appName: string;
  categories: Category[];
  textColor: string;
  bgColor: string;
  primaryColor: string;
  image?: string;
  isImageRounded?: boolean;
  isTitleVisible?: boolean;
}
