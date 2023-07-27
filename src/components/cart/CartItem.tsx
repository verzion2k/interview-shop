import { useCart } from "src/hooks/useCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Stack, IconButton, Typography, Box } from "@mui/material";
import { Product } from "src/types";

export interface CartItemProps {
  product: Product;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { removeFromCart, addToCart } = useCart();

  const handleRemoveProductFromCart = () => {
    removeFromCart(product.id);
  };

  const handleAddProductToCart = () => {
    addToCart(product);
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={4}
      alignItems="center"
      justifyContent="space-between"
      px={2}
      py={2}
    >
      <IconButton onClick={handleRemoveProductFromCart}>
        <RemoveIcon />
      </IconButton>
      <Box>
        <Typography textAlign="center">{product.name}</Typography>
        <Typography textAlign="center">{`Quantity: ${quantity}`}</Typography>
      </Box>
      <IconButton onClick={handleAddProductToCart}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
};
