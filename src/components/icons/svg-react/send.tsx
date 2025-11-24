import type { SVGProps } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.707.293a1 1 0 0 0-1.043-.234l-14 5a.999.999 0 0 0-.111 1.835l4.586 2.292L10.999 5l-4.186 5.862 2.292 4.586a1.004 1.004 0 0 0 1.838-.112l5-14c.129-.363.037-.77-.236-1.043"
    />
  </svg>
);
export default SvgSend;
