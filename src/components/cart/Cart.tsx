import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  IconButton,
  Badge,
  BadgeProps,
  Popover,
  Typography,
  styled,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { Fragment, useCallback, useState } from "react";
import { useCart } from "src/hooks/useCart";
import { CartItem } from "./CartItem";
import CartSummary from "./CartSummary";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Cart: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <StyledBadge
          badgeContent={Object.keys(cartItems).length}
          color="secondary"
        >
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {Object.keys(cartItems).length > 0 ? (
          <Box minWidth={250} minHeight={50}>
            {Object.values(cartItems).map(({ product, quantity }) => {
              return (
                <Fragment key={product.name}>
                  <CartItem product={product} quantity={quantity} />
                </Fragment>
              );
            })}
            <CartSummary />
            <Button variant="text" onClick={clearCart}>
              Remove all
            </Button>
          </Box>
        ) : (
          <Stack
            minWidth={250}
            minHeight={50}
            justifyContent="center"
            alignItems="center"
          >
            <Typography>Cart is empty</Typography>
          </Stack>
        )}
      </Popover>
    </>
  );
};
