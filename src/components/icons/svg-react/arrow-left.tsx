import type { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 10"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15 4H7V1A1 1 0 0 0 5.375.219l-5 4a1 1 0 0 0 0 1.562l5 4A1 1 0 0 0 7 9V6h8a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgArrowLeft;
