# TwoWay brand

For people and AI agents building TwoWay products. If this file and `src/colors.ts` disagree, the code wins.

## Colors

`#1976d2` is the TwoWay blue: the logo's color and the primary color.

| Color | Mantine | Hex | Use for |
| --- | --- | --- | --- |
| Primary | `twoway` | `#1976d2` | Main actions, focus, selection |
| Secondary | `secondary` | `#7c5cfc` | Accent, and the gradient with primary on main calls to action |
| Tertiary | `tertiary` | `#22c1d6` | Occasional highlights |
| Success | `success` | `#17b890` | Done, confirmed |
| Danger | `danger` | `#ff6b8a` | Errors, destructive actions |
| Warning | `warning` | `#ffc24b` | Needs attention |

- Each color has shades 0 (lightest) to 9 (darkest). The hex above is shade 6. All shades are in `dist/tokens.css`.
- CSS variables: `--twoway-<color>` and `--twoway-<color>-<shade>`. In CSS, primary is called `primary`.
- Status colors always come with an icon or a word, never color alone.

Shades to use for text (APCA Lc 60 or more):

| Color | Text on white | Text on a fill |
| --- | --- | --- |
| Primary, secondary | 6 | White on 6 |
| Tertiary | 9 | Dark on 6 |
| Success | 8 | White on 8 |
| Danger | 8 | White on 7 |
| Warning | Normal text color, plus an icon | Dark on 6 |

In Mantine, `autoContrast: true` gives tertiary and warning fills dark text.

**Sites not migrated yet.** They still use `#2F6FEE` as primary, which becomes `twoway` 6. two-way.org's `--danger-dark` is `danger` 7. Its `--primary-light`, `--secondary-light`, text, surface, radius and font values aren't in the package yet.

## Logo

Two triangles: one upper right pointing up, one lower left pointing down.

- `assets/logo.svg`: the mark in `#1976d2` on transparent. For apps and docs.
- `assets/favicon-twoway-filled.svg`: white mark on a blue rounded square. Browser tab icon.
- `assets/favicon-twoway.svg`: the original favicon file. Prefer `logo.svg`.
- `BrandLogo`: React component, `mark` or `filled`.
- PNGs (1024 px icon, 120 px Google OAuth logo) come in a later release.

Rules:

- Put the mark before the name "TwoWay", written as text. There's no wordmark file.
- Next to the name, hide the mark from screen readers (`BrandLogo` does by default). On its own, give it `title="TwoWay"`.
- Use `mark` on light backgrounds and `filled` as a standalone icon.
- Don't stretch, rotate or redraw it.
- _TODO: minimum size, clear space, dark backgrounds._

## Voice & Copy

- **Name:** TwoWay. One word, capital T and W. The domain is two-way.org. In HTML, add `translate="no"` and a non-breaking space after it ("TwoWay&nbsp;Chat").
- **Languages:** EN and PT-BR, chosen by URL (`/en`, `/pt-br`).

### EN

_TODO: tone, words to use and avoid, examples._

### PT-BR

_TODO: tone, formality, words to use and avoid, English terms we keep, examples._
