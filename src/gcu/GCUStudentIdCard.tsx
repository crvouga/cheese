import React from "react";
import { GCULogoLong } from "./GCULogoLong";
import { BORDER_RADIUS, GCU_COLOR, PURPLE_GRADIENT, spacing } from "./theme";

const Header = () => {
  return (
    <div
      style={{
        padding: spacing(1),
        background: PURPLE_GRADIENT,
      }}
    >
      <div
        style={{
          margin: "auto",
          // padding: SPACING,
          width: "66.66%",
        }}
      >
        <GCULogoLong />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        background: PURPLE_GRADIENT,
        padding: spacing(1),
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: `1em`,
            color: "rgba(255, 255, 255, 0.5)",
            fontStyle: "italic",
            marginBottom: 0,
          }}
        >
          Last Updated:
        </div>
        <div style={{ fontSize: `1.2em`, fontWeight: "bold" }}>
          October 6, 2021, 1:38pm
        </div>
      </div>
    </div>
  );
};

export const GCUStudentIdCard = ({
  src,
  name,
}: {
  src?: string;
  name?: string;
}) => {
  return (
    <div
      style={{
        borderRadius: BORDER_RADIUS,
        overflow: "hidden",
        width: "100%",
        border: `solid 1px ${GCU_COLOR.border}`,
      }}
    >
      <Header />

      <div
        style={{
          width: "100%",
          padding: spacing(1),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "80%",
            aspectRatio: "1",
            objectFit: "cover",
            borderRadius: BORDER_RADIUS,
          }}
          src={src}
          alt={name}
        />
        <div style={{ color: "#000", fontSize: "1.75em", fontWeight: "bold" }}>
          {name}
        </div>

        <span
          style={{
            backgroundColor: GCU_COLOR.orange,
            padding: `0 ${spacing(1 / 2)}`,
            borderRadius: `calc(${BORDER_RADIUS} *  1/2)`,
            fontWeight: "normal",
          }}
        >
          Student
        </span>

        {/* <Barcode value="https://www.labnol.org/reverse/" /> */}
      </div>

      <Footer />
    </div>
  );
};
