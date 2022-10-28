import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "20vh",
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export default Loader;
