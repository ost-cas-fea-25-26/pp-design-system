import * as React from "react";
import { twMerge } from "tailwind-merge";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "default",
  ...props
}) => {
  return (
    <>
      <button
        className={twMerge(buttonVariants({ variant, size, className }))}
        {...props}
      />
      <p className="paragraph">Paragraph</p>
      <p className="paragraph-lg">Pragraph Large</p>
    </>
  );
};
