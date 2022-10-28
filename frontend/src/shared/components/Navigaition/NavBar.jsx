import React from "react";
import { Box, Stack, Link, Typography } from "@mui/material";
import { Link as Linker } from "react-router-dom";

//const preventDefault = (event) => event.preventDefault();

const NavBar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={7}
    >
      <Linker
        to='/newproducts'
        // underline='hover'
        style={{
          color: "black",
          textDecoration: "none",
          fontFamily: "Lobster, cursive",
          fontSize: 30,
        }}
      >
        New
      </Linker>

      <Linker
        to='/popularproducts'
        underline='hover'
        style={{
          color: "black",
          textDecoration: "none",
          fontFamily: "Lobster, cursive",
          fontSize: 30,
        }}
      >
        Popular
      </Linker>

      <Linker
        to='/speicalproducts'
        style={{
          color: "black",
          textDecoration: "none",
          fontFamily: "Lobster, cursive",
          fontSize: 30,
        }}
      >
        Special Edition
      </Linker>

      <Linker
        to='/moreproducts'
        underline='hover'
        style={{
          color: "black",
          textDecoration: "none",
          fontFamily: "Lobster, cursive",
          fontSize: 30,
        }}
      >
        More
      </Linker>
    </Stack>
  );
};

export default NavBar;
