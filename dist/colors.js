// TwoWay brand colors, each a 10-shade Mantine tuple (0 = lightest, 9 = darkest).
// The values live in DESIGN.md; `npm run build` copies them into palette.generated.ts.
//
// Shade 6 is always the brand hex. Mantine's light color scheme uses shade 6 for
// filled components, so `<Button color="secondary">` renders exactly #7c5cfc.
import { BRAND_SHADE, danger, secondary, success, tertiary, twoway, warning, } from "./palette.generated.js";
export { BRAND_SHADE, danger, secondary, success, tertiary, twoway, warning };
/** All brand colors, keyed by their Mantine color name. */
export const twowayColors = { twoway, secondary, tertiary, success, danger, warning };
/** Each color's brand hex (its shade 6). */
export const brandHex = {
    twoway: twoway[BRAND_SHADE],
    secondary: secondary[BRAND_SHADE],
    tertiary: tertiary[BRAND_SHADE],
    success: success[BRAND_SHADE],
    danger: danger[BRAND_SHADE],
    warning: warning[BRAND_SHADE],
};
