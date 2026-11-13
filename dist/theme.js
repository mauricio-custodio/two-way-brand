import { twowayColors } from "./colors.js";
/**
 * Mantine theme override with the TwoWay colors, and `twoway` as the primary color.
 * Pass it to `createTheme` or `mergeThemeOverrides`.
 */
export const twowayTheme = {
    colors: twowayColors,
    primaryColor: "twoway",
};
