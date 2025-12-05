import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CancelIcon } from "@/components/icons";

type TextareaProps = React.ComponentProps<"textarea"> & {
  icon?: ReactNode;
};

export const Textarea: FC<TextareaProps> = ({ icon, id, ...props }) => {
  const isInvalid =
    props["aria-invalid"] === true || props["aria-invalid"] === "true";

  const displayIcon = isInvalid ? <CancelIcon color="error" /> : icon;

  return (
    <span className="inline-flex items-start relative w-full">
      <textarea
        id={id}
        className={twMerge(
          "flex-1 text-neutral-700 bg-neutral-50 border border-neutral-200 min-h-[120px] w-full rounded-md p-4 transition-all outline-none resize-y",
          "placeholder:text-neutral-400 selection:bg-primary selection:text-primary-foreground",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-m leading-[27px]",

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
            "absolute right-3 top-3 flex items-center pointer-events-none",
            isInvalid ? "text-error" : "text-neutral-400",
          )}
        >
          {displayIcon}
        </span>
      )}
    </span>
  );
};
