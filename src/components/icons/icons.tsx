/// <reference types="vite-plugin-svgr/client" />
import { FC } from "react";
import Settings from "./svg/settings.svg?react";
import Upload from "./svg/upload.svg?react";
import Heart from "./svg/heart.svg?react";
import HeartFilled from "./svg/heart-filled.svg?react";
import Reply from "./svg/reply.svg?react";
import ReplyFilled from "./svg/reply-filled.svg?react";
import ArrowDown from "./svg/arrow-down.svg?react";
import ArrowUp from "./svg/arrow-up.svg?react";
import ArrowLeft from "./svg/arrow-left.svg?react";
import ArrowRight from "./svg/arrow-right.svg?react";
import Mumble from "./svg/mumble.svg?react";
import Profile from "./svg/profile.svg?react";
import Calendar from "./svg/calendar.svg?react";
import Cancel from "./svg/cancel.svg?react";
import Checkmark from "./svg/checkmark.svg?react";
import Edit from "./svg/edit.svg?react";
import Eye from "./svg/eye.svg?react";
import Fullscreen from "./svg/fullscreen.svg?react";
import Location from "./svg/location.svg?react";
import Logout from "./svg/logout.svg?react";
import Repost from "./svg/repost.svg?react";
import Send from "./svg/send.svg?react";
import Share from "./svg/share.svg?react";
import Time from "./svg/time.svg?react";

const ICON_SIZE = 16;

type IconColor = "primary" | "accent" | "neutral" | "white";

type IconProps = { color?: IconColor };

const iconClassMap: Record<IconColor, string> = {
  primary: "text-primary",
  accent: "text-accent",
  neutral: "text-neutral",
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
export const ArrowUpIcon = makeIcon(ArrowUp, "ArrowUpIcon");
export const ArrowLeftIcon = makeIcon(ArrowLeft, "ArrowLeftIcon");
export const ArrowRightIcon = makeIcon(ArrowRight, "ArrowRightIcon");
export const MumbleIcon = makeIcon(Mumble, "MumbleIcon");
export const ProfileIcon = makeIcon(Profile, "ProfileIcon");
export const CalendarIcon = makeIcon(Calendar, "CalendarIcon");
export const CancelIcon = makeIcon(Cancel, "CancelIcon");
export const CheckmarkIcon = makeIcon(Checkmark, "CheckmarkIcon");
export const EditIcon = makeIcon(Edit, "EditIcon");
export const EyeIcon = makeIcon(Eye, "EyeIcon");
export const FullscreenIcon = makeIcon(Fullscreen, "FullscreenIcon");
export const LocationIcon = makeIcon(Location, "LocationIcon");
export const LogoutIcon = makeIcon(Logout, "LogoutIcon");
export const RepostIcon = makeIcon(Repost, "RepostIcon");
export const SendIcon = makeIcon(Send, "SendIcon");
export const ShareIcon = makeIcon(Share, "ShareIcon");
export const TimeIcon = makeIcon(Time, "TimeIcon");
