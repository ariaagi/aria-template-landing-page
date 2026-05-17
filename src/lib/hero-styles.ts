/** Shared hero radial background — light center, dark edges */
export const heroRadialGradientClass =
  "bg-[radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,oklch(0.12_0_0)_100%)]";

/** Hero visual card — same radial as hero, focal point flipped 180° (light at bottom). */
export const heroVisualRadialGradientClass =
  "bg-[radial-gradient(125%_125%_at_50%_90%,var(--background)_40%,oklch(0.12_0_0)_100%)]";

/**
 * Social preview (`/opengraph-image`) — same radial as hero visual, no CSS variables.
 * Not used on the scrollable page; hero video uses `heroVisualRadialGradientClass`.
 */
export const heroVisualOgBackground =
  "radial-gradient(125% 125% at 50% 90%, oklch(1 0 0) 40%, oklch(0.12 0 0) 100%)";

export const heroVisualOgTextColor = "oklch(0.205 0 0)";
