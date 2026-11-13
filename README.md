# two-way-brand

The TwoWay brand in one package: colors (as Mantine color tuples and as CSS variables), logo files, and a `BrandLogo` React component. [BRAND.md](BRAND.md) explains when to use what.

Projects install it from GitHub, pinned to a tag. The repo is public so Cloudflare builds can install it without a token. It has no license file, so the default applies: all rights reserved.

## Install

```bash
npm i github:mauricio-custodio/two-way-brand#v0.1.0
```

This adds `"two-way-brand": "github:mauricio-custodio/two-way-brand#v0.1.0"` to `package.json`, and the lockfile pins the tag's commit.

Peer dependencies: React 18 or 19, and `@mantine/core` 7 to 9 if you use the Mantine theme. Mantine is an optional peer, so npm won't install it in projects that don't have it.

## Use

### Mantine theme

```ts
import { createTheme, mergeThemeOverrides } from "@mantine/core";
import { twowayTheme } from "two-way-brand";

export const theme = mergeThemeOverrides(
	twowayTheme,
	createTheme({ defaultRadius: "md", autoContrast: true }),
);
```

`twowayTheme` adds six colors (`twoway`, `secondary`, `tertiary`, `success`, `danger`, `warning`) and sets `primaryColor: "twoway"`. Later overrides win, so a project with its own primary color (like two-way-sul-mineira) puts its theme after `twowayTheme`. `createTheme({ ...twowayTheme, ... })` works too.

`autoContrast: true` is recommended: it gives filled `tertiary` and `warning` components dark text.

### CSS variables, without Mantine

Import the variables once, from JavaScript or from CSS:

```ts
import "two-way-brand/tokens.css";
```

```css
@import "two-way-brand/tokens.css";
```

Then use them:

```css
.button {
	background: var(--twoway-primary);
	color: #fff;
}
.chip-danger {
	background: var(--twoway-danger-0);
	color: var(--twoway-danger-8);
}
```

Every color has `--twoway-<color>-0` to `--twoway-<color>-9`, plus `--twoway-<color>` for the brand hex (shade 6). `<color>` is `primary`, `secondary`, `tertiary`, `success`, `danger` or `warning`.

### Colors in code

```ts
import { brandHex, twowayColors } from "two-way-brand";

brandHex.twoway; // "#1976d2"
brandHex.danger; // "#ff6b8a"
twowayColors.danger[8]; // "#c64764"
```

### BrandLogo

```tsx
import { BrandLogo } from "two-way-brand";

// Next to the name, the logo is decorative and hidden from screen readers.
<a href="/" className="brand">
	<BrandLogo /> TwoWay
</a>

// On its own, give it a title.
<BrandLogo variant="filled" size={22} title="TwoWay" />
```

| Prop | Default | |
| --- | --- | --- |
| `size` | `30` | Width and height. The logo is square. |
| `variant` | `"mark"` | `"mark"`: the triangles on a transparent background. `"filled"`: white triangles on a rounded square, as in the favicon. |
| `color` | `#1976d2`, the TwoWay blue | The logo's color. |
| `title` | none | Accessible name. Without it, the logo gets `aria-hidden`. |

Any other `<svg>` prop (`className`, `style`, …) is passed through. The logo is inline SVG, so it needs no file in the app's `public/`. It replaces the `BrandLogo.tsx` copies in two-way-website and two-way-chat.

### Assets

In Vite, import a file to get its URL:

```ts
import logoUrl from "two-way-brand/assets/logo.svg";
```

For the favicon, point `index.html` into `node_modules`. Vite serves it in dev and copies it, hashed, into the build:

```html
<link rel="icon" href="/node_modules/two-way-brand/assets/favicon-twoway-filled.svg" />
```

PNG versions of the icon, including the 120 px logo for the Google OAuth consent screen, will come in a later release.

## Why `dist/` is committed

Projects install this package straight from git, with no build step. npm only builds a git dependency if it has a `prepare` script, and that would install TypeScript and Mantine during every project's install, Cloudflare builds included. Shipping the `.ts` source instead would make each project's `tsc` check this package's code with that project's compiler options.

So the source is in `src/`, and the compiled ESM and `.d.ts` files are committed in `dist/`. `dist/tokens.css` is generated from the same colors. Vite and `tsc` read `dist/` as they would any npm package, and the types work in strict projects.

## Develop

```bash
npm install
```

```bash
npm run build
```

Edit `src/`, never `dist/`. To change a color, edit `src/colors.ts`, run `npm run build` (it regenerates `dist/`, including `tokens.css`), and update the tables in BRAND.md.

`npm run check` rebuilds and fails if `dist/` differs from what's committed.

## Release

Releases are git tags. Projects pin a tag, so never move or delete one.

1. Commit your changes, including the rebuilt `dist/`. `npm run check` must pass.
2. Bump the version. This commits `package.json` and creates the tag, e.g. `v0.2.0`:

   ```bash
   npm version minor
   ```

3. Push the commit and the tag:

   ```bash
   git push --follow-tags
   ```

4. In each project, install the new tag:

   ```bash
   npm i github:mauricio-custodio/two-way-brand#v0.2.0
   ```

Which number to bump:

- **patch**: docs and fixes that don't change any value or export.
- **minor**: new colors, shades, assets or exports, and changed color values.
- **major**: a renamed or removed color, CSS variable, export or asset.
