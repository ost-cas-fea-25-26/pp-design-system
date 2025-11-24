import type { SVGProps } from "react";
const SvgCancel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.558.258a.5.5 0 0 0-.711.004L7 4.2 3.154.262a.5.5 0 0 0-.712-.004L.258 2.442a.5.5 0 0 0 .004.712L4.2 7 .262 10.847a.5.5 0 0 0-.004.71l2.184 2.185a.5.5 0 0 0 .712-.004L7 9.8l3.847 3.938a.5.5 0 0 0 .71.004l2.185-2.184a.5.5 0 0 0-.004-.711L9.8 7l3.938-3.846a.5.5 0 0 0 .004-.712z"
    />
  </svg>
);
export default SvgCancel;
