import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "./modal";
import { Button } from "../button";
import { HeartFilledIcon, SettingsIcon } from "../icons";
import { ActionButtons } from "../action-buttons";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
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
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>

        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Settings"
          footer={
            <ActionButtons
              leftButton={
                <Button
                  fullWidth
                  variant="secondary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                  <HeartFilledIcon color="white" />
                </Button>
              }
              rightButton={
                <Button
                  fullWidth
                  variant="primary"
                  onClick={() => {
                    alert("Settings saved! ⚙️");
                    setOpen(false);
                  }}
                >
                  Save Changes
                  <SettingsIcon color="white" />
                </Button>
              }
            />
          }
        >
          <p>This is a modal. You can put any content you like here.</p>
        </Modal>
      </>
    );
  },
};
