export const GCU_COLOR = {
  darkPurple: "#440b66",
  purple: "#5625a0",
  lightPurple: "#532496",
  extraLightPurple: "#e5deee",
  white: "#ffffff",
  orange: "#fe6901",
  border: "rgba(0, 0, 0, 0.2)",
};

export const PURPLE_GRADIENT = `linear-gradient(0.25turn, ${GCU_COLOR.darkPurple}, ${GCU_COLOR.purple})`;

export const GCU_ASSETS = {
  logo: "/gcu-logo.svg",
};

export const SPACING = "1rem";

export const BORDER_RADIUS = "12px";

export const spacing = (n: number) => {
  return `calc(${SPACING} * ${n})`;
};
