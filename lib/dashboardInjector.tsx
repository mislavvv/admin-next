import React from "react";
import { createRoot } from "react-dom/client";

import Dashboard from "../pages/dashboard";

const roots: Record<string, any> = {};

export const inject = (parentElementId: string) => {
  const container = document.getElementById(parentElementId);
  if (container) {
    const root = createRoot(container);
    roots[parentElementId] = root;
    root.render(<Dashboard />);
  }
};

export const unmount = (parentElementId: string) => {
  const root = roots[parentElementId];
  if (root) {
    root.unmount();
    delete roots[parentElementId];
  }
};
