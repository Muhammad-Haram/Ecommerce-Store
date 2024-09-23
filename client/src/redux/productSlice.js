import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const { setLoading, setProduct } = productSlice.actions;
export default productSlice.reducer;
