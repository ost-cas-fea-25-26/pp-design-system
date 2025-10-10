import { FC } from "react";

type TargetType = "_self" | "_blank";

type LinkProps = {
  label: string;
  href: string;
  target?: TargetType;
};

export const Link: FC<LinkProps> = ({ label, href, target = "_self" }) => {
  return (
    <a
      href={href}
      title={label}
      target={target}
      className="label-sm text-primary hover:decoration-violet-200 hover:underline-offset-4 underline decoration-solid decoration-1 underline-offset-2"
    >
      {label}
    </a>
  );
};
