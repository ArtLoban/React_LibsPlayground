import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>React Libs Playground</Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/users">
          Users
        </Button>
      </Toolbar>
    </AppBar>
  );
};
