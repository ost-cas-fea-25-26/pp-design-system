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
  duration = 2000,
  ...props
}) => {
  const [status, setStatus] = useState<"idle" | "processing" | "active">(
    "idle",
  );

  const handleClick = async () => {
    if (status !== "idle") {
      return;
    }

    if (!props.onClick) {
      return;
    }
    setStatus("processing");

    try {
      await props.onClick();
      setStatus("active");
      setTimeout(() => {
        setStatus("idle");
      }, duration);
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  const buttonText = status === "active" ? props.activeLabel : props.label;

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        'focus-ring-neutral inline-flex items-center px-4 py-2 cursor-pointer rounded-2xl hover:bg-neutral-100 active:bg-neutral-100"',
        status === "processing" && "cursor-wait bg-neutral-100",
        status === "active" && "cursor-default bg-neutral-100",
      )}
    >
      {props.icon && <span className="mr-2">{props.icon}</span>}
      {buttonText}
    </button>
  );
};
