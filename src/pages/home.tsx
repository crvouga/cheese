import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AuthUserAvatar } from "../AuthUserAvatar";
import LaunchIcon from "@mui/icons-material/Launch";
export const HomePage = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="sm" disableGutters>
          <Toolbar>
            <Typography variant="h6" sx={{ flex: 1 }}>
              Fake ID
            </Typography>
            <Link to="/profile">
              <AuthUserAvatar />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        maxWidth="sm"
        sx={{
          p: 2,
          "> *": {
            marginBottom: 2,
          },
        }}
      >
        <Link to="/gcu">
          <Button startIcon={<LaunchIcon />} sx={{ textDecoration: "none" }}>
            Open GCU
          </Button>
        </Link>
      </Container>
    </>
  );
};
