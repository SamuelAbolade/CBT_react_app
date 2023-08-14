import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import MainRouter from "./Routes/MainRouter";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ThemeProvider } from "@mui/joy";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <MainRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MainRouter>
  </Provider>
);
