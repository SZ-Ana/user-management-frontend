import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
