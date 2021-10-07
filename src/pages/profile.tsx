import {
  Dialog,
  DialogActions,
  DialogTitle,
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../BackButton";
import { useAuth, useAuthUser, useProfile } from "../data-access";
import { ProfileDisplayNameForm } from "./ProfileDisplayNameForm";
import { ProfilePictureForm } from "./ProfilePictureForm";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const ProfilePage = () => {
  const { signOut } = useAuth();
  const { userId } = useAuthUser();
  const { profileState, updateProfilePicture, updateProfile } = useProfile({
    userId,
  });

  const [state, setState] = useState<"opened" | "closed">("closed");
  const handleCancel = () => {
    setState("closed");
  };
  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="sm" disableGutters>
          <Toolbar>
            <Link to="/">
              <BackButton edge="start" sx={{ marginRight: 2 }} />
            </Link>
            <Typography variant="h6" sx={{ flex: 1 }}>
              Profile
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      {profileState.status === "success" && (
        <Container
          maxWidth="sm"
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
            onUpdate={updateProfile}
          />

          <Button
            sx={{ marginTop: 2 }}
            variant="outlined"
            onClick={() => {
              setState("opened");
            }}
            startIcon={<ExitToAppIcon />}
          >
            Sign Out
          </Button>

          <Dialog open={state === "opened"} onClose={handleCancel}>
            <DialogTitle>Sign out of Fake ID?</DialogTitle>
            <DialogActions>
              <Button variant="text" fullWidth={false} onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="text" fullWidth={false} onClick={handleSignOut}>
                Sign Out
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      )}
    </>
  );
};
