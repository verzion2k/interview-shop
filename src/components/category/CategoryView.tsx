import { sortByAlphabetical } from "src/helpers/sortByAlphabetical";
import { DataType, ProductList } from "src/types";
import { CategoryItem } from "./CategoryItem";
import { ProductItem } from "@components/product/ProductItem";
import { Fragment } from "react";
import { FindCategoryParentPath } from "src/hooks/useFindCategoryPath";
import { FindProductParentPath } from "src/hooks/useFindProductPath";

export interface CategoryViewProps {
  products: ProductList[];
  findCategoryParentPath: FindCategoryParentPath;
  findProductParentPath: FindProductParentPath;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  products,
  findCategoryParentPath,
  findProductParentPath,
}) => {
  return (
    <div>
      <h2>Category View</h2>
      {sortByAlphabetical(products).map((item) =>
        item.type === DataType.CATEGORY ? (
          <Fragment key={item.name}>
            <CategoryItem
              category={item}
              findCategoryParentPath={findCategoryParentPath}
              findProductParentPath={findProductParentPath}
            />
          </Fragment>
        ) : (
          <Fragment key={item.name}>
            <ProductItem
              product={item}
              findProductParentPath={findProductParentPath}
            />
          </Fragment>
        )
      )}
    </div>
  );
};
