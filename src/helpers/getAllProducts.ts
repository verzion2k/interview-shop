import { DataType, Product, ProductList } from "src/types";

type Node = Product | ProductList;
export type GetAllProducts = (products: Node[]) => Product[];

export const getAllProducts: GetAllProducts = (data) => {
  return data.reduce((products: Product[], node: Node) => {
    if (node.type === DataType.PRODUCT) {
      return [...products, node];
    } else if (node.type === DataType.CATEGORY) {
      return [...products, ...getAllProducts(node.children)];
    }
    return products;
  }, []);
};
