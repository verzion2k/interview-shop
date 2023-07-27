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
import { CreateProductData, createProduct } from "@services/create-product";

export interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddProductToCart = () => {
    handleCreateProduct();
    addToCart(product);
  };

  const handleCreateProduct = async () => {
    try {
      const productData: CreateProductData = {
        name: "New Product",
        price: 100,
        parent: "Some Category", // Replace with the category name for the new product
      };

      const newProductId = await createProduct(productData);
      console.log("New product created with ID:", newProductId);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }} key={product.id}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2">TODO: parent path</Typography>
        <Typography variant="body2">{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddProductToCart}>
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
