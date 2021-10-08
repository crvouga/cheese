import React from "react";

export const PageLayout = ({
  topBar,
  body,
  bottomBar,
}: {
  topBar: React.ReactNode;
  body: React.ReactNode;
  bottomBar?: React.ReactNode;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        //
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
      // style={{
      //   paddingTop: `env(safe-area-inset-top)`,
      // }}
      >
        {topBar}
      </div>
      <div
        style={{
          flex: 1,
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {body}
      </div>
      {bottomBar && (
        <div
        // style={{
        //   paddingBottom: "env(safe-area-inset-bottom)",
        // }}
        >
          {bottomBar}
        </div>
      )}
    </div>
  );
};
