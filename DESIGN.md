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

`#1976d2` is the TwoWay blue: the logo's color and the primary color.

| Color | Hex | Use for |
| --- | --- | --- |
| Primary | `#1976d2` | Main actions, focus, selection |
| Secondary | `#7c5cfc` | Accent, and the gradient with primary on main calls to action |
| Tertiary | `#22c1d6` | Occasional highlights |
| Success | `#17b890` | Done, confirmed |
| Danger | `#ff6b8a` | Errors, destructive actions |
| Warning | `#ffc24b` | Needs attention |

- Each color has shades 0 (lightest) to 9 (darkest). The brand hex is shade 6.
- In code, the Mantine name for primary is `twoway`; the others keep their names. CSS variables are `--twoway-<color>` and `--twoway-<color>-<shade>`.
- The sites still use `#2F6FEE` as primary, which becomes `#1976d2`. two-way.org's `--danger-dark` is `danger-7`.

```yaml
colors:
  primary: "#1976d2"
  secondary: "#7c5cfc"
  tertiary: "#22c1d6"
  success: "#17b890"
  danger: "#ff6b8a"
  warning: "#ffc24b"

  primary-0: "#eef4fc"
  primary-1: "#d5e4f7"
  primary-2: "#adcaee"
  primary-3: "#7fade4"
  primary-4: "#5192db"
  primary-5: "#3582d6"
  primary-6: "#1976d2"
  primary-7: "#045fb1"
  primary-8: "#034e93"
  primary-9: "#013d75"

  secondary-0: "#f2f2fe"
  secondary-1: "#e1e1ff"
  secondary-2: "#c6c4fe"
  secondary-3: "#aaa2fe"
  secondary-4: "#9180fe"
  secondary-5: "#846cfd"
  secondary-6: "#7c5cfc"
  secondary-7: "#683de7"
  secondary-8: "#5634c0"
  secondary-9: "#442b98"

  tertiary-0: "#ecf5f7"
  tertiary-1: "#d9eff3"
  tertiary-2: "#bae4eb"
  tertiary-3: "#93d8e3"
  tertiary-4: "#66ccdd"
  tertiary-5: "#46c6d9"
  tertiary-6: "#22c1d6"
  tertiary-7: "#0da7ba"
  tertiary-8: "#0192a3"
  tertiary-9: "#0a7d8b"

  success-0: "#edf6f2"
  success-1: "#d9eee5"
  success-2: "#b7e1d1"
  success-3: "#8ed3ba"
  success-4: "#60c5a4"
  success-5: "#3fbe98"
  success-6: "#17b890"
  success-7: "#099d7a"
  success-8: "#008869"
  success-9: "#077258"

  danger-0: "#fdf0f1"
  danger-1: "#ffe0e4"
  danger-2: "#ffc8cf"
  danger-3: "#ffaab7"
  danger-4: "#fe8da0"
  danger-5: "#fe7a94"
  danger-6: "#ff6b8a"
  danger-7: "#e8446b"
  danger-8: "#c64764"
  danger-9: "#a43f55"

  warning-0: "#f8f3eb"
  warning-1: "#f8edda"
  warning-2: "#f9e4bf"
  warning-3: "#fbd89d"
  warning-4: "#fdcd77"
  warning-5: "#fec75f"
  warning-6: "#ffc24b"
  warning-7: "#eca530"
  warning-8: "#dc8e1b"
  warning-9: "#ca7603"
```

## Components

The shades to use for text. Every pair passes both WCAG AA (4.5:1) and APCA Lc 60, and the package's build fails if one doesn't.

- **Text on white:** primary 6, secondary 7, tertiary 9, success 9, danger 8. Warning text isn't readable on white: use the normal text color plus a warning icon.
- **Text on a filled background:** white on primary 6, secondary 7, success 9 and danger 8. Black on tertiary 6 and warning 6.
- In Mantine, filled components use shade 6, so pass the shade, e.g. `<Button color="danger.8">`. For tertiary and warning, shade 6 is right: set `autoContrast: true` to get black text.

```yaml
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "#ffffff" }
  button-secondary: { backgroundColor: "{colors.secondary-7}", textColor: "#ffffff" }
  button-tertiary: { backgroundColor: "{colors.tertiary}", textColor: "#000000" }
  button-success: { backgroundColor: "{colors.success-9}", textColor: "#ffffff" }
  button-danger: { backgroundColor: "{colors.danger-8}", textColor: "#ffffff" }
  button-warning: { backgroundColor: "{colors.warning}", textColor: "#000000" }
  text-primary: { backgroundColor: "#ffffff", textColor: "{colors.primary}" }
  text-secondary: { backgroundColor: "#ffffff", textColor: "{colors.secondary-7}" }
  text-tertiary: { backgroundColor: "#ffffff", textColor: "{colors.tertiary-9}" }
  text-success: { backgroundColor: "#ffffff", textColor: "{colors.success-9}" }
  text-danger: { backgroundColor: "#ffffff", textColor: "{colors.danger-8}" }
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

- Do pair status colors (success, danger, warning) with an icon or a word, never color alone.
- Do use the text shades from Components. Don't put colored text on white in any other shade.
- Don't stretch, rotate or redraw the logo.
