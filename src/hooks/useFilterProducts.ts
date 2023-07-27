import { useEffect, useState } from "react";
import { getAllProducts } from "src/helpers/getAllProducts";
import { Product, ProductList, SortOption } from "src/types";

export type UseFilterProducts = (
  products: ProductList[] | null,
  filterOption: SortOption,
  filterValue: string
) => Product[];

export const useFilterProducts: UseFilterProducts = (
  products,
  filterOption,
  filterValue
) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!products) {
      setFilteredProducts([]);
      return;
    }

    const allProducts = getAllProducts(products);
    const filterFn = (product: Product) => {
      return product[filterOption].toString().includes(filterValue);
    };
    const filteredProducts: Product[] = allProducts.filter(filterFn);
    setFilteredProducts(filteredProducts);
  }, [filterOption, filterValue, products]);

  return filteredProducts;
};
