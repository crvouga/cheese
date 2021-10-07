import {
  Box,
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AuthUserAvatar } from "../AuthUserAvatar";
import LaunchIcon from "@mui/icons-material/Launch";
import ReactPlayer from "react-player";

const CHEESE_VIDEO_URL = "https://www.youtube.com/watch?v=3xPTR2lezGI";

export const HomePage = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="sm" disableGutters>
          <Toolbar>
            <Typography variant="h6" sx={{ flex: 1 }}>
              Cheese 🧀
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
      <Container disableGutters maxWidth="sm">
        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
            paddingTop: "56.25%",
            height: 0,
            width: "100%",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <ReactPlayer
              controls
              loop
              width="100%"
              height="100%"
              url={CHEESE_VIDEO_URL}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
