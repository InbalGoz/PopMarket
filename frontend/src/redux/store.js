import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import wishListReducer from "./slices/wishListSlice";

export const store = configureStore({
  reducer: { product: productReducer, wishList: wishListReducer },
});
