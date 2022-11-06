import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import wishListReducer from "./slices/wishListSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    wishList: wishListReducer,
    cart: cartReducer,
  },
});
