import React, { useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import PopProduct from "../../product/components/PopProduct";
import Footer from "../components/Footer";
import ProductListPage from "../../product/pages/ProductListPage";

//redux
import { useSelector, useDispatch } from "react-redux";

import {
  getWishListProducts,
  removeAllWishListItem,
} from "../../redux/slices/wishListSlice";

const WishListPage = () => {
  const dispatch = useDispatch();
  const { wishListItems, loading } = useSelector((state) => state.wishList);

  useEffect(() => {
    dispatch(getWishListProducts());
  }, [dispatch]);

  const handleremove = () => {
    dispatch(removeAllWishListItem());
  };

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
              backgroundColor: "yellow",
              width: 800,
              textAlign: "center",
            }}
          >
            wishlist
          </Typography>
          <Button onClick={handleremove}>remove all</Button>
        </Box>
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
          {wishListItems ? (
            wishListItems.map((product, index) => (
              <Box key={index} sx={{ m: 1 }}>
                <PopProduct popProduct={product} />
              </Box>
            ))
          ) : (
            <div>no items</div>
          )}
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
};

export default WishListPage;

/*
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
*/
