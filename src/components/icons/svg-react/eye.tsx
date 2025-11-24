import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 12"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 12c4.707 0 7.744-5.284 7.871-5.508a1 1 0 0 0 .001-.98C15.746 5.287 12.732 0 8 0 3.245 0 .251 5.289.126 5.514a1 1 0 0 0 .002.975C.254 6.713 3.27 12 8 12M8 2c2.84 0 5.036 2.835 5.818 4-.784 1.166-2.98 4-5.818 4-2.84 0-5.038-2.838-5.819-4.001C2.958 4.835 5.146 2 8.001 2"
    />
    <path fill="currentColor" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
);
export default SvgEye;
