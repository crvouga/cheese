import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth } from "./data-access";
import { GCURoot } from "./gcu";
import { AuthPage } from "./pages/auth";
import { HomePage } from "./pages/home";
import { ProfilePage } from "./pages/profile";
import { ThemeProvider } from "./ThemeProvider";

export const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <BrowserRouter>
          <SubscribeAuth />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const SubscribeAuth = () => {
  const { authState } = useAuth();

  if (authState.status === "unauth") {
    return <AuthPage />;
  }

  if (authState.status === "loading") {
    return <LoadingPage />;
  }

  return (
    <>
      <Switch>
        <Route path="/gcu" component={GCURoot} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};

const LoadingPage = () => {
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
