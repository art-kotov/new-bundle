// Core
import "../config/ReactotronConfig";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
// Store
import store from "stores/root-store";
import { StoreContext } from "context";
// Instruments
import App from "components/App";
import theme from "./theme";
// Components

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StoreContext.Provider>,
  document.getElementById("app")
);
