import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { fn } from "storybook/test";
import { UploadImageModal } from "./upload-image-modal";
import { Button } from "@/components/button";

const meta: Meta<typeof UploadImageModal> = {
  title: "Compositions/Upload Image Modal",
  component: UploadImageModal,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="neutral" onClick={() => setOpen(true)}>
          Open Upload Modal
        </Button>

        <UploadImageModal open={open} onOpenChange={setOpen} onSave={fn()} />
      </>
    );
  },
};
