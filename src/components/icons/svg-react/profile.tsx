import type { SVGProps } from "react";
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 16"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M7 8.5a7.01 7.01 0 0 0-7 7 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 7.01 7.01 0 0 0-7-7"
    />
  </svg>
);
export default SvgProfile;
