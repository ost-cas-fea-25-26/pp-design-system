import { FC } from "react";
import {
  ShimmerBadge,
  ShimmerCircularImage,
  ShimmerText,
  ShimmerTitle,
} from "react-shimmer-effects";

export const MumbleSkeleton: FC = () => {
  return (
    <div className="relative bg-white rounded-2xl pt-1 pb-1 shadow-sm pl-12 pr-12">
      <div className="absolute top-4 -left-8 z-10">
        <div className="flex items-center gap-4">
          <span className="relative flex">
            <ShimmerCircularImage size={64} />
          </span>
          <div className={"w-64"}>
            <ShimmerTitle line={1} />
            <div className={"mt-4"}>
              <ShimmerText line={1} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-25">
        <ShimmerText line={5} gap={10} />
        <div className="flex justify-start mt-5">
          <div className={"mb-0"}>
            <div className="flex gap-8">
              <span className="inline-flex items-center gap-2">
                <ShimmerBadge width={80} />
              </span>
              <span className="inline-flex items-center gap-2">
                <ShimmerBadge width={90} />
              </span>
              <span className="relative flex justify-center items-center">
                <span className="transition-opacity transition-default block text-center whitespace-nowrap opacity-100">
                  <ShimmerBadge width={90} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
