import type { MantineColorsTuple } from "@mantine/core";
/** Primary. TwoWay blue, #1976d2 at shade 6. Also the logo's color. */
export declare const twoway: MantineColorsTuple;
/** Secondary violet, #7c5cfc at shade 6. */
export declare const secondary: MantineColorsTuple;
/** Tertiary cyan, #22c1d6 at shade 6. */
export declare const tertiary: MantineColorsTuple;
/** Success green, #17b890 at shade 6. */
export declare const success: MantineColorsTuple;
/** Danger pink-red, #ff6b8a at shade 6. Shade 7 is two-way.org's `--danger-dark`, #e8446b. */
export declare const danger: MantineColorsTuple;
/** Warning amber, #ffc24b at shade 6. Shades 7 to 9 lean orange so they stay readable as text. */
export declare const warning: MantineColorsTuple;
/** All brand colors, keyed by their Mantine color name. */
export declare const twowayColors: {
    twoway: MantineColorsTuple;
    secondary: MantineColorsTuple;
    tertiary: MantineColorsTuple;
    success: MantineColorsTuple;
    danger: MantineColorsTuple;
    warning: MantineColorsTuple;
};
export type TwowayColor = keyof typeof twowayColors;
/** The shade that holds each color's brand hex. */
export declare const BRAND_SHADE = 6;
/** Each color's brand hex (its shade 6). */
export declare const brandHex: Record<TwowayColor, string>;
