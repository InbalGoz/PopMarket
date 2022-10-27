import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Stack,
  Button,
  IconButton,
  CardActionArea,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CruellaPop from "../../images/cruella1.jpg";

//redux
import { useSelector, useDispatch } from "react-redux";

//get a specific peoduct and handle the actions
const PopProduct = ({ popProduct }) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        maxWidth: 350,
        minWidth: 350,
        maxHeight: 440,
        minHeight: 440,
        // backgroundColor: "red",
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
        <CardContent style={{ fontFamily: "Lobster, cursive" }}>
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
          <Stack sx={{ height: 15 }}>
            <Rating
              name='half-rating'
              defaultValue={popProduct.rating}
              precision={0.5}
            />
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label='add to favorites'>
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
