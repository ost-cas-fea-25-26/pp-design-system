import { FC } from "react";
import { AvatarButton } from "../../components/avatar-button";
import { IconButton } from "../../components/icon-button";
import { LogoutIcon, SettingsIcon } from "../../components/icons";
import { LogoLink } from "../../components/logo-link/logo-link";

type HeaderProps = {
  userAvatar?: string;
  userFallback?: string;
  onAvatarClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
  logoHref?: string;
};

export const Header: FC<HeaderProps> = ({
  userAvatar,
  userFallback = "U",
  onAvatarClick,
  onSettingsClick,
  onLogoutClick,
  logoHref = "/",
}) => (
  <header className="bg-primary w-full sticky top-0 z-50 py-3 px-8">
    <div className="w-full max-w-[680px] mx-auto flex items-center justify-between">
      <LogoLink href={logoHref} />

      <div className="flex items-center gap-4">
        <AvatarButton
          onClick={onAvatarClick}
          avatarProps={{
            src: userAvatar,
            alt: "User avatar",
            fallbackText: userFallback,
            size: "s",
          }}
        />

        <IconButton
          label="Settings"
          IconComponent={SettingsIcon}
          animation="rotate"
          color="primary"
          layout="stacked"
          onClick={onSettingsClick}
        />

        <IconButton
          label="Log out"
          IconComponent={LogoutIcon}
          color="primary"
          layout="stacked"
          onClick={onLogoutClick}
        />
      </div>
    </div>
  </header>
);
