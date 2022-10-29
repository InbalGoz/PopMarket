import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/productService";

const initialState = {
  products: [],
  productList: [],
  // newProducts: [],
  // popularProducts: [],
  //specialProducts: [],
  // otherProducts: [],
  product: {},
  loading: true,
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchPopularProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(fetchNewProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(fetchSpecialProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSpecialProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(fetchOtherProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOtherProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log("acrionn product", action.payload);
        state.product = action.payload;
      })
      .addCase(updateProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log("updated", action.payload);
        state.product = action.payload;
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
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
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const data = await productService.getAllProducts();

    return data;
  }
);

//fetching Popular products using build in thunk on toolkit
export const fetchPopularProducts = createAsyncThunk(
  "products/fetchpopular",
  async () => {
    const data = await productService.getPopularProducts();
    return data;
  }
);

//fetching products using build in thunk on toolkit
export const fetchOtherProducts = createAsyncThunk(
  "products/fetchother",
  async () => {
    const data = await productService.getOtherProducts();

    return data;
  }
);

//fetching products using build in thunk on toolkit
export const fetchNewProducts = createAsyncThunk(
  "products/fetchnew",
  async () => {
    const data = await productService.getNewProducts();

    return data;
  }
);

//fetching products using build in thunk on toolkit
export const fetchSpecialProducts = createAsyncThunk(
  "products/fetchspecial",
  async () => {
    const data = await productService.getSpecialProducts();

    return data;
  }
);

//fetching product using build in thunk on toolkit
export const fetchProduct = createAsyncThunk(
  "products/fetchById",
  async (productId) => {
    const res = await productService.getProduct(productId);
    console.log("res fetch", res);
    return res;
  }
);

//update product using build in thunk on toolkit
export const updateProduct = createAsyncThunk(
  "products/updateById",
  async (newProduct) => {
    const res = await productService.updateProduct(newProduct);

    console.log("ress updtae", res);
    return res;
  }
);

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
