import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
  },
  reducers: {
    setReduxProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const { setReduxProduct } = productSlice.actions;
export default productSlice.reducer;
