import type { SVGProps } from "react";
const SvgFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15 0h-5a1 1 0 1 0 0 2h2.587L9.294 5.293a1 1 0 1 0 1.414 1.414L14 3.414V6a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1M6.707 9.293a1 1 0 0 0-1.414 0L2 12.586V10a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H3.414l3.293-3.293a1 1 0 0 0 0-1.414"
    />
  </svg>
);
export default SvgFullscreen;
