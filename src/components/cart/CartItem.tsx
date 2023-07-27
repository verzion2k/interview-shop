import { useCart } from "src/hooks/useCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Stack, IconButton, Typography, Box } from "@mui/material";

export interface CartItemProps {
  productName: string;
  productId: number;
}

export const CartItem: React.FC<CartItemProps> = ({
  productName,
  productId,
}) => {
  const { removeFromCart } = useCart();

  const handleRemoveProductFromCart = () => {
    removeFromCart(productId);
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={4}
      alignItems="center"
      justifyContent="space-between"
      px={2}
      py={1}
    >
      <Box>
        <Typography>{productName}</Typography>
        <Typography>{1}</Typography>
      </Box>
      <IconButton onClick={handleRemoveProductFromCart}>
        <RemoveShoppingCartIcon />
      </IconButton>
    </Stack>
  );
};
