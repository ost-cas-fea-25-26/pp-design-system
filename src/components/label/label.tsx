import React, { FC } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { twMerge } from "tailwind-merge";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> & {
  error?: boolean;
  disabled?: boolean;
};

export const Label: FC<LabelProps> = ({
  error = false,
  disabled = false,
  ...props
}) => (
  <LabelPrimitive.Root
    className={twMerge(
      // Base
      "flex items-center gap-2 text-sm font-medium leading-none select-none",

      // Disabled
      disabled && "cursor-not-allowed opacity-50 pointer-events-none",

      // Error
      error && "text-error",
    )}
    {...props}
  />
);
