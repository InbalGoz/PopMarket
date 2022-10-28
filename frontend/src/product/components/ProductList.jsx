import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import PopProduct from "./PopProduct";

const ProductList = ({ productsList }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsList);
    console.log("lidddt", productsList);
  }, [products]);
  return (
    <>
      {products &&
        products.map((product, index) => (
          <Box key={index} sx={{ m: 1 }}>
            <PopProduct popProduct={product} />
          </Box>
        ))}
    </>
  );
};

export default ProductList;
