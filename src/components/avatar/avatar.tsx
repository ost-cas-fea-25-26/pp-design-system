import { FC } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/button";
import { EditIcon } from "@/components/icons";

type AvatarSize = "s" | "m" | "l" | "xl";

export type AvatarProps = {
  size?: AvatarSize;
  border?: boolean;
  src?: string;
  alt: string;
  fallbackText: string;
  editable?: boolean;
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
  src,
  alt,
  fallbackText,
  editable = false,
  onEditClick,
}) => (
  <div className="relative inline-block">
    <AvatarPrimitive.Root
      data-testid="avatar-root"
      className={twMerge(
        "relative flex shrink-0 overflow-hidden rounded-full",
        sizeClassMap[size],
        border && "border-[6px] border-neutral-100",
      )}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="aspect-square size-full object-cover"
      />
      <AvatarPrimitive.Fallback className="bg-primary-100 text-primary flex size-full items-center justify-center rounded-full font-medium">
        {fallbackText}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>

    {editable && (
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
