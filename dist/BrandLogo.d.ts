import type { SVGProps } from "react";
export interface BrandLogoProps extends Omit<SVGProps<SVGSVGElement>, "children" | "viewBox"> {
    /** Width and height. The logo is square. Default 30. */
    size?: number | string;
    /**
     * `mark` (default): the triangles in `color`, on a transparent background.
     * `filled`: white triangles on a rounded square in `color`, as in the favicon.
     */
    variant?: "mark" | "filled";
    /** Logo color. Default the TwoWay blue, #1976d2. */
    color?: string;
    /**
     * Accessible name, e.g. "TwoWay". Leave it out when the logo sits next to the
     * TwoWay name: the logo is then decorative and hidden from screen readers.
     */
    title?: string;
}
/** The TwoWay logo as inline SVG, so it needs no file in the app's `public/`. */
export declare function BrandLogo({ size, variant, color, title, ...props }: BrandLogoProps): import("react").JSX.Element;
