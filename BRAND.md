# TwoWay brand

How the TwoWay brand looks and sounds, for people and AI agents building TwoWay products. The colors and logo files live in this package (`two-way-brand`). If this file and `src/colors.ts` disagree, the code is right: fix this file.

## Colors

Six colors, each a scale of 10 shades from 0 (lightest) to 9 (darkest). **Shade 6 is always the brand hex.** Mantine uses shade 6 for filled components in the light color scheme, so `<Button color="secondary">` shows exactly `#7c5cfc`.

| Color | Mantine name | CSS variable | Brand hex | Use for |
| --- | --- | --- | --- | --- |
| Primary | `twoway` | `--twoway-primary` | `#1976d2` | The TwoWay blue, also the logo's color. Main actions, focused inputs, text selection. Mantine's `primaryColor`. |
| Secondary | `secondary` | `--twoway-secondary` | `#7c5cfc` | Accent. Paired with primary in the primary-to-secondary gradient of two-way.org's main call to action. |
| Tertiary | `tertiary` | `--twoway-tertiary` | `#22c1d6` | Occasional highlight: a chip, a step badge, an illustration detail. |
| Success | `success` | `--twoway-success` | `#17b890` | Done, sent, confirmed. The TwoWay side of two-way.org's TwoWay vs. off-the-shelf comparison. |
| Danger | `danger` | `--twoway-danger` | `#ff6b8a` | Errors, destructive actions. The off-the-shelf side of that comparison. |
| Warning | `warning` | `--twoway-warning` | `#ffc24b` | Needs attention but isn't broken. |

Status colors (success, danger, warning) never carry meaning alone: pair them with an icon or a word.

### Shades

Shade 6 is the brand hex. CSS variables are `--twoway-<color>-<shade>`, with `primary` for `twoway`.

| | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `twoway` | `#eef4fc` | `#d5e4f7` | `#adcaee` | `#7fade4` | `#5192db` | `#3582d6` | **`#1976d2`** | `#045fb1` | `#034e93` | `#013d75` |
| `secondary` | `#f2f2fe` | `#e1e1ff` | `#c6c4fe` | `#aaa2fe` | `#9180fe` | `#846cfd` | **`#7c5cfc`** | `#683de7` | `#5634c0` | `#442b98` |
| `tertiary` | `#ecf5f7` | `#d9eff3` | `#bae4eb` | `#93d8e3` | `#66ccdd` | `#46c6d9` | **`#22c1d6`** | `#0da7ba` | `#0192a3` | `#0a7d8b` |
| `success` | `#edf6f2` | `#d9eee5` | `#b7e1d1` | `#8ed3ba` | `#60c5a4` | `#3fbe98` | **`#17b890`** | `#099d7a` | `#008869` | `#077258` |
| `danger` | `#fdf0f1` | `#ffe0e4` | `#ffc8cf` | `#ffaab7` | `#fe8da0` | `#fe7a94` | **`#ff6b8a`** | `#e8446b` | `#c64764` | `#a43f55` |
| `warning` | `#f8f3eb` | `#f8edda` | `#f9e4bf` | `#fbd89d` | `#fdcd77` | `#fec75f` | **`#ffc24b`** | `#eca530` | `#dc8e1b` | `#ca7603` |

All six scales use the same lightness and chroma steps (in OKLCH), so the shades line up across colors. The steps come from the blue scale two-way-sul-mineira used before. `danger` 7 is two-way.org's existing `--danger-dark`. `warning` 7 to 9 shift toward orange so they still read as warning when used as text.

### Contrast

Only primary and secondary are dark enough for white text, or for text on white, at shade 6. For the others, use the shades below. Values are APCA Lc, which two-way-website's design guidelines prefer over WCAG 2. Aim for Lc 75 for body text, 60 for other text, and 45 for large or bold text.

| Color | Text on white | Text on a filled background |
| --- | --- | --- |
| Primary | 6 (Lc 71); 7 or darker for body text (Lc 81) | White on 6 (Lc 77) |
| Secondary | 6 (Lc 70); 7 or darker for body text (Lc 80) | White on 6 (Lc 75) |
| Tertiary | 9 (Lc 73) | Dark text on 6 (black: Lc 62), or white on 8 (Lc 70) |
| Success | 8 (Lc 70) or 9 (Lc 79) | White on 8 (Lc 76). On 6, large or bold text only (Lc 54) |
| Danger | 8 (Lc 72) or 9 (Lc 80) | White on 7 (Lc 70) or 8 (Lc 77). On 6, large or bold text only (Lc 57) |
| Warning | 9, large or bold text only (Lc 61). Otherwise use the normal text color with a warning icon | Dark text on 6 (black: Lc 77) |

In Mantine, set `autoContrast: true` in your theme: filled `tertiary` and `warning` components then get dark text.

### The brand blue

**`#1976d2` is the TwoWay blue.** The logo, the favicons and the primary color all use it.

The apps don't use it yet. two-way.org and two-way-chat set `--primary: #2F6FEE` in `App.css`, and two-way-sul-mineira's Mantine theme puts `#2f6fee` at shade 6 of its `twoway` color. They'll switch to this package in their own changes. When they do, `#2F6FEE` becomes `#1976d2`: same role, a slightly deeper blue.

### Moving the sites over

two-way.org's `App.css` has more values than these six colors. Here's where each one lands:

| two-way.org variable | Value | In this package |
| --- | --- | --- |
| `--primary` | `#2F6FEE` | Replaced by `twoway` 6 (`#1976d2`) |
| `--primary-light` | `#4C86F5` | No exact match. Use `twoway` 4 (`#5192db`) or 5 (`#3582d6`) |
| `--secondary`, `--tertiary`, `--success`, `--danger`, `--warning` | | Shade 6 of each color, same values |
| `--danger-dark` | `#E8446B` | `danger` 7 |
| `--secondary-light` | `#9D6BFF` | No match: it's a different hue. Closest is `secondary` 5 (`#846cfd`) |
| `--text`, `--text-muted` | `#15173A`, `#5C6088` | Not in the package yet: neutrals aren't defined |
| `--surface-*`, `--border`, shadows, radii, fonts | | Not in the package yet |

## Logo

The mark is two triangles: one in the upper right pointing up, one in the lower left pointing down.

| File | What it is | Use for |
| --- | --- | --- |
| `assets/logo.svg` | The mark in `#1976d2` on a transparent background, scalable (512 × 512 viewBox) | Images in apps and docs |
| `assets/favicon-twoway.svg` | The same mark, the original favicon file (fixed 512 × 512, no viewBox) | Kept as the apps had it. Prefer `logo.svg` |
| `assets/favicon-twoway-filled.svg` | White mark on a `#1976d2` rounded square | Browser tab icon |
| `BrandLogo` | React component. Inline SVG, `mark` or `filled` variant | The logo in React UIs |

PNG versions will come in a later release: a 1024 px icon, and the 120 px logo used on the Google OAuth consent screen.

Usage:

- **Lockup.** The mark, then the name "TwoWay" as text. There's no wordmark file yet.
- **Accessibility.** Next to the name, the mark is decorative: hide it from screen readers (`BrandLogo` does this by default). On its own, give it a name: `<BrandLogo title="TwoWay" />`.
- **Variant.** Use `mark` on light backgrounds. Use `filled` where it must stand alone as an icon: tabs, app icons, avatars.
- **Don't** stretch it (keep it square), rotate it, or redraw it.
- _TODO: minimum size, clear space, and use on dark backgrounds. two-way.org's navy footer currently uses the blue mark._

## Voice & Copy

- **Name.** "TwoWay": one word, capital T and capital W. Domains are hyphenated: two-way.org. In HTML, put `translate="no"` on the name so browsers don't translate it, and keep it with the next word using a non-breaking space ("TwoWay&nbsp;Chat").
- **Languages.** English (EN) and Brazilian Portuguese (PT-BR). Apps take the language from the URL: `/en`, `/pt-br`.

### EN

_TODO: tone, words we use, words we avoid, examples._

### PT-BR

_TODO: tone and formality (você?), words we use, words we avoid, English terms we keep, examples._
