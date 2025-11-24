import type { SVGProps } from "react";
const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 14"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.6 8.6 2.753 5.754a.5.5 0 0 0-.707 0L.353 7.446a.5.5 0 0 0 0 .708l4.893 4.893a.5.5 0 0 0 .707 0l9.693-9.693a.5.5 0 0 0 0-.708L13.953.954a.5.5 0 0 0-.707 0z"
    />
  </svg>
);
export default SvgCheckmark;
