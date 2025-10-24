import { FC } from "react";
import { Avatar, AvatarProps } from "../avatar";

type AvatarButtonProps = {
  avatarProps: AvatarProps;
  onClick?: () => void;
};

export const AvatarButton: FC<AvatarButtonProps> = ({
  avatarProps,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="p-[8px] cursor-pointer flex justify-center items-center bg-primary-600 hover:bg-primary-700 flex-col rounded-lg"
    >
      <Avatar {...avatarProps} size="s" />
    </button>
  );
};
