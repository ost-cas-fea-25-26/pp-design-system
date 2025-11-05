import { FC } from "react";
import { IconButton } from "../icon-button";
import { ProfileIcon, TimeIcon } from "../icons";
import { UserInfo } from "../user-info";
import * as React from "react";

type MumbleProps = {
  size: "m" | "l";
  userName: string;
  userHandle: string;
  avatarSrc?: string;
  timestamp: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
};

export const Mumble: FC<MumbleProps> = ({
  size = "m",
  userName,
  userHandle,
  avatarSrc,
  timestamp,
  content,
  actions,
}) => {
  return (
    <div>
      <UserInfo
        size="s"
        name={userName}
        handle={userHandle}
        showAvatar
        avatarSrc={avatarSrc}
        iconButtons={
          <>
            <IconButton
              label={userHandle}
              IconComponent={ProfileIcon}
              color="primary"
              layout="horizontal"
            />
            <IconButton
              color="neutral"
              IconComponent={TimeIcon}
              label={timestamp}
              layout="horizontal"
            />
          </>
        }
      />
      <div>{content}</div>
      {actions}
    </div>
  );
};
