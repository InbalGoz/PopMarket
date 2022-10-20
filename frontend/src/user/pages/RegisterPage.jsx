import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
//import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const theme = createTheme();

const RegisterPage = () => {
  return (
    <div>
      {" "}
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='md'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <Typography
              component='h1'
              variant='h3'
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Sign Up
            </Typography>
            <Box component='form' noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='name'
                    name='fullName'
                    required
                    fullWidth
                    id='fullName'
                    label='Full Name'
                    autoFocus
                    // onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='name'
                    name='phone'
                    required
                    fullWidth
                    id='phoNumber'
                    label='Phone Number'
                    // onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete='email'
                    name='email'
                    required
                    fullWidth
                    id='email'
                    label='Email'
                    // onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                    //onChange={onChange}
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                // onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>Already have an account? Sign in</Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default RegisterPage;

/*
 <ToLink to='/login' style={{ color: "blue" }}>
                    {" "}
                    Already have an account? Sign in
                  </ToLink>
*/
