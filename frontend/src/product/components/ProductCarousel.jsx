import React, { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Message from "../../shared/components/Message";
import Loader from "../../shared/components/Loader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopProduct from "./PopProduct";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProducts,
  fetchPopularProducts,
} from "../../redux/slices/productSlice"; //action

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
  const { loading, error, productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchPopularProducts());
  }, []);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message />
  ) : (
    <Stack spacing={3}>
      <Box margin={1} />
      <Carousel responsive={responsive} partialVisible infinite>
        {productList.map((product, index) => (
          <div key={index}>
            <PopProduct popProduct={product} />
          </div>
        ))}
      </Carousel>
    </Stack>
  );
};

export default ProductCarousel;

/*
<Typography
        variant='h4'
        component='div'
        sx={{ fontFamily: "Lobster, cursive", textAlign: "center" }}
      >
        The Newest Pop:
      </Typography>
*/
