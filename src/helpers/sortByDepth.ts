import { DataType, Product, ProductList } from "src/types";

const getDepth = (
  product: ProductList | Product,
  depth: number = 0
): number => {
  if (product.type === DataType.CATEGORY) {
    const maxChildDepth = product.children.reduce(
      (maxDepth, child) => Math.max(maxDepth, getDepth(child, depth + 1)),
      depth
    );
    return maxChildDepth;
  } else {
    return depth;
  }
};

export const sortByDepth = (
  data: (ProductList | Product)[]
): (ProductList | Product)[] => {
  return data.sort((a, b) => getDepth(a) - getDepth(b));
};
