import { ProductList } from "src/types";

export type FindProductParentPath = (productId: number) => string;

export type UseFindProductPath = (
  products: ProductList[]
) => [FindProductParentPath];

export const useFindProductPath: UseFindProductPath = (products) => {
  const findProductParentPath = (productId: number): string => {
    const findProductInCategory = (category: ProductList): string | null => {
      const productInCategory = category.children.find(
        (child) => child.type === "PRODUCT" && child.id === productId
      );
      if (productInCategory) {
        return category.name;
      }

      for (const child of category.children) {
        if (child.type === "CATEGORY") {
          const foundInChild = findProductInCategory(child);
          if (foundInChild !== null) {
            return foundInChild === category.name
              ? category.name
              : `${category.name}/${foundInChild}`;
          }
        }
      }

      return null;
    };

    if (products) {
      for (const category of products) {
        if (category.type === "CATEGORY") {
          const foundInCategory = findProductInCategory(category);
          if (foundInCategory !== null) {
            return foundInCategory;
          }
        }
      }
    }

    return "Product not found";
  };

  return [findProductParentPath];
};
