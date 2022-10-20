import React from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
  Select,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const LoginPage = () => {
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
            }}
          >
            <Typography
              component='h1'
              variant='h3'
              sx={{ fontFamily: "Roboto, sans-serif" }}
            >
              Sign In
            </Typography>
            <Box
              component='form'
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                autoFocus
                //onChange={onChange}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                //onChange={onChange}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>Don't have an account? Sign Up</Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default LoginPage;

/*
  <ToLink to='/register' style={{ color: "blue" }}>
                    {" "}
                    {"Don't have an account? Sign Up"}
                  </ToLink>
*/
