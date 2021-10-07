import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth } from "./data-access";
import { GCUApp } from "./gcu/gcu";
import { LoadingPage } from "./LoadingPage";
import { AuthPage } from "./pages/auth";
import { HomePage } from "./pages/home";
import { ProfilePage } from "./pages/profile";

export const App = () => {
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
        <Route path="/gcu" component={GCUApp} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};
