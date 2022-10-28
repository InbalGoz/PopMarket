import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Footer from "../components/Footer";
import ProductListPage from "../../product/pages/ProductListPage";

//redux
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from "../../redux/slices/wishListSlice";

const WishListPage = () => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.wishlist);

  const content =
    favoriteProducts && favoriteProducts.length > 0 ? (
      <ProductListPage productList={favoriteProducts} />
    ) : (
      <p>No Items</p>
    );

  return (
    <Stack direction='column' spacing={4}>
      <Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ mb: 3 }}
        >
          <Typography
            variant='h3'
            component='div'
            sx={{
              fontFamily: "Lobster, cursive",
              // backgroundColor: "yellow",
              width: 800,
              textAlign: "center",
            }}
          >
            Wish List:
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Box
            sx={{
              //backgroundColor: "blue",
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
              maxWidth: 1800,
              minWidth: 1100,
            }}
          >
            {content}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
};

export default WishListPage;
