import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionButtons } from "./action-buttons";
import { Button } from "../button";
import { HeartFilledIcon, SettingsIcon } from "../icons";

const meta: Meta<typeof ActionButtons> = {
  title: "Action Buttons",
  component: ActionButtons,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    leftButton: { control: false },
    rightButton: { control: false },
  },
  args: {
    leftButton: (
      <Button variant="secondary" fullWidth>
        Cancel
        <HeartFilledIcon color="white" />
      </Button>
    ),
    rightButton: (
      <Button variant="primary" fullWidth>
        Save
        <SettingsIcon color="white" />
      </Button>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-sm border border-primary border-dashed rounded-md p-4">
      <ActionButtons {...args} />
    </div>
  ),
};
