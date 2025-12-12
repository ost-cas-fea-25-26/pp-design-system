import { FC, ReactNode } from "react";
import { Avatar } from "../../components/avatar";
import { ProfileIcon } from "../../components/icons";
import { IconButton } from "../../components/icon-button";

type UserCardProps = {
  name: string;
  handle: string;
  profileUrl: string;
  avatarImageElement?: ReactNode;
  button?: ReactNode;
};

export const UserCard: FC<UserCardProps> = ({
  name,
  handle,
  profileUrl,
  avatarImageElement,
  button,
}) => (
  <div className="bg-primary-foreground rounded-xl flex flex-col items-center p-4 gap-4">
    <Avatar
      imageElement={avatarImageElement}
      fallbackText={handle}
      size="l"
      border
    />
    <div className="flex flex-col gap-1">
      <span className="text-center label-lg text-neutral-900">{name}</span>
      <a href={profileUrl} title={`View ${name}'s profile`}>
        <IconButton
          label={handle}
          IconComponent={ProfileIcon}
          color="primary"
          layout="horizontal"
        />
      </a>
    </div>
    {button}
  </div>
);
