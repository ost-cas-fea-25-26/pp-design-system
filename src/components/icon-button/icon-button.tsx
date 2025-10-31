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
  animation?: "rotate" | "move";
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

  let animationClasses = "";
  if (animation === "rotate") {
    animationClasses =
      "inline-flex transition-transform duration-300 ease-in-out group-hover:rotate-180";
  }

  return (
    <button
      className={
        iconButtonVariants({
          color: color,
          layout: layout,
        }) + " group"
      }
      onClick={onClick}
    >
      <span className={animationClasses}>
        <IconComponent size={iconSize} color="inherit" />
      </span>
      <span className="label-s ml-1">{label}</span>
    </button>
  );
};
