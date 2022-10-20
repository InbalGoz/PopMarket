import React from "react";
import MainHeader from "../components/Navigaition/MainHeader";
import NavBar from "../components/Navigaition/NavBar";
import PopImage from "../../images/combined2.jpg";
import { Box, Grid, Stack } from "@mui/material";
import ProductCarousel from "../components/ProductCarousel";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Stack direction='column' spacing={2}>
      <MainHeader />
      <NavBar />
      <Box
        component='img'
        // minHeight='10vh'
        sx={{
          height: 430,
          width: "100%",
          // maxHeight: { xs: 600, md: 400 },
          //maxWidth: { xs: 350, md: 250 },
        }}
        alt='The house from the offer.'
        src={PopImage}
      />
      <ProductCarousel />
      <Footer />
    </Stack>
  );
};

export default HomePage;

//<img src='https://www.bug.co.il/images/site/pages/ac6e6548-eaf3-4b10-a86c-8b8983a265db.jpg'></img>
/*
<HomeNavBar />
      <NavBar />
      <Box
        component='img'
        sx={{
          height: 430,
          width: "100%",
          // maxHeight: { xs: 600, md: 400 },
          //maxWidth: { xs: 350, md: 250 },
        }}
        alt='The house from the offer.'
        src={PopImage}
      />
      <PopProduct />
*/
