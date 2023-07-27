import { Stack } from "@mui/material";
import { getAllProducts } from "src/helpers/getAllProducts";
import { Product } from "src/types";
import { ProductItem } from "@components/product/ProductItem";
import { Fragment } from "react";

export interface ProductViewProps {
  products: Product[];
}

export const ProductView: React.FC<ProductViewProps> = ({ products }) => {
  return (
    <>
      <h2>ProductView</h2>
      <Stack direction="row" flexWrap="wrap">
        {getAllProducts(products).map((product) => (
          <Fragment key={product.name}>
            <ProductItem product={product} />
          </Fragment>
        ))}
      </Stack>
    </>
  );
};
