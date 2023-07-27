import { Product, ProductList } from "src/types";

export const sortByAlphabetical = (
  data: (ProductList | Product)[]
): (ProductList | Product)[] => {
  return data.sort((a, b) => a.name.localeCompare(b.name));
};
