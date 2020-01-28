// Core
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
// Store
// Instruments
import theme from "./theme";
// Components
import App from "./components/App";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("app")
);
