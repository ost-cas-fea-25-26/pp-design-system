import { FC, ElementType } from "react";
import { InlineWhite, StackedWhite } from "../logo/svg-react";

type LogoLinkProps = {
  href?: string;
  asLink?: ElementType;
};

export const LogoLink: FC<LogoLinkProps> = ({
  href = "/",
  asLink: LinkTag = "a",
}) => (
  <LinkTag
    href={href}
    className="shrink-0 inline-block align-middle transition-transform transition-default hover:scale-105 focus-ring-neutral outline-offset-2 p-1"
  >
    <InlineWhite className="hidden sm:block h-7 w-auto object-contain select-none pointer-events-none" />
    <StackedWhite className="block sm:hidden h-8 w-auto object-contain select-none pointer-events-none" />
  </LinkTag>
);
