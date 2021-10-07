import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import React from "react";
import { GCU_HEIGHTS, GCU_COLOR, spacing } from "./theme";

const style = {
  width: "32px",
  height: "32px",
};

const BOTTOM_ACTIONS = [
  {
    label: "Home",
    icon: <HomeOutlinedIcon style={style} />,
  },
  {
    label: "Student ID",
    icon: <ContactMailIcon style={style} />,
    selected: true,
  },
  {
    label: "Map",
    icon: <RoomOutlinedIcon style={style} />,
  },
  {
    label: "Hours",
    icon: <HourglassEmptyOutlinedIcon style={style} />,
  },
  {
    label: "More",
    icon: <MenuIcon style={style} />,
  },
];

export const BottomBarAction = ({
  icon,
  label,
  selected,
}: {
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: spacing(1),
        fontSize: "1em",
        color: selected ? GCU_COLOR.purple : "inherit",
      }}
    >
      {icon}
      <div style={{ fontSize: "0.8rem", overflow: "hidden" }}> {label}</div>
    </div>
  );
};

export const GCUBottomBarGutter = () => {
  return <div style={{ height: GCU_HEIGHTS.bottomBar, width: "100vw" }} />;
};

export const GCUBottomBar = () => {
  return (
    <div
      style={{
        zIndex: 10,
        position: "fixed",
        top: "auto",
        bottom: 0,
        left: 0,
        width: "100vw",
        height: GCU_HEIGHTS.bottomBar,
        color: GCU_COLOR.textSecondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: GCU_COLOR.white,
        borderTop: `solid 1px ${GCU_COLOR.border}`,
      }}
    >
      {BOTTOM_ACTIONS.map((action) => (
        <BottomBarAction
          key={action.label}
          selected={action.selected}
          icon={action.icon}
          label={action.label}
        />
      ))}
    </div>
  );
};
