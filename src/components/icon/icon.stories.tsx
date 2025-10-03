import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomIcon } from "./icon";

const meta: Meta<typeof CustomIcon> = {
  title: "CustomIcon",
  component: CustomIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    name: {
      control: "select",
      options: [
        "settings",
        "upload",
        "heart",
        "heartFilled",
        "reply",
        "replyFilled",
      ],
    },
  },
  args: {
    name: "settings",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "upload",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    name: "settings",
    color: "secondary",
  },
};

export const Accent: Story = {
  args: {
    name: "settings",
    color: "accent",
  },
};
