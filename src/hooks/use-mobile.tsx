import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Resolved synchronously on first render. Returning `false` initially and
  // correcting in an effect makes every consumer render twice with different
  // values — for PixelCanvas that meant building a dense desktop grid, throwing
  // it away, and rebuilding at the mobile density on every phone load.
  const [isMobile, setIsMobile] = React.useState<boolean>(() =>
    typeof window === "undefined" ? false : window.innerWidth < MOBILE_BREAKPOINT,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    mql.addEventListener("change", onChange);
    onChange();
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
