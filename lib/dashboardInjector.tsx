import React from "react";
import { createRoot } from "react-dom/client";

import Dashboard from "../pages/dashboard";
import { createShadowContainer, deleteShadowContainer } from "./styleLoader";

const roots: Record<string, any> = {};

export const inject = (parentElementId: string) => {
  const appPlaceholder = createShadowContainer(parentElementId);
  if (appPlaceholder) {
    const root = createRoot(appPlaceholder);
    roots[parentElementId] = root;
    root.render(<Dashboard />);
  }
};

export const unmount = (parentElementId: string) => {
  deleteShadowContainer(parentElementId);
  const root = roots[parentElementId];
  if (root) {
    root.unmount();
    delete roots[parentElementId];
  }
};
