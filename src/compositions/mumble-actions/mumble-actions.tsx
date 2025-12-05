"use client";

import { FC } from "react";

import {
  HeartFilledIcon,
  HeartIcon,
  ReplyFilledIcon,
  ReplyIcon,
  ShareIcon,
  TimedButton,
  Toggle,
} from "@/components";

type MumbleActionsProps = {
  deepLink: string;
  likeCounter?: number;
  commentCounter?: number;
  onCommentToggleHandler?: (nextState: boolean) => Promise<void>;
  onLikeToggleHandler?: (nextState: boolean) => Promise<void>;
  liked?: boolean;
};

export const MumbleActions: FC<MumbleActionsProps> = ({
  deepLink,
  likeCounter = 0,
  commentCounter = 0,
  onCommentToggleHandler,
  onLikeToggleHandler,
  liked = false,
}) => {
  const getLikeLabel = (count: number): string => {
    if (count === 0) {
      return "Like";
    }
    if (count === 1) {
      return "1 Like";
    }

    return `${count} Likes`;
  };

  const getLikeChildren = (count: number) => (
    <span className="inline-flex items-center gap-2">
      {count === 0 ? (
        <HeartIcon color="inherit" />
      ) : (
        <HeartFilledIcon color="accent" />
      )}
      {getLikeLabel(count)}
    </span>
  );

  const renderLikeToggle = (count: number) => {
    return (
      <Toggle
        defaultChildren={getLikeChildren(count)}
        activeChildren={getLikeChildren(count)}
        onToggle={onLikeToggleHandler}
        variant={liked ? "metric" : "accent"}
        isActive={liked}
      />
    );
  };

  const getCommentLabel = (count: number): string => {
    if (count === 0) {
      return "Comment";
    }
    if (count === 1) {
      return "1 Comment";
    }

    return `${count} Comments`;
  };

  const getCommentChildren = (count: number) => (
    <span className="inline-flex items-center gap-2">
      {count === 0 ? (
        <ReplyIcon color="inherit" />
      ) : (
        <ReplyFilledIcon color="primary" />
      )}
      {getCommentLabel(count)}
    </span>
  );
  const renderCommentToggle = (count: number) => (
    <Toggle
      defaultChildren={getCommentChildren(count)}
      activeChildren={getCommentChildren(count + 1)}
      onToggle={onCommentToggleHandler}
      variant="primary"
    />
  );

  const handleShareLink = async () => {
    await navigator.clipboard.writeText(deepLink);
  };

  return (
    <div>
      <div className="flex gap-8">
        {renderCommentToggle(commentCounter)}
        {renderLikeToggle(likeCounter)}
        <TimedButton
          activeLabel="Link copied"
          icon={<ShareIcon color="neutral" />}
          label="Copy Link"
          onClick={handleShareLink}
        />
      </div>
    </div>
  );
};
