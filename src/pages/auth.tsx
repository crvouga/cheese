import { Box, Button, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "../data-access";

export const AuthPage = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flex: 1 }} align="center">
            Fake ID
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>
        <Button
          startIcon={<GoogleIcon />}
          onClick={() => {
            signIn({ authMethod: "google" });
          }}
        >
          Continue With Google
        </Button>
      </Box>
    </>
  );
};
