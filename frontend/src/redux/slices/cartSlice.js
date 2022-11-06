import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../../services/cartService";

const initialState = {
  cartItems: [],
  loading: true,
  // shippingAddress: {},
};

//JSON.parse(localStorage.getItem("cartItems")) ??

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    saveShippingAddress(state, action) {
      state.shippingAddress = action.payload;
    },
    savePaymentMethod(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        console.log("add item", action.payload);
        state.cartItems = action.payload;
        /* const item = action.payload;

        const itemIndex = state.cartItems.findIndex(
          (product) => product._id === item._id
        );

        if (itemIndex >= 0) {
          state.cartItems = state.cartItems.map((product) =>
            product === item ? item : product
          );
        } else {
          state.cartItems.push(item);
        }
        //localStorage.setItem("cartItems", JSON.stringify(state.cartItems));*/
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        // const cartItemRemoved = state.cartItems.filter(
        //  (x) => x._id !== action.payload
        // );
        // state.cartItems = cartItemRemoved;
      })
      .addCase(removeAllCartItem.fulfilled, (state) => {
        state.cartItems = [];
      });
  },
});

//add item to cart
export const getCartProducts = createAsyncThunk(
  "cart/getProducts",
  async () => {
    const data = await cartService.getCartProducts();
    return data;
  }
);

//add item to cart
export const addCartItem = createAsyncThunk("cart/addToCart", async (id) => {
  const data = await cartService.addToCart(id);
  return data;
});

//remove item to cart
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (id) => {
    const data = await cartService.deleteFromCart(id);
    return data;
  }
);

//remove all items from cart
export const removeAllCartItem = createAsyncThunk(
  "cart/removeAllCartItems",
  async () => {
    const data = await cartService.deleteAllFromCart();
    return data;
  }
);

export default cartSlice.reducer;
