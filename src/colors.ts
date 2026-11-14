// TwoWay brand colors, each a 10-shade Mantine tuple (0 = lightest, 9 = darkest).
// DESIGN.md defines the base (shade 6) and secondary's strong shade (shade 8);
// `npm run build` generates the other shades into palette.generated.ts.
//
// Mantine's light color scheme uses shade 6 for filled components, so
// `<Button color="secondary">` renders exactly #7c5cfc.
import { BRAND_SHADE, STRONG_SHADE, secondary, twoway } from "./palette.generated.js";

export { BRAND_SHADE, STRONG_SHADE, secondary, twoway };

/** All brand colors, keyed by their Mantine color name. */
export const twowayColors = { twoway, secondary };

export type TwowayColor = keyof typeof twowayColors;

/** Each color's brand hex (its shade 6). */
export const brandHex: Record<TwowayColor, string> = {
	twoway: twoway[BRAND_SHADE],
	secondary: secondary[BRAND_SHADE],
};
