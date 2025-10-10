import * as React from "react";
import { twMerge } from "tailwind-merge";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    fullWidth?: boolean;
  };

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "default",
  fullWidth = false,
  ...props
}) => (
  <button
    className={twMerge(
      buttonVariants({ variant, size }),
      fullWidth && "w-full",
      className,
    )}
    {...props}
  />
);
