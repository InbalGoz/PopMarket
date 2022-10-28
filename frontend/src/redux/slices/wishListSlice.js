import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: JSON.parse(localStorage.getItem("wishlist")) ?? [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    /* getWishList(state) {
      state.wishList = localStorage.getItem("wishlist");
      console.log(state.wishList);
    },*/
    addToWishList(state, action) {
      state.wishList.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
      console.log(localStorage.getItem("wishlist"));
    },
    removeFromWishList(state, action) {
      const newWishlist = state.wishList.filter(
        (product) => product?.id !== action.payload.id
      );
      state.wishList = newWishlist;
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
    removeAll(state) {
      state.wishList = [];
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
  },
});

export const { addToWishList, removeFromWishList, removeAll } =
  wishListSlice.actions;
export default wishListSlice.reducer;
