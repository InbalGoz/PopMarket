import React from "react";
import { Typography, Link } from "@mui/material";

const Footer = () => {
  function Copyright(props) {
    return (
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        {...props}
      >
        {"Copyright © "}
        <Link color='inherit' href='https://mui.com/'>
          Pop Market
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return <Copyright sx={{ mt: 8, mb: 4 }} />;
};

export default Footer;
