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
      <div className="flex flex-col pl-8 pr-8">
        <div className="mb-4">
          <UserInfo {...user} />
        </div>
        <div className="mb-12">
          <ReplyForm {...replyForm} />
        </div>
        {replies.map((reply: MumbleProps) => (
          <div
            key={reply.id}
            className="mb-8 last:mb-0 flex border-b border-slate-100 last:border-0"
          >
            <Mumble {...reply} size="m" hideBorder showUserInline />
          </div>
        ))}
      </div>
    </div>
  );
};
