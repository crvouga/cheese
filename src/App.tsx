import { Switch, Route } from "react-router-dom";
import React from "react";
import { useAuth, useProfile } from "./data-access";
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
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};
