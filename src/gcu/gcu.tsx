import React from "react";
import { useAuthUser, useProfile } from "../data-access";
import { GCUAppBar } from "./GCUAppBar";
import { GCUStudentIdCard } from "./GCUStudentIdCard";
import { spacing, GCU_COLOR } from "./theme";

export const GCUApp = () => {
  const { userId } = useAuthUser();
  const { profileState } = useProfile({ userId });

  if (profileState.status === "success") {
    return (
      <div
        style={{
          background: GCU_COLOR.white,
          height: "100vh",
        }}
      >
        <GCUAppBar />

        <div style={{ padding: spacing(1) }}>
          <GCUStudentIdCard
            src={profileState.profile.profilePictureUrl}
            name={profileState.profile.displayName}
          />
        </div>
      </div>
    );
  }
  return <></>;
};
