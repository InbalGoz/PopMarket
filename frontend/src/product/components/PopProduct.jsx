import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
  IconButton,
  CardActionArea,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import CruellaPop from "../../images/cruella1.jpg";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slices/cartSlice";
import {
  iconFavoriteClick,
  updateProduct,
  fetchProduct,
} from "../../redux/slices/productSlice";

import {
  addWishListItem,
  removeWishListItem,
} from "../../redux/slices/wishListSlice";

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
  const dispatch = useDispatch();
  //const [clickFavorite, setClickFavorite] = useState(false);
  const { loading, error, clickedFavorite, product } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    // dispatch(fetchProduct(popProductId));
  }, []);

  const addToWishListHandler = async () => {
    // console.log("favorite", product.isFavorite);

    /* const newProduct = {
      id: popProduct._id,
      image: popProduct.image,
      name: popProduct.name,
      collectionType: popProduct.collectionType,
      collectionNumber: popProduct.collectionNumber,
      dimensions: popProduct.dimensions,
      weight: popProduct.weight,
      nameOfSeller: popProduct.nameOfSeller,
      rating: popProduct.rating,
      numReviews: popProduct.numReviews,
      price: popProduct.price,
      countInStock: popProduct.countInStock,
      isFavorite: !popProduct.isFavorite,
    };
    dispatch(updateProduct(newProduct));*/
    // setClickFavorite(true);
    //dispatch(iconFavoriteClick());
    dispatch(addWishListItem(popProduct._id));
  };

  const removeFromWishListHandler = () => {
    // setClickFavorite(false);
    dispatch(removeWishListItem(popProduct._id));
  };

  const addToCartHandler = () => {
    //console.log("popProduct._id", popProduct._id);

    dispatch(addCartItem(popProduct._id));
    //message that the item as been added to the cart
    //navigate(`/cart/${popProduct._id}`);
  };

  //console.log("dfd", window.location.pathname);

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
        {(!popProduct.isFavorite && (
          <IconButton
            aria-label='add to favorites'
            onClick={addToWishListHandler}
          >
            <FavoriteIcon />
          </IconButton>
        )) ||
          (popProduct.isFavorite && (
            <IconButton
              color='warning'
              aria-label='add to favorites'
              onClick={removeFromWishListHandler}
            >
              <FavoriteIcon />
            </IconButton>
          ))}

        <IconButton aria-label='add to favorites' onClick={addToCartHandler}>
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

  <IconButton aria-label='add to favorites'>
          <ShoppingCartIcon />
        </IconButton>
 
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
