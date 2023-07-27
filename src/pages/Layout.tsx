import { Cart } from "@components/cart/Cart";
import { CartProvider } from "src/contexts/CartContext";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <CartProvider>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center">
            <Typography variant="h6">Interview Shop</Typography>
            <Link to="/" style={{ marginLeft: "15px" }}>
              Home
            </Link>
            <Link to="/admin" style={{ marginLeft: "5px" }}>
              Admin
            </Link>
          </Stack>
          <Cart />
        </Toolbar>
      </AppBar>
      <Outlet />
    </CartProvider>
  );
};
