import { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./index";
import { ProfileIcon, SettingsIcon, TimeIcon } from "../icons";

const meta = {
  title: "Icon Button",
  component: IconButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "neutral"],
    },
    layout: {
      control: "radio",
      options: ["horizontal", "stacked"],
    },
    label: {
      control: "text",
      description: "Label",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    label: "Username",
    IconComponent: ProfileIcon,
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
    label: "Timestamp",
    IconComponent: TimeIcon,
  },
};

export const Stacked: Story = {
  args: {
    layout: "stacked",
    color: "primary",
    label: "Settings",
    IconComponent: SettingsIcon,
  },
};
