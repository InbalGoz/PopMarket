import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Stack,
  AppBar,
  Typography,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Toolbar,
  InputBase,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";

const MainHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login/Register</MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    </Menu>
  );

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{ fontFamily: "Lobster, cursive", flexGrow: 1 }}
        >
          Pop Market
        </Typography>
        <Stack direction='row'>
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
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
