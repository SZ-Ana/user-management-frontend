import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ApiProvider, Provider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./api/apiSlice";
import { ThemeProvider } from "@emotion/react";
import Theme from "./assets/theme.jsx";
import { AlertProvider } from "./components/alerts/AlertProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <ThemeProvider theme={Theme}>
        <AlertProvider>
          <App />
        </AlertProvider>
      </ThemeProvider>
    </ApiProvider>
  </React.StrictMode>
);
