import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../BackButton";
import { useProfile, useAuthUser } from "../data-access";
import { ProfileDisplayNameForm } from "./ProfileDisplayNameForm";
import { ProfilePictureForm } from "./ProfilePictureForm";

export const ProfilePage = () => {
  const { userId } = useAuthUser();
  const { profileState, updateProfilePicture, updateDisplayName } = useProfile({
    userId,
  });
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
      {profileState.status === "success" && (
        <Box
          sx={{
            p: 2,
          }}
        >
          <ProfilePictureForm
            profilePictureUrl={profileState.profile.profilePictureUrl}
            onUpdate={updateProfilePicture}
          />
          <ProfileDisplayNameForm
            displayName={profileState.profile.displayName}
            onUpdate={updateDisplayName}
          />
        </Box>
      )}
    </>
  );
};
