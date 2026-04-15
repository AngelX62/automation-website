import * as React from "react";

type LayoutChromeContextValue = {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LayoutChromeContext =
  React.createContext<LayoutChromeContextValue | null>(null);

export function useLayoutChrome() {
  const context = React.useContext(LayoutChromeContext);

  if (!context) {
    throw new Error("useLayoutChrome must be used within LayoutChromeContext.");
  }

  return context;
}
