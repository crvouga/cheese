import { createTheme } from "@mui/material";

export const GCU_COLOR = {
  darkPurple: "#440b66",
  green: "#1d804b",
  purple: "#4e2399",
  lightPurple: "#532496",
  extraLightPurple: "#e5deee",
  white: "#ffffff",
  orange: "#fe6901",
  border: "#d7d7d6",
  textSecondary: "#a0a0a0",
};

export const PURPLE_GRADIENT = `linear-gradient(0.25turn, ${GCU_COLOR.darkPurple}, ${GCU_COLOR.purple})`;

export const GCU_ASSETS = {
  logo: "/gcu-logo.svg",
};

export const SPACING = "1rem";

export const BORDER_RADIUS = "8px";

export const spacing = (n: number) => {
  return `calc(${SPACING} * ${n})`;
};

export const theme = createTheme({
  palette: {
    mode: "light",
  },
});
