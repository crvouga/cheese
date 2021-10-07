import React, { useEffect, useRef } from "react";
import { GCU_COLOR } from "./theme";
import gsap from "gsap";
import classes from "./GCULoadingBar.module.css";

export const GCULoadingBar = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (leftRef.current && rightRef.current) {
      const timeline = gsap.timeline({
        repeat: -1,
      });

      timeline
        .from(leftRef.current, { width: "0%" })
        .to(leftRef.current, { width: "100%", duration: 2 });
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "28px",
        display: "bold",
      }}
    >
      <div
        className={classes.leftToRight}
        style={{
          backgroundColor: GCU_COLOR.green,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
