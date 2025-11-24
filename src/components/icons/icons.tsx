import { FC } from "react";
import {
  Settings,
  Upload,
  Heart,
  HeartFilled,
  Reply,
  ReplyFilled,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Mumble,
  Profile,
  Calendar,
  Cancel,
  Location,
  Checkmark,
  Edit,
  Eye,
  Fullscreen,
  Logout,
  Repost,
  Send,
  Share,
  Time,
} from "./svg-react";

const ICON_SIZE_MAP = {
  s: 12,
  m: 16,
  l: 28,
} as const;

type IconColor =
  | "primary"
  | "accent"
  | "neutral"
  | "white"
  | "error"
  | "inherit";

type IconSize = keyof typeof ICON_SIZE_MAP;

export type IconProps = {
  color?: IconColor;
  size?: IconSize;
};

const ICON_COLOR_CLASSES: Record<IconColor, string> = {
  primary: "text-primary",
  accent: "text-accent",
  neutral: "text-neutral",
  white: "text-white",
  error: "text-error",
  inherit: "",
};

const makeIcon = (
  Icon: FC<{ className?: string; width?: number; height?: number }>,
  name: string,
): FC<IconProps> => {
  const Component: FC<IconProps> = ({ color = "primary", size = "m" }) => (
    <Icon
      className={ICON_COLOR_CLASSES[color]}
      width={ICON_SIZE_MAP[size]}
      height={ICON_SIZE_MAP[size]}
      data-testid={`icon-${name}`}
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
