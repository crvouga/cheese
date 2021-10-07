import React from "react";
import { useBarcode } from "react-barcodes";
import { GCULogoLong } from "./GCULogoLong";
import {
  BORDER_RADIUS,
  GCU_COLOR,
  GCU_HEIGHTS,
  PURPLE_GRADIENT,
  spacing,
} from "./theme";
import CachedIcon from "@mui/icons-material/Cached";
import { GCULoadingBar } from "./GCULoadingBar";

const HEIGHT = "72px";

const Header = () => {
  return (
    <div
      style={{
        height: HEIGHT,
        background: PURPLE_GRADIENT,
        display: "flex",
        alignItems: "center",
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

const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + "" + ampm;
  return strTime;
};

const formateDatetime = (datetime?: string) => {
  const date = datetime ? new Date(datetime) : new Date();

  const locale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language;

  const fullMonth = date.toLocaleDateString(locale, { month: "long" });

  const day = date.getDate();

  const year = date.getFullYear();

  const time = formatAMPM(date);

  return `${fullMonth} ${day}, ${year}, ${time}`;
};

const Footer = ({ lastUpdatedDatetime }: { lastUpdatedDatetime?: string }) => {
  return (
    <div
      style={{
        background: PURPLE_GRADIENT,
        height: HEIGHT,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          {formateDatetime(lastUpdatedDatetime)}
        </div>
      </div>
    </div>
  );
};

const RefreshButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
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
        color: "#fff",
      }}
    >
      {title}
    </span>
  );
};

const Barcode = ({ value }: { value: string }) => {
  const { inputRef } = useBarcode({
    value,
    options: {
      height: GCU_HEIGHTS.barCodeHeight,
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
  lastUpdatedDatetime,
  onRefresh,
}: {
  src?: string;
  name?: string;
  lastUpdatedDatetime?: string;
  onRefresh?: () => void;
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
          <RefreshButton onClick={onRefresh} />
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
            style={{
              color: "#000",
              fontSize: "1.75em",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {name}
          </div>

          <Chip title="Student" />

          <Barcode value={`${name ?? ""} Hello World`} />
        </div>
      </div>

      <GCULoadingBar />

      <Footer lastUpdatedDatetime={lastUpdatedDatetime} />
    </div>
  );
};
