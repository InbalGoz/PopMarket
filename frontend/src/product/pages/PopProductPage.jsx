import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../shared/components/Loader";
import Message from "../../shared/components/Message";
import Footer from "../../shared/components/Footer";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Rating,
  Divider,
  Paper,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, updateProduct } from "../../redux/slices/productSlice";
import { addCartItem } from "../../redux/slices/cartSlice";
import { productService } from "../../services/productService";

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

const PopProductPage = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  //const [qty, setQty] = useState(1);
  //const [rating, setRating] = useState(0);

  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  const addToCartHandler = () => {
    dispatch(addCartItem(id));
    // navigate(`/cart/${id}`);
  };

  const handleClickRating = (event) => {
    event.preventDefault();
    const newRating = event.target.value;

    const newProduct = {
      id: id,
      image: product.image,
      name: product.name,
      collectionType: product.collectionType,
      collectionNumber: product.collectionNumber,
      dimensions: product.dimensions,
      weight: product.weight,
      nameOfSeller: product.nameOfSeller,
      rating: Number(newRating),
      numReviews: product.numReviews,
      price: product.price,
      countInStock: product.countInStock,
      isFavorite: product.isFavorite,
    };
    dispatch(updateProduct(newProduct));
    // setRating(event.target.value);
  };

  if (!error && loading) {
    return <Loader />;
  }
  if (!loading && error) {
    return <Message />;
  }

  return (
    <Stack direction='column' spacing={5}>
      <Box
        display='flex'
        justifyContent='center'
        sx={{ mt: 10, width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            maxWidth: "130vh",
            minWidth: "120vh",
            minHeight: "60vh",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              // backgroundImage: `url(${pop1})`,
              // backgroundSize: "50% 60%",
            }}
          >
            <img src={product.image}></img>
          </Box>
          <Box sx={{ p: 1, m: 1 }}>
            <Typography variant='h5' noWrap={false}>
              {product.name}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
              {product.collectionNumber}
            </Typography>

            <Divider />
            <Box
              sx={{
                mb: 2,
                mt: 2,
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name='text-feedback'
                value={product.rating}
                precision={0.5}
                onChange={handleClickRating}
              />
              <Box sx={{ ml: 2 }}>{labels[product.rating]}</Box>
            </Box>
            <Divider />

            <Typography variant='body1' sx={{ mb: 2, mt: 2 }}>
              Description:
            </Typography>
            <p variant='body1' sx={{ mb: 3, mt: 1 }}>
              Dimensions: {product.dimensions}
            </p>
            <p variant='body1' sx={{ mb: 3, mt: 1 }}>
              Weight: {product.weight}
            </p>
            <p variant='body1' sx={{ mb: 3, mt: 1 }}>
              Name Of Seller: {product.nameOfSeller}
            </p>
          </Box>
          <Box sx={{ p: 1, m: 1 }}>
            <Paper elevation={3} square={true} sx={{ minWidth: "25vh" }}>
              <Divider />
              <Typography sx={{ mb: 2, mt: 2, p: 1 }}>
                Price: ${product.price}
              </Typography>
              <Divider />
              <Typography sx={{ mb: 2, mt: 2, p: 1 }}>
                Status: {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </Typography>

              <Divider />
              <Box textAlign='center'>
                <Button
                  variant='contained'
                  sx={{ mb: 1, mt: 2 }}
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
};

export default PopProductPage;

/*
<Divider />
              <Typography sx={{ mb: 2, mt: 2, p: 1 }}>
                Quantity:{" "}
                {product.countInStock > 0 && (
                  <FormControl
                    sx={{ ml: 1, mt: -1, minWidth: 120 }}
                    size='small'
                  >
                    <Select
                      labelId='select-small'
                      id='select-small'
                      value={qty}
                      //label='Age'
                      onChange={(event) => setQty(event.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <MenuItem key={x + 1} value={x + 1}>
                          {x + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Typography>
*/
