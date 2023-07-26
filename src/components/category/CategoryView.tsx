import { sortByAlphabetical } from "src/helpers/sortByAlphabetical";
import { sortByDepth } from "src/helpers/sortByDepth";
import { DataType, Product, ProductList } from "src/types";
import { CategoryItem } from "./CategoryItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography, Stack } from "@mui/material";

export interface CategoryViewProps {
  data: ProductList[];
}

export const CategoryView: React.FC<CategoryViewProps> = ({ data }) => {
  const renderCategory = (category: ProductList) => {
    const sortedChildren = sortByDepth(category.children);
    return (
      <div key={category.name}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {sortedChildren.map((item) =>
                item.type === DataType.CATEGORY
                  ? renderCategory(item)
                  : renderProduct(item)
              )}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };

  const renderProduct = (product: Product) => {
    return (
      <Card sx={{ minWidth: 275 }} key={product.id}>
        <CardContent>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2">{product.price}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <div>
      <h1>Products and Categories</h1>
      {sortByDepth(sortByAlphabetical(data)).map((item) =>
        item.type === DataType.CATEGORY
          ? renderCategory(item)
          : renderProduct(item)
      )}
      <CategoryItem />
    </div>
  );
};
