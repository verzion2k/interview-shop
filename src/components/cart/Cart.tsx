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
} from "@mui/material";
import { Fragment, useCallback, useState } from "react";
import { useCart } from "src/hooks/useCart";
import { CartItem } from "./CartItem";

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
        <StyledBadge badgeContent={cartItems.length} color="secondary">
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
        {cartItems.length > 0 ? (
          <Box>
            {cartItems.map((product) => {
              return (
                <Fragment key={product.name}>
                  <CartItem productId={product.id} productName={product.name} />
                </Fragment>
              );
            })}
            <Button variant="text" onClick={clearCart}>
              Remove all
            </Button>
          </Box>
        ) : (
          <Typography>Cart is empty</Typography>
        )}
      </Popover>
    </>
  );
};
