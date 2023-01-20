import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { CSSTransition } from "react-transition-group";
import { IButton } from "../../interfaces/IButton";

function NavigatioBar() {

  const [showLogin, setShowLogin] = useState(false);

  const navItems: IButton[] = [
    {
      buttonText: "Login",
      action: () => 
        setShowLogin(!showLogin)
    },
  ];

  return (
    <Box mb={10}>
      <AppBar component="nav" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button sx={{ color: "#fff" }} onClick={item.action}>
                {item.buttonText}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
        {showLogin && <LoginForm />}
    </Box>
  );
}

export default NavigatioBar;
