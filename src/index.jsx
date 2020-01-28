// Core
import "../config/ReactotronConfig";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
// Store
import store from "stores/root-store";
import { StoreContext } from "context";
// Instruments
// import App from "components/App";
import theme from "theme";
import App from "components/App";
// Components

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StoreContext.Provider>,
  document.getElementById("app")
);
