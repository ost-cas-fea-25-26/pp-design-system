import { FC, ReactNode } from "react";
import { EditIcon } from "@/components/icons";

type EditableImageWrapperProps = {
  onClick?: () => void;
  children: ReactNode;
  ariaLabel?: string;
};

export const EditableImageWrapper: FC<EditableImageWrapperProps> = ({
  onClick,
  children,
  ariaLabel = "Edit image",
}) => (
  <button
    aria-label={ariaLabel}
    onClick={onClick}
    className="relative group w-[680px] h-80 overflow-hidden rounded-2xl cursor-pointer"
  >
    {children}

    <div className="absolute inset-0 bg-violet-600/40 opacity-0 group-hover:opacity-100 transition duration-200" />

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
      <EditIcon color="white" size="l" />
    </div>
  </button>
);
