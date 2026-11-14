import { BRAND_SHADE, STRONG_SHADE, secondary, twoway } from "./palette.generated.js";
export { BRAND_SHADE, STRONG_SHADE, secondary, twoway };
/** All brand colors, keyed by their Mantine color name. */
export declare const twowayColors: {
    twoway: import("@mantine/core").MantineColorsTuple;
    secondary: import("@mantine/core").MantineColorsTuple;
};
export type TwowayColor = keyof typeof twowayColors;
/** Each color's brand hex (its shade 6). */
export declare const brandHex: Record<TwowayColor, string>;
