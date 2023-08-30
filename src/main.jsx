import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ApiProvider, Provider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";
import { ThemeProvider } from "@emotion/react";
import Theme from "./assets/theme.jsx";
import { store } from "./app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ApiProvider api={apiSlice}>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </ApiProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
