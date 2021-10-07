import React from "react";
import { useBarcode } from "react-barcodes";
import { GCULogoLong } from "./GCULogoLong";
import { BORDER_RADIUS, GCU_COLOR, PURPLE_GRADIENT, spacing } from "./theme";
import CachedIcon from "@mui/icons-material/Cached";
import { GCULoadingBar } from "./GCULoadingBar";

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
          width: "60%",
          color: "#fff",
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
        <div style={{ fontSize: `1.2em`, fontWeight: "bold", color: "#fff" }}>
          October 6, 2021, 1:38pm
        </div>
      </div>
    </div>
  );
};

const RefreshButton = () => {
  return (
    <div
      style={{
        color: GCU_COLOR.purple,
        backgroundColor: GCU_COLOR.extraLightPurple,
        borderRadius: "8px",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CachedIcon />
    </div>
  );
};

const Chip = ({ title }: { title: string }) => {
  return (
    <span
      style={{
        backgroundColor: GCU_COLOR.orange,
        padding: `0 ${spacing(1 / 2)}`,
        borderRadius: `calc(${BORDER_RADIUS} *  1/2)`,
        fontWeight: "bolder",
        color: "#fff",
      }}
    >
      {title}
    </span>
  );
};

const Barcode = () => {
  const { inputRef } = useBarcode({
    value: "hello world",
    options: {
      height: 48,
      displayValue: false,
    },
  });

  return (
    <div style={{ width: "100%", overflow: "hidden", marginBottom: -12 }}>
      <canvas width="100%" ref={inputRef} />
    </div>
  );
};

const Avatar = ({ src, alt }: { src?: string; alt?: string }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "100%",
        height: 0,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          borderRadius: BORDER_RADIUS,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={src}
        alt={alt}
      />
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
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row-reverse",
          }}
        >
          <RefreshButton />
        </div>

        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={src} alt={name} />

          <div
            style={{ color: "#000", fontSize: "1.75em", fontWeight: "bold" }}
          >
            {name}
          </div>

          <Chip title="Student" />

          <Barcode />
        </div>
      </div>

      <GCULoadingBar />

      <Footer />
    </div>
  );
};
