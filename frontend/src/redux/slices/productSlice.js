import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // popProduct: null,
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state) {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
