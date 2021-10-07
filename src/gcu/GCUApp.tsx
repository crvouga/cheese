import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useAuthUser, useProfile } from "../data-access";
import { GCUTopBar } from "./GCUTopBar";
import { GCUBottomBar, GCUBottomBarGutter } from "./GCUBottomBar";
import { GCUStudentIdCard } from "./GCUStudentIdCard";
import { spacing, theme } from "./theme";

export const GCUApp = () => {
  const { userId } = useAuthUser();
  const { profileState, updateProfile } = useProfile({ userId });

  if (profileState.status !== "success") {
    return <></>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <GCUTopBar title="Student ID" />

      <div style={{ maxWidth: "480px", margin: "auto", padding: spacing(1) }}>
        <GCUStudentIdCard
          src={profileState.profile.profilePictureUrl}
          name={profileState.profile.displayName}
          lastUpdatedDatetime={profileState.profile.gcuLastUpdatedDatetime}
          onRefresh={() => {
            updateProfile({
              gcuLastUpdatedDatetime: new Date().toISOString(),
            });
          }}
        />
      </div>

      <GCUBottomBar />
      <GCUBottomBarGutter />
    </ThemeProvider>
  );
};
