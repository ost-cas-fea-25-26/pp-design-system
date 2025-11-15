import { ComponentType, FC } from "react";
import { iconButtonVariants } from "./variants";
import { VariantProps } from "class-variance-authority";
import { IconProps } from "../icons";

type IconButtonProps = VariantProps<typeof iconButtonVariants> & {
  label: string;
  IconComponent: ComponentType<IconProps>;
  color: "primary" | "neutral";
  layout: "horizontal" | "stacked";
  onClick?: () => void;
  animation?: "rotate";
};

export const IconButton: FC<IconButtonProps> = ({
  label,
  IconComponent,
  color = "primary",
  layout = "horizontal",
  onClick,
  animation,
}) => {
  const iconSize = layout === "stacked" ? "m" : "s";

  const animationClasses =
    animation === "rotate"
      ? "inline-flex transition-transform duration-300 ease-in-out group-hover:rotate-180"
      : "";

  return (
    <button
      className={iconButtonVariants({
        color: color,
        layout: layout,
      })}
      onClick={onClick}
    >
      <span className={animationClasses} data-testid="icon-wrapper">
        <IconComponent size={iconSize} color="inherit" />
      </span>
      <span className="ml-1">{label}</span>
    </button>
  );
};
