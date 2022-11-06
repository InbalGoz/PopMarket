import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { wishListService } from "../../services/wishListService";

const initialState = {
  wishListItems: [],
  loading: true,
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWishListProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.wishListItems = action.payload;
      })
      .addCase(addWishListItem.fulfilled, (state, action) => {
        state.wishListItems = action.payload;
      })
      .addCase(removeWishListItem.fulfilled, (state, action) => {
        state.wishListItems = action.payload;
      })
      .addCase(removeAllWishListItem.fulfilled, (state) => {
        state.wishListItems = [];
      });
  },
});

//add item to wishList
export const getWishListProducts = createAsyncThunk(
  "wishList/wishList",
  async () => {
    const data = await wishListService.getWishListProducts();
    return data;
  }
);

//add item to cart
export const addWishListItem = createAsyncThunk(
  "wishList/addToWishList",
  async (id) => {
    const data = await wishListService.addToWishList(id);
    return data;
  }
);

//remove item to cart
export const removeWishListItem = createAsyncThunk(
  "wishList/removeWishListItem",
  async (id) => {
    const data = await wishListService.deleteFromWishList(id);
    return data;
  }
);

//remove all items from cart
export const removeAllWishListItem = createAsyncThunk(
  "wishList/removeAllWishListItems",
  async () => {
    const data = await wishListService.deleteAllFromWishList();
    console.log("removed data", data);
    return data;
  }
);

export default wishListSlice.reducer;
