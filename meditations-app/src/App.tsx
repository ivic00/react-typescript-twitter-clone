import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/AppBar/NavigationBar";
import Feed from "./components/Feed/Feed";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Fab } from "@mui/material";
import MeditateButton from "./components/MeditateButton/MeditateButton";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#880e4f",
    },
    secondary: {
      main: "#00695c",
    },
    background: {
      default: "#303030",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <NavigationBar />
        <Feed />
        <MeditateButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
