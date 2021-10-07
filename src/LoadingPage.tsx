import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const LoadingPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
