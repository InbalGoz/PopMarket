import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
//import Alert from "@mui/material/Alert";
//import Stack from "@mui/material/Stack";
import {
  Typography,
  List,
  ListItem,
  Box,
  Grid,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

//redux
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem, getCartProducts } from "../../redux/slices/cartSlice";
import Message from "../../shared/components/Message";
import Loader from "../../shared/components/Loader";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CartPage = () => {
  //const { id } = useParams();
  //const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const { cartItems, loading } = useSelector((state) => state.cart);

  console.log("cartpage", cartItems);

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  const removeFromCartHandler = (itemId) => {
    dispatch(removeCartItem(itemId));
  };
  return (
    <>
      <Box sx={{ fontFamily: "Roboto, sans-serif ", flexGrow: 1, m: 10, p: 1 }}>
        <Typography variant='h3' gutterBottom>
          Shopping Cart:
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {loading ? (
            <Loader />
          ) : cartItems.length === 0 ? (
            <Message />
          ) : (
            <List
              sx={{
                width: "100%",
                maxWidth: 1100,
                bgcolor: "background.paper",
              }}
            >
              {cartItems &&
                cartItems.map((item, index) => (
                  <ListItem key={index}>
                    <Paper
                      sx={{
                        p: 2,
                        margin: "auto",
                        maxWidth: 1100,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item>
                          <Box sx={{ width: 170, height: 128 }}>
                            <Img
                              width={165}
                              height={128}
                              alt='complex'
                              src={item.image}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction='column'
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography
                                gutterBottom
                                variant='subtitle1'
                                component='div'
                              >
                                {item.name}
                              </Typography>

                              <Typography variant='body2' gutterBottom>
                                Price: ${item.price}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <IconButton
                              onClick={() => removeFromCartHandler(item._id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </ListItem>
                ))}
            </List>
          )}

          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 400,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Typography variant='h5' gutterBottom>
              Subtotal ({cartItems.length}) Items
            </Typography>
            <Typography variant='body2' gutterBottom>
              Total Price: $
              {cartItems
                .reduce((acc, item) => acc + 1 * item.price, 0)
                .toFixed(2)}
            </Typography>
            <Button>Buy</Button>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default CartPage;

/*
 <Box sx={{ flexGrow: 1, m: 1, p: 1 }}>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Typography>{item.name}</Typography>
                    <Typography>${item.price}</Typography>
                    <IconButton size='large' color='inherit'>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>

                 <Box sx={{ flexGrow: 1, m: 3, p: 1, fontFamily: "Roboto, sans-serif " }}>
        <Typography variant='h3' gutterBottom>
          Shopping Cart:
        </Typography>
      </Box>
*/

/*
 <>
      <Typography>Shopping Cart:</Typography>
      <Box display='flex' justifyContent='center' alignItems='center'>
        {cartItems.length === 0 ? (
          <Message />
        ) : (
          <List
            sx={{
              width: "100%",
              maxWidth: 1500,
              bgcolor: "background.paper",
            }}
          >
            {cartItems.map((item) => (
              <ListItem alignItems='flex-start'>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <ListItemAvatar>
                      <Avatar
                        alt='Remy Sharp'
                        variant='square'
                        src={item.image}
                        sx={{ minWidth: 250, minHeight: 170 }}
                      />
                    </ListItemAvatar>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Typography variant='h6' gutterBottom>
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Typography variant='h6' gutterBottom>
                      ${item.price}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <IconButton size='large' color='inherit'>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
            <Divider variant='inset' component='li' />
          </List>
        )}
      </Box>
*/
