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
  Button,
  Toolbar,
  InputBase,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const HomeHeader = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 1, p: 1 }}>
      <AppBar position='static' color='transparent' sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Typography
            variant='h2'
            component='div'
            textAlign='center'
            sx={{ flexGrow: 1, fontFamily: "Lobster, cursive", ml: 15 }}
          >
            Pop Market
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size='large' color='inherit'>
              <PersonIcon />
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new favorites'
              color='inherit'
            >
              <Badge badgeContent={17} color='error'>
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new products'
              color='inherit'
            >
              <Badge badgeContent={17} color='error'>
                <ShoppingBagIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HomeHeader;
