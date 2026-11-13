// TwoWay brand colors, each a 10-shade Mantine tuple (0 = lightest, 9 = darkest).
//
// Shade 6 is always the brand hex. Mantine's light color scheme uses shade 6 for
// filled components, so `<Button color="secondary">` renders exactly #7c5cfc.
//
// All six follow the same OKLCH lightness and chroma steps, anchored on the brand
// hex, so every color steps the same way from 0 to 9. The steps come from the
// earlier `twoway` tuple in two-way-sul-mineira's theme.ts (built around #2f6fee).
/** Primary. TwoWay blue, #1976d2 at shade 6. Also the logo's color. */
export const twoway = [
    "#eef4fc",
    "#d5e4f7",
    "#adcaee",
    "#7fade4",
    "#5192db",
    "#3582d6",
    "#1976d2",
    "#045fb1",
    "#034e93",
    "#013d75",
];
/** Secondary violet, #7c5cfc at shade 6. */
export const secondary = [
    "#f2f2fe",
    "#e1e1ff",
    "#c6c4fe",
    "#aaa2fe",
    "#9180fe",
    "#846cfd",
    "#7c5cfc",
    "#683de7",
    "#5634c0",
    "#442b98",
];
/** Tertiary cyan, #22c1d6 at shade 6. */
export const tertiary = [
    "#ecf5f7",
    "#d9eff3",
    "#bae4eb",
    "#93d8e3",
    "#66ccdd",
    "#46c6d9",
    "#22c1d6",
    "#0da7ba",
    "#0192a3",
    "#0a7d8b",
];
/** Success green, #17b890 at shade 6. */
export const success = [
    "#edf6f2",
    "#d9eee5",
    "#b7e1d1",
    "#8ed3ba",
    "#60c5a4",
    "#3fbe98",
    "#17b890",
    "#099d7a",
    "#008869",
    "#077258",
];
/** Danger pink-red, #ff6b8a at shade 6. Shade 7 is two-way.org's `--danger-dark`, #e8446b. */
export const danger = [
    "#fdf0f1",
    "#ffe0e4",
    "#ffc8cf",
    "#ffaab7",
    "#fe8da0",
    "#fe7a94",
    "#ff6b8a",
    "#e8446b",
    "#c64764",
    "#a43f55",
];
/** Warning amber, #ffc24b at shade 6. Shades 7 to 9 lean orange so they stay readable as text. */
export const warning = [
    "#f8f3eb",
    "#f8edda",
    "#f9e4bf",
    "#fbd89d",
    "#fdcd77",
    "#fec75f",
    "#ffc24b",
    "#eca530",
    "#dc8e1b",
    "#ca7603",
];
/** All brand colors, keyed by their Mantine color name. */
export const twowayColors = { twoway, secondary, tertiary, success, danger, warning };
/** The shade that holds each color's brand hex. */
export const BRAND_SHADE = 6;
/** Each color's brand hex (its shade 6). */
export const brandHex = {
    twoway: twoway[BRAND_SHADE],
    secondary: secondary[BRAND_SHADE],
    tertiary: tertiary[BRAND_SHADE],
    success: success[BRAND_SHADE],
    danger: danger[BRAND_SHADE],
    warning: warning[BRAND_SHADE],
};
