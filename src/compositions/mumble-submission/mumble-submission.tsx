import { FC } from "react";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export type MumbleSubmissionProps = {
  avatar: React.ReactNode;
  form: React.ReactNode;
};

export const MumbleSubmission: FC<MumbleSubmissionProps> = ({
  avatar,
  form,
}) => {
  return (
    <div
      className={twMerge(
        "relative bg-white rounded-2xl pt-8 pb-8 pl-12 pr-12 shadow-sm hover:outline-neutral-200 hover:outline-2",
      )}
    >
      <div className="absolute top-4 -left-8 z-10">{avatar}</div>
      {form}
    </div>
  );
};
