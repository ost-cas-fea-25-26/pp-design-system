import { FC } from "react";
import { Avatar, AvatarProps } from "@/components/avatar";

type AvatarButtonProps = AvatarProps & {
  onClick?: () => void;
};

export const AvatarButton: FC<AvatarButtonProps> = ({
  onClick,
  fallbackText,
  ...avatarProps
}) => (
  <button
    onClick={onClick}
    aria-label={fallbackText ?? "Avatar"}
    className="p-2 cursor-pointer flex justify-center items-center bg-primary-600 hover:bg-primary-700 flex-col rounded-lg focus-ring-neutral"
  >
    <Avatar {...avatarProps} fallbackText={fallbackText} size="s" />
  </button>
);
