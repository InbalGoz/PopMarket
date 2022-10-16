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
import CruellaPop from "../assets/cruella1.jpg";

const PopProduct = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='240'
          src={CruellaPop}
          //width={}
          //src='https://www.bug.co.il/images/site/products/8cdd645c-fafd-4704-90f5-ed0ec8354c46.jpg'
        ></CardMedia>
        <CardContent style={{ fontFamily: "Lobster, cursive" }}>
          <Typography gutterBottom variant='h6' component='div'>
            Pop Disney: Villains Cruella De Vil Vinyl Figure
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            Pop 736 - Diamond Collection Exclusive
          </Typography>
          <Stack>
            <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
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
