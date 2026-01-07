import { FC } from "react";
import { CancelIcon } from "@/components/icons";

type UploadedFileProps = {
  file: File | null;
  formatSize: (size: number) => string;
  onRemove: () => void;
  removeLabel: string;
};

export const UploadedFile: FC<UploadedFileProps> = ({
  file,
  formatSize,
  onRemove,
  removeLabel,
}) => {
  if (!file) {
    return null;
  }

  const isImage = file.type.startsWith("image/");
  const previewUrl = isImage ? URL.createObjectURL(file) : null;

  return (
    <div className="flex items-center justify-between rounded-lg border border-dashed border-neutral-200 bg-neutral-100 text-neutral-500 p-3">
      <div className="flex items-center gap-4 truncate">
        {isImage && (
          <img
            src={previewUrl!}
            alt={file.name}
            className="size-14 rounded object-cover border border-neutral-200"
          />
        )}
        <div className="truncate">
          <span className="label-m">{file.name}</span>{" "}
          <span className="text-neutral-400 text-sm">
            ({formatSize(file.size)})
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="ml-3 text-neutral-400 hover:text-neutral-600 transition cursor-pointer rounded focus-ring-neutral"
        aria-label={removeLabel}
      >
        <CancelIcon color="neutral" />
      </button>
    </div>
  );
};
