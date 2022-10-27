import React, { useEffect } from "react";
import { Box } from "@mui/material";
import PopProduct from "./PopProduct";
//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";

//get the product list and present it
const PopProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {products.map((product, index) => (
        <Box sx={{ m: 1 }}>
          <PopProduct key={index} popProduct={product} />
        </Box>
      ))}
    </>
  );
};

export default PopProductList;
