import React from "react";
import { useAuthUser, useProfile } from "../data-access";
import { PageLayout } from "../PageLayout";
import { GCUAppProviders } from "./GCUAppProviders";
import { GCUBottomBar } from "./GCUBottomBar";
import { GCUStudentIdCard } from "./GCUStudentIdCard";
import { GCUTopBar } from "./GCUTopBar";
import { spacing } from "./theme";

export const GCUApp = () => {
  const { userId } = useAuthUser();
  const { profileState, updateProfile } = useProfile({ userId });

  if (profileState.status !== "success") {
    return <></>;
  }

  return (
    <GCUAppProviders>
      <PageLayout
        topBar={<GCUTopBar title="Student ID" />}
        body={
          <div
            style={{
              maxWidth: "480px",
              margin: "auto",
              padding: spacing(1),
            }}
          >
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
        }
        bottomBar={<GCUBottomBar />}
      />
    </GCUAppProviders>
  );
};
