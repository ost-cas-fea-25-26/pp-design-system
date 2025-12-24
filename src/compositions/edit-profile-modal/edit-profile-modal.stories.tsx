import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { fn } from "storybook/test";

import { EditProfileModal } from "@/compositions";
import { Button } from "@/components/button";

const meta: Meta<typeof EditProfileModal> = {
  title: "Compositions/Edit Profile Modal",
  component: EditProfileModal,
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
          Open Edit Profile Modal
        </Button>

        <EditProfileModal open={open} onOpenChange={setOpen} onSave={fn()} />
      </>
    );
  },
};
