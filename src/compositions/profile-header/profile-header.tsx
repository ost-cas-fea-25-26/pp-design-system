import { FC, ReactNode } from "react";
import { ProfileBanner } from "@/components/profile-banner";
import { Avatar } from "@/components/avatar";
import { UserInfo } from "@/compositions/user-info";

type ProfileHeaderProps = {
  bannerImageElement: ReactNode;
  avatarImageElement?: ReactNode;
  avatarFallback: string;
  onEditHeader?: () => void;
  onEditAvatar?: () => void;
  name: string;
  handle: string;
  iconButtons: ReactNode;
  settingsLinkElement: ReactNode;
  bio: string;
};

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  bannerImageElement,
  avatarImageElement,
  avatarFallback,
  onEditHeader,
  onEditAvatar,
  name,
  handle,
  iconButtons,
  settingsLinkElement,
  bio,
}) => (
  <div>
    <div className="relative mb-4">
      <ProfileBanner onClick={onEditHeader} imageElement={bannerImageElement} />
      <div className="absolute bottom-0 right-6 translate-y-1/2 sm:absolute max-sm:static max-sm:translate-y-0 max-sm:-mt-8 max-sm:flex max-sm:justify-end">
        <Avatar
          imageElement={avatarImageElement}
          fallbackText={avatarFallback}
          size="xl"
          border
          onEditClick={onEditAvatar}
        />
      </div>
    </div>
    <UserInfo
      name={name}
      handle={handle}
      iconButtons={iconButtons}
      size="xl"
      showAvatar={false}
      profileSettingsLink={settingsLinkElement}
    />
    <p className="paragraph text-neutral-500 mt-4">{bio}</p>
  </div>
);
