import { FC, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

type TimedButtonProps = {
  label: string;
  activeLabel?: string;
  icon?: ReactNode;
  onClick?: () => Promise<void>;
  duration?: number; // in milliseconds
};

export const TimedButton: FC<TimedButtonProps> = ({
  duration = 1000,
  label,
  activeLabel,
  icon,
  onClick,
}) => {
  const [status, setStatus] = useState<"idle" | "processing" | "active">(
    "idle",
  );

  const handleClick = async () => {
    if (status !== "idle") {
      return;
    }

    if (!onClick) {
      return;
    }
    setStatus("processing");

    try {
      await onClick();
      setStatus("active");
      setTimeout(() => {
        setStatus("idle");
      }, duration);
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        "focus-ring-neutral inline-flex items-center px-4 py-2 cursor-pointer rounded-2xl hover:bg-neutral-100 active:bg-neutral-100 transition-colors duration-[350ms] ease-in-out",
        status === "processing" && "cursor-wait bg-neutral-100",
        status === "active" && "cursor-default bg-neutral-100",
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="relative flex justify-center items-center">
        {status !== "active" && (
          <span className="transition-opacity duration-[350ms] ease-in-out block text-center whitespace-nowrap opacity-100">
            {label}
          </span>
        )}
        <span
          className={twMerge(
            "transition-opacity duration-[350ms] ease-in-out block text-center whitespace-nowrap",
            status === "active"
              ? "opacity-100"
              : "opacity-0 absolute left-0 right-0 top-0 bottom-0",
          )}
        >
          {activeLabel ?? label}
        </span>
      </span>
    </button>
  );
};
