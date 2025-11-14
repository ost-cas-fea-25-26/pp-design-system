import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { EditIcon } from "@/components/icons";

type ProfileBannerProps = {
  onClick?: () => void;
  children: ReactNode;
  ariaLabel?: string;
};

export const ProfileBanner: FC<ProfileBannerProps> = ({
  onClick,
  children,
  ariaLabel = "Edit image",
}) => (
  <button
    aria-label={ariaLabel}
    onClick={onClick}
    disabled={!onClick}
    className={twMerge(
      "relative w-full max-w-[680px] aspect-video overflow-hidden rounded-2xl",
      onClick && "group cursor-pointer",
    )}
  >
    {children}

    {onClick && (
      <>
        <div className="absolute inset-0 bg-violet-600/40 opacity-0 group-hover:opacity-100 transition duration-200" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
          <EditIcon color="white" size="l" />
        </div>
      </>
    )}
  </button>
);
