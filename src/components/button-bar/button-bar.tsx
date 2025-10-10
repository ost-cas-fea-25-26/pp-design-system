import { FC, ReactNode } from "react";

type ActionButtonsProps = {
  leftButton: ReactNode;
  rightButton: ReactNode;
};

export const ButtonBar: FC<ActionButtonsProps> = ({
  leftButton,
  rightButton,
}) => (
  <div className="flex w-full flex-col gap-4 sm:flex-row">
    {leftButton}
    {rightButton}
  </div>
);
