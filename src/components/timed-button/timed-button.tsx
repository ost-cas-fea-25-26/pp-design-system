import { FC, ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type TimedButtonProps = {
  label: string;
  activeLabel?: string;
  icon?: ReactNode;
  onClick?: () => Promise<void>;
  duration?: number; // in milliseconds
};

export const TimedButton: FC<TimedButtonProps> = (props) => {
  const defaultDuration = 2000;

  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [buttonText, setButtonText] = useState(props.label);

  const resetActiveState = () => {
    setTimeout(() => {
      setIsCompleted(false);
      setButtonText(props.label);
    }, props.duration ?? defaultDuration);
  };

  const handleClick = async () => {
    if (isProcessing) {
      return;
    }

    if (props.onClick) {
      setIsProcessing(true);
      try {
        await props.onClick();
      } catch (error) {
        console.error(error);
      } finally {
        setIsProcessing(false);
      }
    }
    setButtonText(props.activeLabel ?? props.label);
    setIsCompleted(true);
  };

  useEffect(() => {
    if (!isCompleted) {
      return;
    }
    resetActiveState();
  }, [isCompleted]);

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        'focus-ring-neutral inline-flex items-center px-4 py-2 cursor-pointer rounded-2xl hover:bg-neutral-100 active:bg-neutral-100"',
        isProcessing && "cursor-wait bg-neutral-100",
        isCompleted && "cursor-default bg-neutral-100",
      )}
    >
      {props.icon && <span className="mr-2">{props.icon}</span>}
      {buttonText}
    </button>
  );
};
