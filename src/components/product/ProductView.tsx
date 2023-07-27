import { Stack } from "@mui/material";
import { getAllProducts } from "src/helpers/getAllProducts";
import { Product } from "src/types";
import { ProductItem } from "@components/product/ProductItem";
import { Fragment } from "react";
import { FindProductParentPath } from "src/hooks/useFindProductPath";

export interface ProductViewProps {
  products: Product[];
  findProductParentPath: FindProductParentPath;
}

export const ProductView: React.FC<ProductViewProps> = ({
  products,
  findProductParentPath,
}) => {
  return (
    <>
      <h2>ProductView</h2>
      <Stack direction="row" flexWrap="wrap">
        {getAllProducts(products).map((product) => (
          <Fragment key={product.name}>
            <ProductItem
              product={product}
              findProductParentPath={findProductParentPath}
            />
          </Fragment>
        ))}
      </Stack>
    </>
  );
};
