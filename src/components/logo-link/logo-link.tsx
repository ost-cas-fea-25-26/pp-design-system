import { FC, ElementType } from "react";
import logoInlineWhite from "/src/assets/logo/inline-white.svg";
import logoStackedWhite from "/src/assets/logo/stacked-white.svg";

type LogoLinkProps = {
  href?: string;
  asLink?: ElementType;
  asImage?: ElementType;
};

export const LogoLink: FC<LogoLinkProps> = ({
  href = "/",
  asLink: LinkTag = "a",
  asImage: ImageTag = "img",
}) => {
  return (
    <LinkTag
      href={href}
      className="shrink-0 inline-block align-middle transition-transform transition-default hover:scale-105"
    >
      {/* Desktop Logo */}
      <ImageTag
        src={logoInlineWhite}
        alt="Mumble"
        height={28}
        className="hidden sm:block h-[28px] w-auto object-contain select-none pointer-events-none"
      />

      {/* Mobile Logo */}
      <ImageTag
        src={logoStackedWhite}
        alt="Mumble"
        height={32}
        className="block sm:hidden h-[32px] w-auto object-contain select-none pointer-events-none"
      />
    </LinkTag>
  );
};
