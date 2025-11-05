import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";
import { UploadIcon } from "../../icons";

type DropzoneProps = {
  getRootProps: () => DropzoneRootProps;
  getInputProps: () => DropzoneInputProps;
  isDragActive: boolean;
  title: string;
  description: string;
  isInvalid?: boolean;
};

export const Dropzone: FC<DropzoneProps> = ({
  getRootProps,
  getInputProps,
  isDragActive,
  title,
  description,
  isInvalid = false,
}) => (
  <div
    {...getRootProps()}
    className={twMerge(
      "flex flex-col items-center justify-center rounded-lg border border-dashed text-center h-[194px] p-4 bg-neutral-100 focus-ring-neutral outline-none",
      isInvalid ? "border-error" : "border-neutral-200",
      isDragActive && !isInvalid && "border-primary-500 bg-primary-50",
    )}
  >
    <input {...getInputProps()} />

    <div className="flex flex-col items-center text-neutral-500">
      <UploadIcon size="l" color="inherit" />
      <p className="label-xl text-neutral-500 mt-3">{title}</p>
    </div>

    <p className="paragraph text-neutral-400 mt-4">{description}</p>
  </div>
);
