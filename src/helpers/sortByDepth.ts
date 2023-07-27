import { DataType, Product, ProductList } from "src/types";

const getDepth = (
  product: ProductList | Product,
  depth: number = 0
): number => {
  if (product.type === DataType.CATEGORY && product.children.length > 0) {
    const maxChildDepth = product.children.reduce(
      (maxDepth, child) => Math.max(maxDepth, getDepth(child, depth + 1)),
      depth
    );
    return maxChildDepth;
  } else {
    return 1;
  }
};

export const sortByDepth = (
  data: (ProductList | Product)[]
): (ProductList | Product)[] => {
  return data.sort((a, b) => {
    const aDepth = getDepth(a);
    const bDepth = getDepth(b);
    if (aDepth === bDepth) {
      return a.type === DataType.CATEGORY ? 1 : -1;
    } else {
      return bDepth - aDepth;
    }
  });
};
