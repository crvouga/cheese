import React from "react";
import { GCUApp } from "./GCUApp";
import { GCUAppProviders } from "./GCUAppProviders";

export const GCURoot = () => {
  return (
    <GCUAppProviders>
      <GCUApp />
    </GCUAppProviders>
  );
};
