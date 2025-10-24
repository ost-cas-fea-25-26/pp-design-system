import { FC } from "react";
import { Dropzone } from "./components/dropzone";
import { UploadedFile } from "./components/uploaded-file";
import { UploadButton } from "./components/upload-button";
import { useFileUpload } from "./hooks/use-file-upload";

type FileUploadProps = {
  file: File | null;
  onFileChange: (file: File | null) => void;
  accept?: Record<string, string[]>;
  maxSize?: number;
  title: string;
  description: string;
  selectLabel: string;
  removeLabel: string;
  "aria-invalid"?: boolean | "true" | "false";
};

export const FileUpload: FC<FileUploadProps> = ({
  file,
  onFileChange,
  accept = { "image/jpeg": [], "image/png": [] },
  maxSize = 50 * 1024 * 1024,
  title,
  description,
  selectLabel,
  removeLabel,
  ...props
}) => {
  const {
    removeFile,
    handleFileChange,
    getRootProps,
    getInputProps,
    isDragActive,
    openFileDialog,
    hiddenFileInput,
    formatSize,
  } = useFileUpload({ file, onFileChange, accept, maxSize });

  const isInvalid =
    props["aria-invalid"] === true || props["aria-invalid"] === "true";

  return (
    <div className="flex flex-col gap-4 w-full sm:min-w-sm">
      <input
        type="file"
        accept={Object.keys(accept).join(",")}
        className="hidden"
        ref={hiddenFileInput}
        onChange={handleFileChange}
      />

      <Dropzone
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
        title={title}
        description={description}
        isInvalid={isInvalid}
      />

      <UploadedFile
        file={file}
        formatSize={formatSize}
        onRemove={removeFile}
        removeLabel={removeLabel}
      />

      <UploadButton label={selectLabel} onClick={openFileDialog} />
    </div>
  );
};
