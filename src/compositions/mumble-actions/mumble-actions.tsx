"use client";

import { FC, ReactNode } from "react";

import {
  HeartFilledIcon,
  HeartIcon,
  ShareIcon,
  TimedButton,
  Toggle,
} from "@/components";

type MumbleActionsProps = {
  deepLink: string;
  likeCounter?: number;
  onLikeToggleHandler?: (nextState: boolean) => Promise<void>;
  liked?: boolean;
  commentButton?: ReactNode;
};

export const MumbleActions: FC<MumbleActionsProps> = ({
  deepLink,
  likeCounter = 0,
  onLikeToggleHandler,
  liked = false,
  commentButton,
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

  const renderLikeToggle = (count: number, liked: boolean) => (
    <Toggle
      defaultChildren={getLikeChildren(count)}
      activeChildren={getLikeChildren(count)}
      onToggle={onLikeToggleHandler}
      variant={liked ? "metric" : "accent"}
      isActive={liked}
    />
  );

  const handleShareLink = async () => {
    await navigator.clipboard.writeText(deepLink);
  };

  return (
    <div className="flex gap-8">
      <span className="inline-flex items-center">{commentButton}</span>
      {renderLikeToggle(likeCounter, liked)}
      <TimedButton
        activeLabel="Link copied"
        icon={<ShareIcon color="neutral" />}
        label="Copy Link"
        onClick={handleShareLink}
      />
    </div>
  );
};
