import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    auth: productSlice,
  },
});

export default store;
