import UploadIcon from "@mui/icons-material/Upload";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../BackButton";

export const AuthUserPage = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Link to="/">
            <BackButton edge="start" sx={{ marginRight: 2 }} />
          </Link>
          <Typography variant="h6" sx={{ flex: 1 }}>
            Profile
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <Avatar
            sx={{
              margin: "auto",
              width: "100px",
              height: "100px",
              marginBottom: 1,
            }}
            variant="rounded"
          />
          <Button startIcon={<UploadIcon />} variant="text">
            Upload
          </Button>
        </Box>

        <TextField label="Display Name" sx={{ marginBottom: 4 }} />

        <Button>Save Changes</Button>
      </Box>
    </>
  );
};
