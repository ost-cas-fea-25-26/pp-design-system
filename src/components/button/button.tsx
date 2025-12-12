import { twMerge } from "tailwind-merge";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";
import { ComponentProps, FC } from "react";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    fullWidth?: boolean;
    isCircular?: boolean;
  };

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  fullWidth = false,
  isCircular = false,
  ...props
}) => (
  <button
    {...props}
    className={twMerge(
      buttonVariants({ variant, size }),
      fullWidth && "w-full",
      isCircular && "rounded-full",
    )}
  />
);
