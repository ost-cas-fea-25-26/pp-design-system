import { FC, ElementType } from "react";
import logoInlineWhite from "@/assets/logo/inline-white.svg";
import logoStackedWhite from "@/assets/logo/stacked-white.svg";

type LogoLinkProps = {
  href?: string;
  asLink?: ElementType;
  asImage?: ElementType;
};

export const LogoLink: FC<LogoLinkProps> = ({
  href = "/",
  asLink: LinkTag = "a",
  asImage: ImageTag = "img",
}) => (
  <LinkTag
    href={href}
    className="shrink-0 inline-block align-middle transition-transform transition-default hover:scale-105 focus-ring-neutral outline-offset-2 p-1"
  >
    <ImageTag
      src={logoInlineWhite}
      alt="Mumble"
      height={28}
      className="hidden sm:block h-7 w-auto object-contain select-none pointer-events-none"
    />
    <ImageTag
      src={logoStackedWhite}
      alt="Mumble"
      height={32}
      className="block sm:hidden h-8 w-auto object-contain select-none pointer-events-none"
    />
  </LinkTag>
);
