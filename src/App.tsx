import { Switch, Route } from "react-router-dom";
import React from "react";
import { useAuthState } from "./data-access";
import { LoadingPage } from "./LoadingPage";
import { AuthPage } from "./pages/auth";
import { HomePage } from "./pages/home";
import { AuthUserPage } from "./pages/auth-user";

export const App = () => {
  const authState = useAuthState();

  if (authState.status === "unauth") {
    return <AuthPage />;
  }
  if (authState.status === "loading") {
    return <LoadingPage />;
  }

  return (
    <>
      <Switch>
        <Route path="/auth-user" component={AuthUserPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};
