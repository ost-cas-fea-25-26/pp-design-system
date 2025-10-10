import React, { FC, ReactNode } from "react";

export type ActionButtonsProps = {
  leftButton: ReactNode;
  rightButton: ReactNode;
};

export const ActionButtons: FC<ActionButtonsProps> = ({
  leftButton,
  rightButton,
}) => (
  <div className="flex w-full flex-col gap-4 sm:flex-row">
    {leftButton}
    {rightButton}
  </div>
);
