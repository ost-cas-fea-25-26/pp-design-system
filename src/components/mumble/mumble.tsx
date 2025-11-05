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
    <div className="relative bg-white rounded-2xl hover:outline hover:outline-neutral-200 hover:outline-2 shadow-sm pt-1 pr-12 pb-8 pl-12">
      {/* UserInfo overlaps top left */}
      <div className="absolute top-6 -left-6 z-10">
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
      </div>
      {/* Main content area, with left margin for avatar */}
      <div className="mt-20">
        {/* Content */}
        <div className="mb-4 text-base text-black leading-snug">{content}</div>
        {/* Placeholder image */}
        <div className="w-full h-40 bg-[#E3D9FF] rounded-xl mb-6" />
        {/* Actions row */}
        <div className="flex items-center justify-start gap-12 text-gray-700 text-base">
          {actions}
        </div>
      </div>
    </div>
  );
};
