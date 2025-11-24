import type { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 16"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.781.375a1.036 1.036 0 0 0-1.562 0l-4 5A1 1 0 0 0 1 7h3v8a1 1 0 1 0 2 0V7h3a1 1 0 0 0 .781-1.625z"
    />
  </svg>
);
export default SvgArrowUp;
