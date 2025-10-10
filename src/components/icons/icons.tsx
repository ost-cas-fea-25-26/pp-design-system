/// <reference types="vite-plugin-svgr/client" />
import { FC } from "react";
import Settings from "./svg/settings.svg?react";
import Upload from "./svg/upload.svg?react";
import Heart from "./svg/heart.svg?react";
import HeartFilled from "./svg/heart-filled.svg?react";
import Reply from "./svg/reply.svg?react";
import ReplyFilled from "./svg/reply-filled.svg?react";
import ArrowDown from "./svg/arrow-down.svg?react";

const ICON_SIZE = 16;

type IconColor = "primary" | "secondary" | "accent" | "white";

type IconProps = { color?: IconColor };

const iconClassMap: Record<IconColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-pink-500", // TODO: text-accent
  white: "text-white",
};

const makeIcon = (
  Icon: FC<{ className?: string; width?: number; height?: number }>,
  name: string,
): FC<IconProps> => {
  const Component: FC<IconProps> = ({ color = "primary" }) => (
    <Icon
      className={iconClassMap[color]}
      width={ICON_SIZE}
      height={ICON_SIZE}
    />
  );
  Component.displayName = name;

  return Component;
};

export const SettingsIcon = makeIcon(Settings, "SettingsIcon");
export const UploadIcon = makeIcon(Upload, "UploadIcon");
export const HeartIcon = makeIcon(Heart, "HeartIcon");
export const HeartFilledIcon = makeIcon(HeartFilled, "HeartFilledIcon");
export const ReplyIcon = makeIcon(Reply, "ReplyIcon");
export const ReplyFilledIcon = makeIcon(ReplyFilled, "ReplyFilledIcon");
export const ArrowDownIcon = makeIcon(ArrowDown, "ArrowDownIcon");
