export enum DataType {
  PRODUCT = "PRODUCT",
  CATEGORY = "CATEGORY",
}

export enum SortOption {
  NAME = "name",
  PRICE = "price",
}

export interface Category {
  name: string;
  parent: string;
}

export interface Product {
  type: DataType.PRODUCT;
  id: number;
  name: string;
  price: number;
}

export interface ProductList {
  type: DataType.CATEGORY;
  name: string;
  children: (ProductList | Product)[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
export interface CartContextType {
  cartItems: { [productId: number]: CartItem };
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export type CreateProductData = {
  name: string;
  price: number;
  parent: string;
};

export interface CreateCategoryData {
  name: string;
  parent: string;
}

export type CategoryTree = Category & {
  subcategories?: CategoryTree[];
};
