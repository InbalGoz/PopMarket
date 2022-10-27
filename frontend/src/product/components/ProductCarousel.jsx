import React, { useState, useEffect } from "react";
import { Box, Paper, Button, Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopProduct from "./PopProduct";

//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice"; //action

//need to show a list of the most new pops
// A slider of the newest pop that ws added to the shop, orderd by adding date.

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
    slidesToSlide: 2,
    partialVisibilityGutter: 40,
  },
};
//only gets the list of products
const ProductCarousel = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("products", products);

  return (
    <Stack spacing={3}>
      <Box margin={1} />
      <Carousel responsive={responsive} partialVisible infinite>
        {products.map((product, index) => (
          <div>
            <PopProduct key={index} popProduct={product} />
          </div>
        ))}
      </Carousel>
    </Stack>
  );
};

export default ProductCarousel;

/*
 {popCarouselList.map((product) => (
          <div>
            <PopProduct key={product.id} popProduct={product} />
          </div>
        ))}
*/

/*
<Typography
        variant='h4'
        component='div'
        sx={{ fontFamily: "Lobster, cursive", textAlign: "center" }}
      >
        The Newest Pop:
      </Typography>
*/
