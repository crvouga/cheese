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
        height: "100%",
        maxHeight: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {topBar}
      <div
        style={{
          flex: 1,
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {body}
      </div>
      {bottomBar}
    </div>
  );
};
