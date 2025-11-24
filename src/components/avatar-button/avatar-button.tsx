import { FC } from "react";
import { Avatar, AvatarProps } from "../avatar";

type AvatarButtonProps = AvatarProps;

export const AvatarButton: FC<AvatarButtonProps> = ({
  fallbackText,
  ...avatarProps
}) => (
  <div
    aria-label={fallbackText ?? "Avatar"}
    className="p-2 cursor-pointer flex justify-center items-center bg-primary-600 hover:bg-primary-700 flex-col rounded-lg focus-ring-neutral"
  >
    <Avatar {...avatarProps} fallbackText={fallbackText} size="s" />
  </div>
);
