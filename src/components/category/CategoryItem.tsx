import { DataType, ProductList } from "src/types";
import {
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ProductItem } from "@components/product/ProductItem";
import { Fragment } from "react";
import { FindCategoryParentPath } from "src/hooks/useFindCategoryPath";
import { FindProductParentPath } from "src/hooks/useFindProductPath";
import { sortByDepth } from "src/helpers/sortByDepth";

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
  const sortedChildren = sortByDepth(category.children);

  return (
    <Box width="100%" sx={{ width: "100%" }}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "darkgrey" }}
        >
          <Typography variant="h5">{`${
            category.name
          } - ${findCategoryParentPath(category.name)}`}</Typography>
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
    </Box>
  );
};
