import { FC } from "react";
import { Avatar, AvatarProps } from "@/components/avatar";

type AvatarButtonProps = {
  avatarProps: AvatarProps;
  onClick?: () => void;
};

export const AvatarButton: FC<AvatarButtonProps> = ({
  avatarProps,
  onClick,
}) => (
  <button
    onClick={onClick}
    aria-label={avatarProps.alt}
    className="p-[8px] cursor-pointer flex justify-center items-center bg-primary-600 hover:bg-primary-700 flex-col rounded-lg focus-ring-neutral"
  >
    <Avatar {...avatarProps} size="s" />
  </button>
);
