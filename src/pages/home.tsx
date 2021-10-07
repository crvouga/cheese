import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AuthUserAvatar } from "../AuthUserAvatar";

export const HomePage = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flex: 1 }}>
            Fake ID
          </Typography>
          <Link to="/profile">
            <AuthUserAvatar />
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          p: 2,
          "> *": {
            marginBottom: 2,
          },
        }}
      >
        <Link to="/gcu">
          <Button>Open GCU Fake ID</Button>
        </Link>
      </Box>
    </>
  );
};
