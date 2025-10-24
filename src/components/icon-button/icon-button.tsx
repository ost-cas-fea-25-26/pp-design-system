import { ComponentType, FC } from "react";
import { iconButtonVariants } from "./variants";
import { VariantProps } from "class-variance-authority";
import { IconProps } from "@/components";

type IconButtonProps = VariantProps<typeof iconButtonVariants> & {
  label: string;
  IconComponent: ComponentType<IconProps>;
  color: "primary" | "neutral";
  layout: "horizontal" | "stacked";
  onClick?: () => void;
};

export const IconButton: FC<IconButtonProps> = ({
  label,
  IconComponent,
  color = "primary",
  layout = "horizontal",
  onClick,
}) => {
  const iconSize = layout === "stacked" ? "m" : "s";

  return (
    <button
      className={iconButtonVariants({
        color: color,
        layout: layout,
      })}
      onClick={onClick}
    >
      <IconComponent size={iconSize} color="inherit" />
      <span className="label-s ml-1">{label}</span>
    </button>
  );
};
