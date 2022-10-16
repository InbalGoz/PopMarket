import React from "react";
import { Box, Paper, Button, Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopProduct from "../../product/components/PopProduct";

//need to show a list of the most new pops
// A slider of the newest pop that ws added to the shop, orderd by adding date.
const ProductCarousel = () => {
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
  return (
    <Stack spacing={3}>
      <Typography
        variant='h4'
        component='div'
        sx={{ fontFamily: "Lobster, cursive", textAlign: "center" }}
      >
        The Newest Pop:
      </Typography>
      <Carousel responsive={responsive} partialVisible infinite>
        <div>
          <PopProduct />
        </div>
        <div>
          <PopProduct />
        </div>
        <div>
          <PopProduct />
        </div>
        <div>
          <PopProduct />
        </div>
        <div>
          <PopProduct />
        </div>
        <div>
          <PopProduct />
        </div>
        <div>
          <PopProduct />
        </div>
        <div>
          <PopProduct />
        </div>
      </Carousel>
    </Stack>
  );
};

export default ProductCarousel;

/*
<Stack
      display='flex'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      direction='row'
      spacing={4}
      width='100%'
    >
      {items}
    </Stack>
*/
