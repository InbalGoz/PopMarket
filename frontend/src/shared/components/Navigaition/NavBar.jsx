import React from "react";
import { Box, Stack, Link } from "@mui/material";

const preventDefault = (event) => event.preventDefault();

const NavBar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={7}
    >
      <Link
        variant='h5'
        underline='hover'
        color='inherit'
        href='#'
        sx={{ fontFamily: "Lobster, cursive", fontSize: 30 }}
      >
        New
      </Link>
      <Link
        variant='h5'
        underline='hover'
        color='inherit'
        href='#'
        sx={{ fontFamily: "Lobster, cursive", fontSize: 30 }}
      >
        Popular
      </Link>
      <Link
        variant='h5'
        underline='hover'
        color='inherit'
        href='#'
        sx={{ fontFamily: "Lobster, cursive", fontSize: 30 }}
      >
        Special Edition
      </Link>
      <Link
        variant='h5'
        underline='hover'
        color='inherit'
        href='#'
        sx={{ fontFamily: "Lobster, cursive", fontSize: 30 }}
      >
        More
      </Link>
    </Stack>
  );
};

export default NavBar;
