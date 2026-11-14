// Reads the brand colors from DESIGN.md, lints the file, and writes
// src/palette.generated.ts (Mantine tuples) and dist/tokens.css.
// Run through `npm run build`, before tsc.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { lint } from "@google/design.md/linter";

const root = new URL("../", import.meta.url);
const fail = (message) => {
	console.error(`DESIGN.md: ${message}`);
	process.exit(1);
};

const report = lint(readFileSync(new URL("DESIGN.md", root), "utf8"));

// Most shades aren't used by a component, so the linter reports them as
// orphaned. Any other warning or error, contrast included, fails the build.
const problems = report.findings.filter(
	(f) => f.severity !== "info" && f.rule !== "orphaned-tokens",
);
if (problems.length > 0) {
	fail(problems.map((f) => `${f.severity} (${f.rule}) ${f.path ?? ""} ${f.message}`).join("\n"));
}

// DESIGN.md color name → Mantine color name.
const mantineName = {
	primary: "twoway",
	secondary: "secondary",
	tertiary: "tertiary",
	success: "success",
	danger: "danger",
	warning: "warning",
};
const BRAND_SHADE = 6;

const colors = report.designSystem.colors;
const hex = (name) => colors.get(name)?.hex.toLowerCase() ?? fail(`missing color "${name}".`);

const palette = Object.keys(mantineName).map((name) => {
	const shades = Array.from({ length: 10 }, (_, i) => hex(`${name}-${i}`));
	if (hex(name) !== shades[BRAND_SHADE]) {
		fail(`"${name}" (${hex(name)}) must equal "${name}-${BRAND_SHADE}" (${shades[BRAND_SHADE]}).`);
	}
	return { name, shades };
});

const header = "Generated from DESIGN.md by scripts/generate.mjs. Don't edit: change DESIGN.md and run `npm run build`.";

const ts = [
	`// ${header}`,
	'import type { MantineColorsTuple } from "@mantine/core";',
	"",
	"/** The shade that holds each color's brand hex. */",
	`export const BRAND_SHADE = ${BRAND_SHADE};`,
];
for (const { name, shades } of palette) {
	ts.push(
		"",
		`/** DESIGN.md \`${name}\`. Brand hex ${shades[BRAND_SHADE]} at shade ${BRAND_SHADE}. */`,
		`export const ${mantineName[name]}: MantineColorsTuple = [`,
		...shades.map((s) => `\t"${s}",`),
		"];",
	);
}
writeFileSync(new URL("src/palette.generated.ts", root), `${ts.join("\n")}\n`);

const css = [
	`/* ${header} */`,
	`/* Shades go from 0 (lightest) to 9 (darkest). The unnumbered variable is the brand hex, shade ${BRAND_SHADE}. */`,
	":root {",
];
palette.forEach(({ name, shades }, i) => {
	if (i > 0) css.push("");
	css.push(name === mantineName[name] ? `\t/* ${name} */` : `\t/* ${name} (Mantine: ${mantineName[name]}) */`);
	shades.forEach((s, shade) => css.push(`\t--twoway-${name}-${shade}: ${s};`));
	css.push(`\t--twoway-${name}: var(--twoway-${name}-${BRAND_SHADE});`);
});
css.push("}", "");
mkdirSync(new URL("dist/", root), { recursive: true });
writeFileSync(new URL("dist/tokens.css", root), css.join("\n"));
