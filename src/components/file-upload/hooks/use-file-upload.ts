import { useRef } from "react";
import {
  useDropzone,
  DropzoneInputProps,
  DropzoneRootProps,
} from "react-dropzone";

type UseFileUploadProps = {
  file: File | null;
  onFileChange: (file: File | null) => void;
  accept: Record<string, string[]>;
  maxSize: number;
};

type UseFileUploadReturn = {
  file: File | null;
  removeFile: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getRootProps: () => DropzoneRootProps;
  getInputProps: () => DropzoneInputProps;
  isDragActive: boolean;
  openFileDialog: () => void;
  hiddenFileInput: React.RefObject<HTMLInputElement | null>;
  formatSize: (size: number) => string;
};

export const useFileUpload = ({
  file,
  onFileChange,
  accept,
  maxSize,
}: UseFileUploadProps): UseFileUploadReturn => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const applyFile = (incoming: File[]) => {
    onFileChange(incoming[0] ?? null);
  };

  const removeFile = () => {
    onFileChange(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    if (selected.length > 0) {
      applyFile(selected);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: applyFile,
    noClick: true,
    multiple: false,
    accept,
    maxSize,
  });

  const openFileDialog = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const formatSize = (size: number) => {
    if (size >= 1024 * 1024) {
      return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    }
    return `${Math.round(size / 1024)} KB`;
  };

  return {
    file,
    removeFile,
    handleFileChange,
    getRootProps,
    getInputProps,
    isDragActive,
    openFileDialog,
    hiddenFileInput,
    formatSize,
  };
};
