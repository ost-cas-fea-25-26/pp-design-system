"use client";

import { FC } from "react";
import { Mumble, MumbleProps, UserInfo, UserInfoProps } from "@/compositions";
import { ReplyForm, ReplyFormProps } from "@/compositions/reply-form";

type MumbleDetailViewProps = {
  mumble: MumbleProps;
  user: UserInfoProps;
  replyForm: ReplyFormProps;
  replies: MumbleProps[];
};

export const MumbleDetailView: FC<MumbleDetailViewProps> = ({
  mumble,
  user,
  replyForm,
  replies,
}) => {
  return (
    <div className="bg-white">
      <Mumble {...mumble} hideBorder />
      <div className="p-6 flex flex-col gap-4">
        <UserInfo {...user} />
        <ReplyForm {...replyForm} />
        {replies.map((reply: MumbleProps, index: number) => (
          <div key={index} className="flex border-b border-slate-100 pb-4">
            <Mumble {...reply} size="m" hideBorder />
          </div>
        ))}
      </div>
    </div>
  );
};
