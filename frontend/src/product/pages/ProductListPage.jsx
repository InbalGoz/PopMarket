import React, { useEffect } from "react";
import Loader from "../../shared/components/Loader";
import NavBar from "../../shared/components/Navigaition/NavBar";
import Footer from "../../shared/components/Footer";
import PopProduct from "../components/PopProduct";
import { Box, Typography, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";
import backgList from "../../images/backg01.webp";
import bss from "../../images/pic01.jpg";

//should have props - get a specific list of products
//get the header for the
//props - (new/specific)

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProducts,
  fetchOtherProducts,
  fetchPopularProducts,
  fetchNewProducts,
  fetchSpecialProducts,
} from "../../redux/slices/productSlice";

//if ...=='new' then show all the new peoducts

//return a list of boxes for the list of the products
const ProductListPage = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const { loading, productList } = useSelector((state) => state.product);
  const { itemList } = useSelector((state) => state.wishList);

  // console.log("wishlistpagee", itemList);

  useEffect(() => {
    if (location.pathname === "/popularproducts") {
      dispatch(fetchPopularProducts());
    } else if (location.pathname === "/newproducts") {
      dispatch(fetchNewProducts());
    } else if (location.pathname === "/speicalproducts") {
      dispatch(fetchSpecialProducts());
    } else if (location.pathname === "/moreproducts") {
      dispatch(fetchOtherProducts());
    }
  }, [dispatch]);

  const header =
    location.pathname === "/popularproducts"
      ? "Popular Pops"
      : location.pathname === "/newproducts"
      ? "New Pops"
      : location.pathname === "/speicalproducts"
      ? "Special Pops"
      : "Other types Pops";
  //location.pathname === "/moreproducts"
  // ? "Other types Pops"
  // : "Wish List";

  return (
    <Stack
      direction='column'
      spacing={4}
      // sx={{ backgroundImage: `url(${"static/src/img/main.jpg"})` }}
      /* style={{
        backgroundImage: `url(${bss})`,
        // backgroundSize: "17% 100%",
        backgroundSize: "100% 100%",
        // backgroundRepeat: "no-repeat",
        //height: "100%",
        // backgroundPosition: "right",
      }}*/
    >
      <NavBar />
      <Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ mb: 3 }}
        ></Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          //  sx={{ //backgroundColor: "red" }}
        >
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
            {loading ? (
              <Loader />
            ) : productList ? (
              productList.map((product, index) => (
                <Box key={index} sx={{ m: 1 }}>
                  <PopProduct popProduct={product} />
                </Box>
              ))
            ) : (
              <div>error</div>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
};

export default ProductListPage;

/*
 {type === "Popular" && popularProducts.map((product, index) => (
              <Box key={index} sx={{ m: 1 }}>
                <PopProduct popProduct={product} />
              </Box>
            ))}
*/

/*
otherProducts.map((product, index) => (
    <Box key={index} sx={{ m: 1 }}>
      <PopProduct popProduct={product} />
    </Box>
  ))
*/

/*
{loading ? (
              <Loader />
            ) : popularProducts.length > 0 ? (
              popularProducts.map((product, index) => (
                <Box key={index} sx={{ m: 1 }}>
                  <PopProduct popProduct={product} />
                </Box>
              ))
            ) : newProducts.length > 0 ? (
              newProducts.map((product, index) => (
                <Box key={index} sx={{ m: 1 }}>
                  <PopProduct popProduct={product} />
                </Box>
              ))
            ) : specialProducts.length > 0 ? (
              specialProducts.map((product, index) => (
                <Box key={index} sx={{ m: 1 }}>
                  <PopProduct popProduct={product} />
                </Box>
              ))
            ) : (
              otherProducts.map((product, index) => (
                <Box key={index} sx={{ m: 1 }}>
                  <PopProduct popProduct={product} />
                </Box>
              ))
            )}
*/

/*
: itemList ? (
              itemList.map((product, index) => (
                <Box key={index} sx={{ m: 1 }}>
                  <PopProduct popProduct={product} />
                </Box>
              ))
            )*/
