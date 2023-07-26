import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Interview Shop
          </Typography>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
