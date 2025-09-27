import { FC } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";

type AvatarSize = "s" | "m" | "l" | "xl";

type AvatarProps = {
  size?: AvatarSize;
  border?: boolean;
  src?: string;
  alt: string;
  fallbackText: string;
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
}) => (
  <AvatarPrimitive.Root
    className={twMerge(
      "relative flex shrink-0 overflow-hidden rounded-full",
      sizeClassMap[size],
      border && "border-[6px] border-current",
    )}
  >
    <AvatarPrimitive.Image
      src={src}
      alt={alt}
      className="aspect-square size-full"
    />
    <AvatarPrimitive.Fallback className="bg-muted flex size-full items-center justify-center rounded-full">
      {fallbackText}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
);
