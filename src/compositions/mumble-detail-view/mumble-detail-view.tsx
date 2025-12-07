"use client";

import { FC } from "react";
import { Mumble, MumbleProps, UserInfo, UserInfoProps } from "@/compositions";
import { ReplyForm, ReplyFormProps } from "@/compositions/reply-form";

type MumbleDetailViewProps = {
  mumble: MumbleProps;
  user: UserInfoProps;
  replyForm: ReplyFormProps;
};

export const MumbleDetailView: FC<MumbleDetailViewProps> = ({
  mumble,
  user,
  replyForm,
}) => {
  return (
    <div>
      Mumble Detail View - {mumble.userName}
      <Mumble {...mumble} />
      <UserInfo {...user} />
      <ReplyForm {...replyForm} />
    </div>
  );
};
