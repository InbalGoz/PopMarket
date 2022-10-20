import React from "react";
import MainHeader from "../../shared/components/Navigaition/MainHeader";
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
} from "@mui/material";
import pop1 from "../assets/cruella1.jpg";

const PopProductPage = () => {
  return (
    <Stack direction='column' spacing={5}>
      <MainHeader />

      <Box display='flex' justifyContent='center' sx={{ width: "100%" }}>
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
            <img src={pop1}></img>
          </Box>
          <Box sx={{ p: 1, m: 1 }}>
            <Typography variant='h5' noWrap={false}>
              Pop Disney: Villains Cruella De Vil Vinyl
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
              Pop 736 - Diamond Collection Exclusive
            </Typography>
            <Divider />
            <Stack sx={{ mb: 3, mt: 2 }}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
            </Stack>
            <Divider />
            <Typography sx={{ mb: 3, mt: 2 }}>Price:</Typography>
            <Divider />
            <Typography variant='body1' sx={{ mb: 3, mt: 2 }}>
              Description:
            </Typography>
          </Box>
          <Box sx={{ p: 1, m: 1 }}>
            <Paper elevation={3} square={true} sx={{ minWidth: "25vh" }}>
              <Divider />
              <Typography sx={{ mb: 2, mt: 2, p: 1 }}>Price:</Typography>
              <Divider />
              <Typography sx={{ mb: 2, mt: 2, p: 1 }}>Status:</Typography>
              <Divider />
              <Box textAlign='center'>
                <Button>Add to cart</Button>
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
