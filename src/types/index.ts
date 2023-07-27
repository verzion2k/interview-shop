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

export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}
