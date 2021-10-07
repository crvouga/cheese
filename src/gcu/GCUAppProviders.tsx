import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "./theme";

export const GCUAppProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
