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
      "text-slate-700 file:text-slate-300 placeholder:text-slate-300 selection:bg-primary selection:text-white",
      "border border-slate-300 h-12 w-full min-w-0 rounded-md bg-slate-50 p-4 text-base shadow-xs transition-all outline-none",
      "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

      // Hover & Focus
      "hover:border-primary hover:border",
      "focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-[1px]",

      // Active
      "active:border-primary active:border-[2px]",

      // Validation
      "aria-invalid:ring-pink-500/20 aria-invalid:border-pink-500",
    )}
    {...props}
  />
);
