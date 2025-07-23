import React from "react";
import { ThemeProvider, createTheme, Toolbar } from "@mui/material";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";

const theme = createTheme({
  palette: {
    primary: { main: "#ffe167" },
    secondary: { main: "#c92525" },
    text: { primary: "#000" },
    background: { default: "#f4f4f4", paper: "#fff" },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Toolbar />
      <main>
        <RecipeList />
      </main>
    </ThemeProvider>
  );
}

export default App;
