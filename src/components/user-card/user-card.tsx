import { FC } from "react";
import { Avatar } from "../avatar";
import { ProfileIcon } from "../icons";
import { IconButton } from "../icon-button";

type UserCardProps = {
  name: string;
  handle: string;
  avatarSrc?: string;
  button?: React.ReactNode;
};

export const UserCard: FC<UserCardProps> = ({
  name,
  handle,
  avatarSrc,
  button,
}) => {
  return (
    <div className="bg-primary-foreground rounded-xl flex flex-col items-center p-4 gap-4">
      <Avatar
        alt={name}
        fallbackText={handle}
        src={avatarSrc}
        size="l"
        border={true}
      />
      <div className="flex flex-col gap-1">
        <span className="text-center label-lg text-neutral-900">{name}</span>
        <IconButton
          label={handle}
          IconComponent={ProfileIcon}
          color="primary"
          layout="horizontal"
        />
      </div>
      {button}
    </div>
  );
};
