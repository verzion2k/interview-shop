import { Product } from "src/types";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "src/hooks/useCart";
import { FindProductParentPath } from "src/hooks/useFindProductPath";

export interface ProductItemProps {
  product: Product;
  findProductParentPath: FindProductParentPath;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  findProductParentPath,
}) => {
  const { addToCart } = useCart();

  const handleAddProductToCart = () => {
    addToCart(product);
  };

  return (
    <Card
      sx={{ minWidth: 275, margin: "10px", backgroundColor: "antiquewhite" }}
      key={product.id}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="subtitle1">
          {findProductParentPath(product.id)}
        </Typography>
        <Typography variant="subtitle1">{`${product.price}EUR`}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddProductToCart}>
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
