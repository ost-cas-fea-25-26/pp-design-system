import { FC } from "react";
import Skeleton from "react-loading-skeleton";

export const ProfileHeaderSkeleton: FC = () => {
  return (
    <div className="w-full max-w-[680px]">
      <div className="relative mb-4">
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
          <Skeleton height="100%" />
        </div>

        <div className="absolute bottom-0 right-6 translate-y-1/2 sm:absolute max-sm:static max-sm:translate-y-0 max-sm:-mt-8 max-sm:flex max-sm:justify-end">
          <div className="relative">
            <Skeleton circle width={96} height={96} />
          </div>
        </div>
      </div>

      <div className="grid items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="heading-3 text-neutral-900">
            <Skeleton width={180} />
          </span>
          <Skeleton width={28} height={28} />
        </div>

        <div className="flex gap-4 pt-2">
          <Skeleton width={110} />
          <Skeleton width={90} />
          <Skeleton width={130} />
        </div>
      </div>

      <p className="paragraph text-neutral-500 mt-4">
        <Skeleton count={3} />
      </p>
    </div>
  );
};
