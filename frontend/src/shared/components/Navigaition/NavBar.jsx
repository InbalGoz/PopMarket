import React from "react";
import {
  Box,
  Stack,
  Grid,
  AppBar,
  Typography,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Toolbar,
  InputBase,
  Button,
  Link,
  Breadcrumbs,
} from "@mui/material";

const preventDefault = (event) => event.preventDefault();
const NavBar = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      //minHeight='8vh'
    >
      <Stack
        direction='row'
        spacing={7}
        sx={{
          textAlign: "center",
          marginRight: 20,

          fontSize: 60,
        }}
      >
        <Link
          variant='h5'
          underline='hover'
          color='inherit'
          href='#'
          sx={{ fontFamily: "Lobster, cursive" }}
        >
          New
        </Link>
        <Link
          variant='h5'
          underline='hover'
          color='inherit'
          href='#'
          sx={{ fontFamily: "Lobster, cursive" }}
        >
          Popular
        </Link>
        <Link
          variant='h5'
          underline='hover'
          color='inherit'
          href='#'
          sx={{ fontFamily: "Lobster, cursive" }}
        >
          Special Edition
        </Link>
        <Link
          variant='h5'
          underline='hover'
          color='inherit'
          href='#'
          sx={{ fontFamily: "Lobster, cursive" }}
        >
          More
        </Link>
      </Stack>
    </Box>
  );
};

export default NavBar;
/*
 <div style={{ display: "flex", justifyContent: "center" }}>
     
    </div>
*/
