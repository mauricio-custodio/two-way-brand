import type { SVGProps } from "react";
import { brandHex } from "./colors.js";

// The two triangles of the TwoWay mark, from assets/favicon-twoway.svg (512 × 512).
const TOP =
	"M 444.056629 214.370849 L 267.893291 54.444371 Q 286.018866 160.611520 146.944219 214.835524 L 444.056629 214.370849 Z";
const BOTTOM =
	"M 64.103884 291.691277 L 242.431626 453.923261 Q 223.468510 345.939928 363.870020 292.205245 L 64.103884 291.691277 Z";

export interface BrandLogoProps
	extends Omit<SVGProps<SVGSVGElement>, "children" | "viewBox"> {
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
export function BrandLogo({
	size = 30,
	variant = "mark",
	color = brandHex.twoway,
	title,
	...props
}: BrandLogoProps) {
	const filled = variant === "filled";
	const triangles = filled ? "#fff" : color;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width={size}
			height={size}
			role={title ? "img" : undefined}
			aria-hidden={title ? undefined : true}
			{...props}
		>
			{title ? <title>{title}</title> : null}
			{filled ? (
				<rect x={0} y={32} width={512} height={448} rx={80} fill={color} />
			) : null}
			<g
				fill={triangles}
				stroke={triangles}
				strokeWidth={6}
				strokeLinejoin="round"
				transform={
					filled
						? "translate(256 256) scale(0.75) translate(-256 -256)"
						: undefined
				}
			>
				<path d={TOP} />
				<path d={BOTTOM} />
			</g>
		</svg>
	);
}
