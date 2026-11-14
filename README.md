# two-way-brand

TwoWay's colors, logo files and `BrandLogo` component. [DESIGN.md](DESIGN.md) holds the brand's values and rules, in Google's [DESIGN.md format](https://github.com/google-labs-code/design.md) so agents can read them. The code is generated from it.

The repo is public so Cloudflare builds can install it without a token. There's no license: all rights reserved.

## Install

```bash
npm i github:mauricio-custodio/two-way-brand#v0.2.0
```

Peer dependencies: React 18 or 19, and optionally `@mantine/core` 7 to 9.

## Use

Agents: point them at `node_modules/two-way-brand/DESIGN.md`, e.g. with a line in the project's AGENTS.md.

Mantine theme. Put your own overrides after `twowayTheme`:

```ts
import { createTheme, mergeThemeOverrides } from "@mantine/core";
import { twowayTheme } from "two-way-brand";

export const theme = mergeThemeOverrides(twowayTheme, createTheme({ autoContrast: true }));
```

CSS variables, with or without Mantine (`@import "two-way-brand/tokens.css"` works in CSS too):

```ts
import "two-way-brand/tokens.css";
```

Logo, inline SVG. Props: `size` (default 30), `variant` (`"mark"` or `"filled"`), `color` (default `#1976d2`), `title` (without it the logo is `aria-hidden`), and any `<svg>` prop.

```tsx
import { BrandLogo } from "two-way-brand";

<BrandLogo /> // next to the name "TwoWay"
<BrandLogo variant="filled" size={22} title="TwoWay" /> // on its own
```

Colors in code, and asset URLs:

```ts
import { brandHex, twowayColors } from "two-way-brand";
import logoUrl from "two-way-brand/assets/logo.svg";
```

Favicon, in `index.html`. Vite serves it in dev and bundles it on build:

```html
<link rel="icon" href="/node_modules/two-way-brand/assets/favicon-twoway-filled.svg" />
```

## Develop and release

To change a color or a rule, edit DESIGN.md and run `npm run build`. The build lints DESIGN.md and fails on any error or warning, contrast included. Then it generates Mantine's 10 shades per color around the colors DESIGN.md defines, and writes `src/palette.generated.ts` and `dist/` (JS, types and `tokens.css`).

`dist/` is committed so projects can install from git with no build step. The alternative, a `prepare` script, would install TypeScript and Mantine in every project's build. `npm run check` fails if the generated files are stale.

To release, commit everything, then:

```bash
npm version minor
git push --follow-tags
```

Use `patch` for docs and fixes, `minor` for additions or changed values, and `major` for renames or removals. Then update the tag in each project. Never move a tag.
