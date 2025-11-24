import { FC } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/button";
import { EditIcon } from "@/components/icons";

type AvatarSize = "s" | "m" | "l" | "xl";

export type AvatarProps = {
  size?: AvatarSize;
  border?: boolean;
  imageElement?: React.ReactNode;
  fallbackText: string;
  onEditClick?: () => void;
};

const sizeClassMap: Record<AvatarSize, string> = {
  s: "w-10 h-10",
  m: "w-16 h-16",
  l: "w-24 h-24",
  xl: "w-40 h-40",
};

export const Avatar: FC<AvatarProps> = ({
  size = "m",
  border = false,
  imageElement,
  fallbackText,
  onEditClick,
}) => (
  <div className="relative inline-block">
    wixoooo
    <AvatarPrimitive.Root
      data-testid="avatar-root"
      className={twMerge(
        "relative flex shrink-0 overflow-hidden rounded-full",
        sizeClassMap[size],
        "max-w-24 max-h-24 sm:max-w-none sm:max-h-none",
        border && "border-[6px] border-neutral-100",
      )}
    >
      {imageElement && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {imageElement}
        </div>
      )}

      <AvatarPrimitive.Fallback className="bg-primary-100 text-primary flex size-full items-center justify-center rounded-full font-medium">
        {fallbackText}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>

    {onEditClick && (
      <div className="absolute bottom-0 right-0">
        <Button
          variant="neutral"
          size="default"
          isCircular
          onClick={onEditClick}
          aria-label="Edit Avatar"
        >
          <EditIcon color="white" />
        </Button>
      </div>
    )}
  </div>
);
