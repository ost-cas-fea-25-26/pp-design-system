import { FC } from "react";
import * as React from "react";
import { UserInfo } from "@/compositions";
import { IconButton, ProfileIcon, TimeIcon } from "@/components";
import { twMerge } from "tailwind-merge";

type MumbleSize = "m" | "l";

export type MumbleProps = {
  size: MumbleSize;
  userName: string;
  userHandle: string;
  avatarSrc?: string;
  timestamp: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  hideBorder?: boolean;
};

const sizeClassMap: Record<MumbleSize, string> = {
  m: "paragraph",
  l: "paragraph-lg",
};

export const Mumble: FC<MumbleProps> = ({
  size = "m",
  userName,
  userHandle,
  avatarSrc,
  timestamp,
  content,
  actions,
  hideBorder = false,
}) => {
  const avatarImageElement = avatarSrc ? (
    <img
      alt={userName}
      className="object-cover w-full h-full"
      src={avatarSrc}
    />
  ) : null;

  return (
    <div
      className={twMerge(
        "relative bg-white rounded-2xl pt-1 pr-12 pb-8 pl-12",
        !hideBorder
          ? "shadow-sm hover:outline-neutral-200 hover:outline-2"
          : "",
      )}
    >
      <div className="absolute top-6 -left-6 z-10">
        <UserInfo
          avatarImageElement={avatarImageElement}
          handle={userHandle}
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
          name={userName}
          showAvatar
          size="m"
        />
      </div>
      <div className="mt-25">
        <div className={sizeClassMap[size]}>{content}</div>
        <div className="flex items-center justify-start -ml-4 mt-5">
          {actions}
        </div>
      </div>
    </div>
  );
};
