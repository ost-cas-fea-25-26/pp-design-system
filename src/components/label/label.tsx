import React, { FC } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { twMerge } from "tailwind-merge";

export const Label: FC<React.ComponentProps<typeof LabelPrimitive.Root>> = ({
  ...props
}) => (
  <LabelPrimitive.Root
    className={twMerge(
      // Base
      "flex items-center gap-2 text-sm font-medium leading-none select-none",

      // Disabled
      "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
    )}
    {...props}
  />
);
