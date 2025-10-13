import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { FC } from "react";

type TargetType = "_self" | "_blank";

type LinkProps = {
  title: string;
  href: string;
  target?: TargetType;
  asChild?: boolean;
  children?: React.ReactNode;
};

export const Link: FC<LinkProps> = ({
  title,
  href,
  target = "_self",
  asChild = false,
  children,
}) => {
  const Component = asChild ? Slot : "a";

  return (
    <Component
      href={href}
      title={title}
      target={target}
      className="label-sm text-primary hover:decoration-violet-200 hover:underline-offset-4 underline decoration-solid decoration-1 underline-offset-2"
    >
      {children}
    </Component>
  );
};
