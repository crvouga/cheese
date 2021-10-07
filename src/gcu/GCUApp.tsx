import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useAuthUser, useProfile } from "../data-access";
import { GCUTopBar } from "./GCUTopBar";
import { GCUBottomBar } from "./GCUBottomBar";
import { GCUStudentIdCard } from "./GCUStudentIdCard";
import { spacing, theme } from "./theme";

export const GCUApp = () => {
  const { userId } = useAuthUser();
  const { profileState } = useProfile({ userId });

  if (profileState.status === "success") {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <GCUTopBar title="Student ID" />

        <div style={{ maxWidth: "480px", margin: "auto", padding: spacing(1) }}>
          <GCUStudentIdCard
            src={profileState.profile.profilePictureUrl}
            name={profileState.profile.displayName}
          />
        </div>

        <GCUBottomBar />
      </ThemeProvider>
    );
  }

  return <></>;
};
