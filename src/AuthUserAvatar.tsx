import React from "react";
import { Avatar } from "@mui/material";
import { useAuthUser, useProfile } from "./data-access";

export const AuthUserAvatar = () => {
  const { userId } = useAuthUser();
  const { profileState } = useProfile({ userId });

  if (profileState.status === "success") {
    return <Avatar src={profileState.profile.profilePictureUrl} />;
  }

  return <Avatar />;
};
