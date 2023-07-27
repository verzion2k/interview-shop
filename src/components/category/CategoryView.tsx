import { DataType, ProductList } from "src/types";
import { CategoryItem } from "./CategoryItem";
import { ProductItem } from "@components/product/ProductItem";
import { Fragment } from "react";
import { FindCategoryParentPath } from "src/hooks/useFindCategoryPath";
import { FindProductParentPath } from "src/hooks/useFindProductPath";
import { Box, Typography } from "@mui/material";
import { sortByDepth } from "src/helpers/sortByDepth";

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
    <Box mt={2}>
      <Typography variant="h3" mb={2}>
        Category View
      </Typography>
      {sortByDepth(products).map((item) =>
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
    </Box>
  );
};
