import { FC, useState } from "react";
import * as React from "react";

type TimedButtonProps = {
  initialContent: React.ReactNode;
  completedContent: React.ReactNode;
  onClick?: () => Promise<void>;
};

export const TimedButton: FC<TimedButtonProps> = (props) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

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

    setIsCompleted(true);
  };

  return (
    <button onClick={handleClick}>
      {isCompleted ? props.completedContent : props.initialContent}
    </button>
  );
};
