import type { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.293 11.955a.5.5 0 0 0 .536-.079l4-3.5a.5.5 0 0 0 0-.752l-4-3.5A.5.5 0 0 0 6 4.5V7H1a1 1 0 0 0 0 2h5v2.5a.5.5 0 0 0 .293.455"
    />
    <path
      fill="currentColor"
      d="M14 0H2a2 2 0 0 0-2 2v2a1 1 0 0 0 2 0V2h12v12H2v-2a1 1 0 1 0-2 0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2"
    />
  </svg>
);
export default SvgLogout;
