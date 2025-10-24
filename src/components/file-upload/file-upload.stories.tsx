import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FileUpload } from "./file-upload";

const meta: Meta<typeof FileUpload> = {
  title: "File Upload",
  component: FileUpload,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(null);

    return (
      <FileUpload
        file={file}
        onFileChange={setFile}
        title="Drag your file here..."
        description="JPEG or PNG, up to 50 MB"
        selectLabel="... or choose a file"
        removeLabel="Remove file"
      />
    );
  },
};
