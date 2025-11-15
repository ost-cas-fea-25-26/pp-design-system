import { Avatar } from "@/components/avatar";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type UserInfoSize = "s" | "m" | "l" | "xl";

type UserInfoProps = {
  size: UserInfoSize;
  name: string;
  handle: string;
  avatarImageElement?: ReactNode;
  showAvatar?: boolean;
  profileSettingsLink?: ReactNode;
  iconButtons?: ReactNode;
};

const fontSizeMap: Record<UserInfoSize, string> = {
  s: "label-m",
  m: "label-lg",
  l: "label-xl",
  xl: "heading-3",
};

const getWrapperClasses = (showAvatar: boolean, showProfileLink: boolean) => {
  if (showProfileLink) {
    return "items-center gap-2";
  }
  if (showAvatar) {
    return "grid grid-cols-[auto_1fr] items-center gap-2";
  }

  return "grid items-center gap-2";
};

export const UserInfo: FC<UserInfoProps> = ({
  size,
  name,
  handle,
  avatarImageElement,
  showAvatar = true,
  profileSettingsLink,
  iconButtons,
}) => (
  <div className={getWrapperClasses(showAvatar, !!profileSettingsLink)}>
    {showAvatar && (
      <Avatar
        imageElement={avatarImageElement}
        fallbackText={handle.substring(0, 2).toUpperCase()}
        size="s"
        border={false}
      />
    )}
    {profileSettingsLink ? (
      <>
        <div className="flex items-center gap-2">
          <span className={twMerge(fontSizeMap[size], "text-neutral-900")}>
            {name}
          </span>
          {profileSettingsLink}
        </div>
        {iconButtons && <div className="flex gap-4 pt-2">{iconButtons}</div>}
      </>
    ) : (
      <div className="flex flex-col">
        <span className={twMerge(fontSizeMap[size], "text-neutral-900")}>
          {name}
        </span>
        {iconButtons && <div className="flex gap-4 pt-2">{iconButtons}</div>}
      </div>
    )}
  </div>
);
