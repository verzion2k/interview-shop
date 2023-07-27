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
import { FindCategoryParentPath } from "src/hooks/useFindCategoryPath";
import { sortByAlphabetical } from "src/helpers/sortByAlphabetical";
import { FindProductParentPath } from "src/hooks/useFindProductPath";

export interface CategoryItemProps {
  category: ProductList;
  findCategoryParentPath: FindCategoryParentPath;
  findProductParentPath: FindProductParentPath;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  findCategoryParentPath,
  findProductParentPath,
}) => {
  const sortedChildren = sortByAlphabetical(category.children);

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
                  <CategoryItem
                    category={item}
                    findCategoryParentPath={findCategoryParentPath}
                    findProductParentPath={findProductParentPath}
                  />
                  <p>{findCategoryParentPath(item.name)}</p>
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
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
