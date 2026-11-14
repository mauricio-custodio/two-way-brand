import { BRAND_SHADE, danger, secondary, success, tertiary, twoway, warning } from "./palette.generated.js";
export { BRAND_SHADE, danger, secondary, success, tertiary, twoway, warning };
/** All brand colors, keyed by their Mantine color name. */
export declare const twowayColors: {
    twoway: import("@mantine/core").MantineColorsTuple;
    secondary: import("@mantine/core").MantineColorsTuple;
    tertiary: import("@mantine/core").MantineColorsTuple;
    success: import("@mantine/core").MantineColorsTuple;
    danger: import("@mantine/core").MantineColorsTuple;
    warning: import("@mantine/core").MantineColorsTuple;
};
export type TwowayColor = keyof typeof twowayColors;
/** Each color's brand hex (its shade 6). */
export declare const brandHex: Record<TwowayColor, string>;
