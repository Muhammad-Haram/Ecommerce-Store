import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
  },
});

export default store;
