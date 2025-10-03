/// <reference types="vite-plugin-svgr/client" />
import { FC } from "react";
import SettingsIcon from "/public/icons/settings.svg?react";
import UploadIcon from "/public/icons/upload.svg?react";
import HeartIcon from "/public/icons/heart.svg?react";
import HeartFilledIcon from "/public/icons/heart-filled.svg?react";
import ReplyIcon from "/public/icons/reply.svg?react";
import ReplyFilledIcon from "/public/icons/reply-filled.svg?react";

const iconSize = 16;

type IconName =
  | "settings"
  | "upload"
  | "heart"
  | "heartFilled"
  | "reply"
  | "replyFilled";
type IconColor = "primary" | "secondary" | "accent";

type CustomIconProps = {
  name: IconName;
  color: IconColor;
  filled?: boolean;
};

const iconClassMap: Record<IconColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-pink-500", // TODO: text-accent
};

const iconMap: Record<
  IconName,
  FC<{ className: string; height: number; width: number }>
> = {
  settings: SettingsIcon,
  upload: UploadIcon,
  heart: HeartIcon,
  heartFilled: HeartFilledIcon,
  reply: ReplyIcon,
  replyFilled: ReplyFilledIcon,
};

export const CustomIcon: FC<CustomIconProps> = ({ name, color }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={iconClassMap[color]}
      height={iconSize}
      width={iconSize}
    />
  );
};
