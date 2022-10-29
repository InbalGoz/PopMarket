import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Stack,
  Box,
  IconButton,
  CardActionArea,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import CruellaPop from "../../images/cruella1.jpg";

//redux
import { useSelector, useDispatch } from "react-redux";

import { addToWishList } from "../../redux/slices/wishListSlice";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

//get a specific peoduct and handle the actions
const PopProduct = ({ popProduct }) => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (click) {
      handleRemoveFromWishList();
    } else {
      handleAddToWishList();
    }
  };

  const handleAddToWishList = () => {
    console.log("click", click);
    setClick(true);
    dispatch(addToWishList());
  };

  const handleRemoveFromWishList = () => {
    console.log("click", click);
    setClick(false);
    dispatch(addToWishList());
  };

  console.log("dfd", window.location.pathname);

  return (
    <Card
      sx={{
        maxWidth: 350,
        minWidth: 350,
        maxHeight: 450,
        minHeight: 450,
        // backgroundColor: "red",
      }}
    >
      <RouterLink
        to={`/product/${popProduct._id}`}
        style={{
          color: "black",
          textDecoration: "none",
        }}
      >
        <CardActionArea>
          <CardMedia
            component='img'
            height='240'
            width='345'
            src={popProduct.image}
            //sx={{ maxHeight: 240, minHeight: 240 }}
          ></CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant='h6'
              component='div'
              sx={{ height: 50, mb: 2 }}
            >
              {popProduct.name}
            </Typography>

            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ mb: 1, height: 30 }}
            >
              {popProduct.collectionNumber}
            </Typography>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name='text-feedback'
                readOnly
                value={popProduct.rating}
                precision={0.5}
              />
              <Box sx={{ ml: 2 }}>{labels[popProduct.rating]}</Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </RouterLink>
      <CardActions>
        <IconButton aria-label='add to favorites' onClick={handleFavoriteClick}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='add to favorites'>
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PopProduct;

/*
 // rating + number of reviews?
 price
 
*/

/*
 <Stack sx={{ height: 15 }}>
            <Rating
              name='half-rating'
              defaultValue={popProduct.rating}
              precision={0.5}
            />
            <Typography sx={{ ml: 2 }}>hello</Typography>
          </Stack>
*/
