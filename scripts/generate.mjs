// Reads the brand colors from DESIGN.md, lints the file, generates Mantine's
// 10-shade tuples, and writes src/palette.generated.ts and dist/tokens.css.
// Run through `npm run build`, before tsc.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { lint } from "@google/design.md/linter";
import { clampChroma, converter, formatHex } from "culori";

const root = new URL("../", import.meta.url);
const fail = (message) => {
	console.error(`DESIGN.md: ${message}`);
	process.exit(1);
};

const report = lint(readFileSync(new URL("DESIGN.md", root), "utf8"));

// Any warning or error, contrast included, fails the build.
const problems = report.findings.filter((f) => f.severity !== "info");
if (problems.length > 0) {
	fail(problems.map((f) => `${f.severity} (${f.rule}) ${f.path ?? ""} ${f.message}`).join("\n"));
}

// DESIGN.md color name → Mantine color name.
const mantineName = {
	primary: "twoway",
	secondary: "secondary",
};
// DESIGN.md `<color>` is shade 6, and `<color>-strong`, when there is one, is shade 8.
const BRAND_SHADE = 6;
const STRONG_SHADE = 8;

const colors = report.designSystem.colors;
const hexOf = (name) => colors.get(name)?.hex.toLowerCase();

const known = new Set(Object.keys(mantineName).flatMap((name) => [name, `${name}-strong`]));
for (const name of colors.keys()) {
	if (!known.has(name)) fail(`unknown color "${name}". Add it to mantineName in scripts/generate.mjs.`);
}

const oklch = converter("oklch");
const lerp = (a, b, t) => a + (b - a) * t;
// Hue goes the short way round the circle.
const lerpHue = (a, b, t) => a + ((((b - a) % 360) + 540) % 360 - 180) * t;

/**
 * The 10 shades, 0 (lightest) to 9 (darkest), interpolated in OKLCH between
 * anchors: a near-white tint at 0, the base at 6, the strong shade at 8 and
 * a darker one at 9. Without a strong shade, shade 8 is derived from the base.
 */
function ramp(baseHex, strongHex) {
	const base = oklch(baseHex);
	const strong = strongHex
		? oklch(strongHex)
		: { mode: "oklch", l: base.l - 0.14, c: base.c * 0.9, h: base.h };
	const anchors = [
		[0, { mode: "oklch", l: 0.97, c: base.c * 0.12, h: base.h }],
		[BRAND_SHADE, base],
		[STRONG_SHADE, strong],
		[9, { mode: "oklch", l: strong.l - 0.08, c: strong.c * 0.85, h: strong.h }],
	];
	const exact = { [BRAND_SHADE]: baseHex, [STRONG_SHADE]: strongHex };

	return Array.from({ length: 10 }, (_, shade) => {
		if (exact[shade]) return exact[shade];
		const i = anchors.findIndex(([at]) => at >= shade);
		const [at, color] = anchors[i];
		if (at === shade) return formatHex(clampChroma(color, "oklch"));
		const [fromAt, from] = anchors[i - 1];
		const t = (shade - fromAt) / (at - fromAt);
		return formatHex(
			clampChroma(
				{ mode: "oklch", l: lerp(from.l, color.l, t), c: lerp(from.c, color.c, t), h: lerpHue(from.h, color.h, t) },
				"oklch",
			),
		);
	});
}

const palette = Object.keys(mantineName).map((name) => {
	const base = hexOf(name) ?? fail(`missing color "${name}".`);
	const strong = hexOf(`${name}-strong`);
	const shades = ramp(base, strong);
	const lightness = shades.map((s) => oklch(s).l);
	if (lightness.some((l, i) => i > 0 && l >= lightness[i - 1])) {
		fail(`"${name}" shades don't get darker from 0 to 9: ${shades.join(" ")}. Check "${name}-strong".`);
	}
	return { name, base, strong, shades };
});

const header = "Generated from DESIGN.md by scripts/generate.mjs. Don't edit: change DESIGN.md and run `npm run build`.";

const ts = [
	`// ${header}`,
	'import type { MantineColorsTuple } from "@mantine/core";',
	"",
	"/** The shade that holds each color's brand hex. */",
	`export const BRAND_SHADE = ${BRAND_SHADE};`,
	"",
	"/** The shade that holds a color's strong hex, for text on white and white text on the color. */",
	`export const STRONG_SHADE = ${STRONG_SHADE};`,
];
for (const { name, base, strong, shades } of palette) {
	const about = strong
		? `Brand hex ${base} at shade ${BRAND_SHADE}, strong ${strong} at shade ${STRONG_SHADE}.`
		: `Brand hex ${base} at shade ${BRAND_SHADE}.`;
	ts.push(
		"",
		`/** DESIGN.md \`${name}\`. ${about} The other shades are generated. */`,
		`export const ${mantineName[name]}: MantineColorsTuple = [`,
		...shades.map((s) => `\t"${s}",`),
		"];",
	);
}
writeFileSync(new URL("src/palette.generated.ts", root), `${ts.join("\n")}\n`);

const css = [`/* ${header} */`, ":root {"];
for (const { name, base, strong } of palette) {
	css.push(`\t--twoway-${name}: ${base};`);
	if (strong) css.push(`\t--twoway-${name}-strong: ${strong};`);
}
css.push("}", "");
mkdirSync(new URL("dist/", root), { recursive: true });
writeFileSync(new URL("dist/tokens.css", root), css.join("\n"));
