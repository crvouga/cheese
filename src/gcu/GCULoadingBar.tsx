import React, { useRef, useEffect, useState } from "react";
import classes from "./GCULoadingBar.module.css";
import { GCU_COLOR, GCU_HEIGHTS } from "./theme";

type IState = "rightToLeft" | "leftToRight";

const transition: { [state in IState]: IState } = {
  leftToRight: "rightToLeft",
  rightToLeft: "leftToRight",
};

export const GCULoadingBar = () => {
  const [state, setState] = useState<IState>("leftToRight");
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onAnimationEnd = () => {
      setState((state) => {
        return transition[state];
      });
    };

    const element = ref.current;

    if (element) {
      element.addEventListener("animationend", onAnimationEnd);

      return () => {
        element.removeEventListener("animationend", onAnimationEnd);
      };
    }
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: GCU_HEIGHTS.loadingBar,
          display: "bold",
          transform: state === "rightToLeft" ? "rotate(180deg)" : undefined,
        }}
      >
        <div
          ref={ref}
          className={
            state === "rightToLeft" ? classes.rightToLeft : classes.leftToRight
          }
          style={{
            backgroundColor: GCU_COLOR.green,
            width: "100%",
            height: "100%",
            transform: state === "rightToLeft" ? "rotate(-180deg)" : undefined,
          }}
        />
      </div>
    </>
  );
};
