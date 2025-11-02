import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonBar } from "./button-bar";
import { Button } from "../button";
import { CancelIcon, CheckmarkIcon } from "../icons";

const meta: Meta<typeof ButtonBar> = {
  title: "Components/Button Bar",
  component: ButtonBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    leftButton: { control: false },
    rightButton: { control: false },
  },
  args: {
    leftButton: (
      <Button variant="neutral" fullWidth>
        Cancel
        <CancelIcon color="white" />
      </Button>
    ),
    rightButton: (
      <Button variant="primary" fullWidth>
        Save
        <CheckmarkIcon color="white" />
      </Button>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-sm border border-primary/40 border-dashed rounded-md p-4">
      <ButtonBar {...args} />
    </div>
  ),
};
