import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 10"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.625.219A1 1 0 0 0 9 .999v3H1a1 1 0 1 0 0 2h8v3a1 1 0 0 0 1.625.782l5-4a1 1 0 0 0 0-1.562z"
    />
  </svg>
);
export default SvgArrowRight;
