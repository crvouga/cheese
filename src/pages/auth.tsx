import GoogleIcon from "@mui/icons-material/Google";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../data-access";
import { PageLayout } from "../PageLayout";

export const AuthPage = () => {
  const { signIn } = useAuth();
  return (
    <>
      <PageLayout
        topBar={
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" sx={{ flex: 1 }} align="center">
                Cheese 🧀
              </Typography>
            </Toolbar>
          </AppBar>
        }
        body={
          <Container maxWidth="sm" sx={{ p: 2 }}>
            <Button
              startIcon={<GoogleIcon />}
              onClick={() => {
                signIn({ authMethod: "google" });
              }}
            >
              Continue With Google
            </Button>
          </Container>
        }
      />
    </>
  );
};
