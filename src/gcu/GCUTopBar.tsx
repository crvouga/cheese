import React from "react";
import { GCU_HEIGHTS, PURPLE_GRADIENT } from "./theme";

export const GCUTopBar = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        zIndex: 10,
        width: "100vw",
        height: GCU_HEIGHTS.topBar,
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
