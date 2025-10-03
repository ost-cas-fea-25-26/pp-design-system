/// <reference types="vite-plugin-svgr/client" />
import { FC } from "react";
import SettingsIcon from "/public/icons/settings.svg?react";
import UploadIcon from "/public/icons/upload.svg?react";

const iconSize = 16;

type IconName = "settings" | "upload";
type IconColor = "primary" | "secondary" | "accent";

type CustomIconProps = {
  name: IconName;
  color: IconColor;
};

const iconClassMap: Record<IconColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-pink-500", // TODO: text-accent
};

export const CustomIcon: FC<CustomIconProps> = ({ ...props }) => {
  switch (props.name) {
    case "settings":
      return (
        <SettingsIcon
          className={iconClassMap[props.color]}
          height={iconSize}
          width={iconSize}
        />
      );
    case "upload":
      return (
        <UploadIcon
          className={iconClassMap[props.color]}
          height={iconSize}
          width={iconSize}
        />
      );
    default:
      return null;
  }
};
