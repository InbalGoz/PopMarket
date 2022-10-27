import React, { useEffect } from "react";
import MainHeader from "../../shared/components/Navigaition/MainHeader";
import NavBar from "../../shared/components/Navigaition/NavBar";
import Footer from "../../shared/components/Footer";
import PopProduct from "../components/PopProduct";
import { Box, Typography, Stack } from "@mui/material";
import backgList from "../../images/backg01.webp";
import bss from "../../images/pic01.jpg";

//should have props - get a specific list of products
//get the header for the
//props - (new/specific)

//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";

//if ...=='new' then show all the new peoducts

//return a list of boxes for the list of the products
const ProductListPage = ({ type }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    // if(type == "New"){}
    //dispatch(fetchNewProducts());
    //}
  }, []);

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
      <MainHeader />
      <NavBar />
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
            The Newest Pop:
          </Typography>
        </Box>
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
              //justifyContent: "center",
              maxWidth: 1450,
            }}
          >
            {products.map((product, index) => (
              <Box sx={{ m: 1 }}>
                <PopProduct key={index} popProduct={product} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
};

export default ProductListPage;
