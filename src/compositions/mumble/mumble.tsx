import { FC } from "react";
import * as React from "react";
import { UserInfo } from "@/compositions";
import { IconButton, ProfileIcon, TimeIcon } from "@/components";
import { twMerge } from "tailwind-merge";

type MumbleSize = "m" | "l";

export type MumbleProps = {
  id: string;
  size: MumbleSize;
  userName: string;
  userHandle: string;
  profileUrl: string;
  avatar?: React.ReactNode;
  timestamp: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  hideBorder?: boolean;
  showUserInline?: boolean;
  mediaElement?: React.ReactNode;
};

const sizeClassMap: Record<MumbleSize, string> = {
  m: "paragraph",
  l: "paragraph-lg",
};

export const Mumble: FC<MumbleProps> = ({
  size = "m",
  userName,
  userHandle,
  profileUrl,
  avatar,
  timestamp,
  content,
  actions,
  hideBorder = false,
  showUserInline = false,
  mediaElement,
}) => {
  return (
    <div
      className={twMerge(
        "relative bg-white rounded-2xl pt-1 pb-8",
        !hideBorder && "shadow-sm hover:outline-neutral-200 hover:outline-2",
        !showUserInline && "pl-12 pr-12",
      )}
    >
      <div
        className={showUserInline ? "relative" : "absolute top-4 -left-8 z-10"}
      >
        <UserInfo
          avatarImageElement={avatar}
          handle={userHandle}
          iconButtons={
            <>
              <a href={profileUrl}>
                <IconButton
                  label={userHandle}
                  IconComponent={ProfileIcon}
                  color="primary"
                  layout="horizontal"
                />
              </a>
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
          size="l"
        />
      </div>
      <div className={showUserInline ? "mt-4" : "mt-25"}>
        <div className={sizeClassMap[size]}>
          {content}
          {mediaElement && <div className="mt-4">{mediaElement}</div>}
        </div>
        <div className="flex items-center justify-start -ml-4 mt-5">
          {actions}
        </div>
      </div>
    </div>
  );
};
