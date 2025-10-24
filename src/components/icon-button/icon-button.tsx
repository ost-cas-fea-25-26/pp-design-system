import React, { FC } from "react";
import { iconButtonVariants } from "./variants";
import { VariantProps } from "class-variance-authority";

type IconButtonProps = VariantProps<typeof iconButtonVariants> & {
  label: string;
  icon: React.ReactNode;
  color: "primary" | "neutral";
  layout: "horizontal" | "stacked";
  onClick?: () => void;
};

export const IconButton: FC<IconButtonProps> = ({
  label,
  icon,
  color = "primary",
  layout = "horizontal",
  onClick,
}) => {
  return (
    <button
      className={iconButtonVariants({
        color: color,
        layout: layout,
      })}
      onClick={onClick}
    >
      {icon} <span className="label-s ml-1">{label}</span>
    </button>
  );
};
