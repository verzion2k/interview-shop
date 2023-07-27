import React from "react";
import { useCart } from "src/hooks/useCart";
import { Box, Typography } from "@mui/material";

const CartSummary: React.FC = () => {
  const { cartItems } = useCart();

  const calculateTotalSum = (): number => {
    return Object.values(cartItems).reduce(
      (totalSum, { product, quantity }) => totalSum + product.price * quantity,
      0
    );
  };

  return (
    <Box p={1}>
      <Typography variant="subtitle1">
        {`Total Sum: ${calculateTotalSum().toFixed(0)}EUR`}
      </Typography>
    </Box>
  );
};

export default CartSummary;
