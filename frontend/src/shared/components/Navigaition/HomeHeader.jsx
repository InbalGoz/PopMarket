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
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const HomeHeader = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      //minHeight='10vh'
      sx={{ flexGrow: 1 }}
    >
      <Grid container>
        <Grid item xs={11}>
          <Typography
            variant='h2'
            component='div'
            sx={{ fontFamily: "Lobster, cursive", textAlign: "center" }}
          >
            Pop Market
          </Typography>
        </Grid>
        <Grid item xs={0.5}>
          <Stack direction='row' alignItems='flex-end'>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeHeader;
