// Writes dist/tokens.css from the compiled colors in dist/colors.js, so the CSS
// variables and the Mantine tuples always hold the same values.
// Run through `npm run build`, after tsc.
import { writeFileSync } from "node:fs";
import { BRAND_SHADE, twowayColors } from "../dist/colors.js";

// CSS names colors by role. The Mantine key for the primary color is `twoway`.
const cssName = { twoway: "primary" };

const lines = [
	"/* TwoWay brand colors. Generated from src/colors.ts by scripts/build-tokens.mjs: don't edit, run `npm run build`. */",
	"/* Shades go from 0 (lightest) to 9 (darkest). The unnumbered variable is the brand hex, shade 6. */",
	":root {",
];
for (const [key, shades] of Object.entries(twowayColors)) {
	const name = `--twoway-${cssName[key] ?? key}`;
	lines.push(cssName[key] ? `\t/* ${cssName[key]} (Mantine: ${key}) */` : `\t/* ${key} */`);
	shades.forEach((hex, i) => lines.push(`\t${name}-${i}: ${hex};`));
	lines.push(`\t${name}: var(${name}-${BRAND_SHADE});`, "");
}
lines.pop();
lines.push("}", "");

writeFileSync(new URL("../dist/tokens.css", import.meta.url), lines.join("\n"));
