import { ProductList } from "src/types";

export const sortByAlphabetical = (data: ProductList[]): ProductList[] => {
  return data.sort((a, b) => a.name.localeCompare(b.name));
};
