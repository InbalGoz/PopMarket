import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/productService";

const initialState = {
  products: [],
  product: null,
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("product action", action);
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const newProductArr = state.products.filter(
          (product) => product.id !== action.payload
        );
        state.products = newProductArr;
      });
    //.addCase(fetchProducts.rejected, (state, action) => {
    // });
  },
});

//fetching products using build in thunk on toolkit
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const data = await productService.getAllProducts();
  console.log("res slice", data);
  return data;
});

//fetching product using build in thunk on toolkit
export const fetchProduct = createAsyncThunk("products/fetchById", async () => {
  const res = await productService.getProduct();
  return res.data;
});

export const deleteProduct = createAsyncThunk(
  "products/deleteById",
  async () => {
    const res = await productService.deleteProduct();
    return res.data;
  }
);

export default productSlice.reducer;

/* reducers: {
    //create a new product
    createProduct(state, action) {
      state.products = [...state.products, action.payload];
    },
    //get all the products from DB
    getProducts(state, action) {
      state.products = action.payload;
    },
    //update list of products - insert/delete
    editProducts() {},
    //delete a specific product
    deleteProduct(state, action) {
      const newProductArr = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = newProductArr;
    },

    // Action creators are generated for each case reducer function
export const { createProduct, getProducts, editProducts, deleteProduct } =
  productSlice.actions;


*/
