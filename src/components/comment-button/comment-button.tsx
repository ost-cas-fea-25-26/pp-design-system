import { FC } from "react";
import * as React from "react";

type CommentButtonType = {
  label: string;
  icon?: React.ReactNode;
};

export const CommentButton: FC<CommentButtonType> = ({ label, icon }) => {
  return (
    <button className="gap-2 label-m inline-flex items-center px-3 py-2 cursor-pointer rounded-2xl focus-ring-primary hover:**:text-primary-600 hover:bg-primary-50 ">
      {icon} {label}
    </button>
  );
};
