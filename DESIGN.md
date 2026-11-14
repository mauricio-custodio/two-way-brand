---
version: alpha
name: TwoWay
description: Brand colors and logo for TwoWay products. The two-way-brand package generates its code from this file.
omitted:
  - section: typography
    reason: Not defined yet. Each app sets its own fonts.
  - section: spacing
    reason: Not defined yet. Each app sets its own spacing.
  - section: rounded
    reason: Not defined yet. Each app sets its own corner radius.
---

# TwoWay

## Overview

The TwoWay brand, for people and AI agents building TwoWay products. Format: [DESIGN.md](https://github.com/google-labs-code/design.md). The YAML blocks are the brand's values: the `two-way-brand` package generates its Mantine theme and `tokens.css` from them. Typography, spacing and corner radius aren't defined yet.

## Colors

TwoWay has two brand colors. `#1976d2` is the TwoWay blue: the logo's color and the primary color.

| Color | Hex | Use for |
| --- | --- | --- |
| Primary | `#1976d2` | Main actions, focus, selection |
| Secondary | `#7c5cfc` | Accent, and the gradient with primary on main calls to action |
| Secondary strong | `#683de7` | Secondary text, and white text on secondary |

- For tints and hover states, mix the brand colors instead of adding new ones, e.g. `color-mix(in srgb, var(--twoway-primary) 10%, transparent)`.
- Status colors (success, danger, warning) aren't part of the brand yet. Use your UI library's, e.g. Mantine's `green`, `red` and `yellow`.
- In code, the Mantine name for primary is `twoway`. Mantine needs 10 shades per color, so the build generates them: the base is shade 6 and secondary strong is shade 8. The other shades aren't brand colors. CSS variables are `--twoway-primary`, `--twoway-secondary` and `--twoway-secondary-strong`.
- The sites still use `#2F6FEE` as primary, which becomes `#1976d2`.

```yaml
colors:
  primary: "#1976d2"
  secondary: "#7c5cfc"
  secondary-strong: "#683de7"
```

## Components

The colors to use for text. Every pair passes both WCAG AA (4.5:1) and APCA Lc 60, and the package's build fails if one doesn't.

- **Text on white:** primary and secondary strong.
- **White text on a filled background:** primary and secondary strong.
- In Mantine, filled components use shade 6, so pass the strong shade for secondary: `<Button color="secondary.8">`.

```yaml
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "#ffffff" }
  button-secondary: { backgroundColor: "{colors.secondary-strong}", textColor: "#ffffff" }
  text-primary: { backgroundColor: "#ffffff", textColor: "{colors.primary}" }
  text-secondary: { backgroundColor: "#ffffff", textColor: "{colors.secondary-strong}" }
```

## Logo

Two triangles: one upper right pointing up, one lower left pointing down.

- `assets/logo.svg`: the mark in `#1976d2` on transparent. For apps and docs.
- `assets/favicon-twoway-filled.svg`: white mark on a blue rounded square. Browser tab icon.
- `assets/favicon-twoway.svg`: the original favicon file. Prefer `logo.svg`.
- `BrandLogo`: React component, `mark` or `filled`.
- PNGs (1024 px icon, 120 px Google OAuth logo) come in a later release.

Put the mark before the name "TwoWay", written as text; there's no wordmark file. Next to the name, hide the mark from screen readers (`BrandLogo` does by default). On its own, give it `title="TwoWay"`. Use `mark` on light backgrounds and `filled` as a standalone icon.

_TODO: minimum size, clear space, dark backgrounds._

## Voice & Copy

- **Name:** TwoWay. One word, capital T and W. The domain is two-way.org. In HTML, add `translate="no"` and a non-breaking space after it ("TwoWay&nbsp;Chat").
- **Languages:** EN and PT-BR, chosen by URL (`/en`, `/pt-br`).

### EN

_TODO: tone, words to use and avoid, examples._

### PT-BR

_TODO: tone, formality, words to use and avoid, English terms we keep, examples._

## Do's and Don'ts

- Do pair status colors with an icon or a word, never color alone.
- Do use the text colors from Components. Don't use the secondary base for text.
- Don't stretch, rotate or redraw the logo.
