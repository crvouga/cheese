import React from "react";
import { PURPLE_GRADIENT } from "./theme";

export const GCUTopBar = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100vw",
        height: "56px",
        background: PURPLE_GRADIENT,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: "#fff",
        }}
      >
        {title}
      </div>
    </div>
  );
};
