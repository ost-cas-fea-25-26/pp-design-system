import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export const Input: FC<React.ComponentProps<"input">> = ({
  type,
  ...props
}) => (
  <input
    type={type}
    className={twMerge(
      // Base
      "text-neutral bg-neutral-50 border border-neutral-200 h-12 w-full min-w-0 rounded-md p-4 text-base transition-all outline-none",
      "placeholder:text-neutral-400 selection:bg-primary selection:text-primary-foreground",
      "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-m",

      // Hover & Focus
      "enabled:hover:border-primary enabled:focus-visible:border-primary enabled:focus-visible:ring-primary enabled:focus-visible:ring",

      // Invalid
      "enabled:aria-invalid:border-error enabled:aria-invalid:hover:border-error-hover enabled:aria-invalid:active:border-error-active",
      "enabled:aria-invalid:focus-visible:border-error enabled:aria-invalid:focus-visible:ring-error enabled:aria-invalid:focus-visible:ring",
    )}
    {...props}
  />
);
