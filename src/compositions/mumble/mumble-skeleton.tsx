import { FC } from "react";
import Skeleton from "react-loading-skeleton";

export const MumbleSkeleton: FC = () => {
  return (
    <div className="relative bg-white rounded-2xl pt-1 pb-8 shadow-sm hover:outline-neutral-200 hover:outline-2 pl-12 pr-12">
      <div className="absolute top-4 -left-8 z-10">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <div className="relative inline-block">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16 max-w-24 max-h-24 sm:max-w-none sm:max-h-none">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Skeleton circle={true} height={64} width={64} />
              </div>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="label-xl text-neutral-900">
              <Skeleton width={120} />
            </span>
            <div className="flex gap-4 pt-2">
              <a href="/users/rory_goat">
                <button className="text-sm cursor-pointer flex justify-center items-center transition-colors transition-default group focus-ring-primary text-primary-600 hover:text-primary-900 flex-row">
                  <Skeleton width={80} />
                </button>
              </a>
              <button className="text-sm cursor-pointer flex justify-center items-center transition-colors transition-default group focus-ring-neutral text-neutral-500 hover:text-neutral-700 flex-row">
                <span className="ml-1">
                  <Skeleton width={60} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-25">
        <div className="paragraph-lg">
          <p>
            <Skeleton count={5} />
          </p>
        </div>
        <div className="flex items-center justify-start -ml-4 mt-5">
          <div>
            <div className="flex gap-8">
              <button
                type="button"
                aria-pressed="false"
                data-state="off"
                className="label-m inline-flex px-4 py-2 cursor-pointer rounded-2xl"
              >
                <span className="inline-flex items-center gap-2">
                  <Skeleton width={100} />
                </span>
              </button>
              <button
                type="button"
                aria-pressed="false"
                data-state="off"
                className="label-m inline-flex px-4 py-2 cursor-pointer rounded-2xl"
              >
                <span className="inline-flex items-center gap-2">
                  <Skeleton width={90} />
                </span>
              </button>
              <button className="focus-ring-neutral inline-flex items-center px-4 py-2 cursor-pointer rounded-2xl">
                <span className="mr-2"></span>
                <span className="relative flex justify-center items-center">
                  <span className="transition-opacity transition-default block text-center whitespace-nowrap opacity-100">
                    <Skeleton width={90} />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
