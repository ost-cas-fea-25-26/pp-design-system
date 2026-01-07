import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CancelIcon } from "../icons";

type InputProps = React.ComponentProps<"input"> & {
  icon?: ReactNode;
};

export const Input: FC<InputProps> = ({ type, icon, id, ...props }) => {
  const isInvalid =
    props["aria-invalid"] === true || props["aria-invalid"] === "true";

  const displayIcon = isInvalid ? <CancelIcon color="error" /> : icon;

  return (
    <span className="inline-flex items-center relative w-full">
      <input
        id={id}
        type={type}
        className={twMerge(
          "flex-1 text-neutral-700 bg-neutral-50 border border-neutral-200 h-12 min-w-0 rounded-md p-4 transition-all outline-none",
          "placeholder:text-neutral-400 selection:bg-primary selection:text-primary-foreground",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-m",

          // Hover & Focus
          "enabled:hover:border-primary enabled:focus-visible:border-primary enabled:focus-visible:ring-primary enabled:focus-visible:ring",

          // Invalid
          "enabled:aria-invalid:border-error enabled:aria-invalid:hover:border-error-hover enabled:aria-invalid:active:border-error-active",
          "enabled:aria-invalid:focus-visible:border-error enabled:aria-invalid:focus-visible:ring-error enabled:aria-invalid:focus-visible:ring",

          displayIcon && "pr-10",
        )}
        {...props}
      />

      {displayIcon && (
        <span
          className={twMerge(
            "absolute right-3 flex items-center pointer-events-none",
            isInvalid ? "text-error" : "text-neutral-400",
          )}
        >
          {displayIcon}
        </span>
      )}
    </span>
  );
};
