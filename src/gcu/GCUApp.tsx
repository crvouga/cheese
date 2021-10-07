import React, { useEffect } from "react";
import { useAuthUser, useProfile } from "../data-access";
import { PageLayout } from "../PageLayout";
import { GCUBottomBar } from "./GCUBottomBar";
import { GCUStudentIdCard } from "./GCUStudentIdCard";
import { GCUTopBar } from "./GCUTopBar";
import { PURPLE_GRADIENT, spacing } from "./theme";

export const GCUApp = () => {
  const { userId } = useAuthUser();
  const { profileState, updateProfile } = useProfile({ userId });

  useEffect(() => {
    window.document.body.style.background = PURPLE_GRADIENT;

    return () => {
      window.document.body.style.backgroundColor = "";
    };
  }, []);

  if (profileState.status !== "success") {
    return <></>;
  }

  return (
    <>
      <PageLayout
        topBar={<GCUTopBar title="Student ID" />}
        body={
          <div
            style={{
              maxWidth: "480px",
              margin: "auto",
              padding: spacing(1),
              background: "#fff",
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
    </>
  );
};
