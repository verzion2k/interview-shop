import { sortByAlphabetical } from "src/helpers/sortByAlphabetical";
import { sortByDepth } from "src/helpers/sortByDepth";
import { DataType, ProductList } from "src/types";
import { CategoryItem } from "./CategoryItem";
import { ProductItem } from "@components/product/ProductItem";
import { Fragment } from "react";

export interface CategoryViewProps {
  products: ProductList[];
}

export const CategoryView: React.FC<CategoryViewProps> = ({ products }) => {
  return (
    <div>
      <h2>Category View</h2>
      {sortByDepth(sortByAlphabetical(products)).map((item) =>
        item.type === DataType.CATEGORY ? (
          <Fragment key={item.name}>
            <CategoryItem category={item} />
          </Fragment>
        ) : (
          <Fragment key={item.name}>
            <ProductItem product={item} />
          </Fragment>
        )
      )}
    </div>
  );
};
