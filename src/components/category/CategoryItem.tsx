import { sortByDepth } from "src/helpers/sortByDepth";
import { DataType, ProductList } from "src/types";
import {
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ProductItem } from "@components/product/ProductItem";
import { Fragment } from "react";

export interface CategoryItemProps {
  category: ProductList;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const sortedChildren = sortByDepth(category.children);

  return (
    <div key={category.name}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{category.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" flexWrap="wrap">
            {sortedChildren.map((item) =>
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
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
