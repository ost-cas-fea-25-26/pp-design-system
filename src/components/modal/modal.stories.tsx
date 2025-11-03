import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "./modal";
import { Button } from "../button";
import { CancelIcon, CheckmarkIcon } from "../icons";
import { ButtonBar } from "../button-bar";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
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
        <Button variant="neutral" onClick={() => setOpen(true)}>
          Open Modal
        </Button>

        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Settings"
          footer={
            <ButtonBar
              leftButton={
                <Button
                  fullWidth
                  variant="neutral"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                  <CancelIcon color="white" />
                </Button>
              }
              rightButton={
                <Button
                  fullWidth
                  variant="primary"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Save Changes
                  <CheckmarkIcon color="white" />
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
