import { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./index";
import { LogoutIcon, ProfileIcon, SettingsIcon, TimeIcon } from "../icons";

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
    animation: {
      control: "radio",
      options: ["none", "rotate", "move"],
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

export const Settings: Story = {
  args: {
    layout: "stacked",
    color: "primary",
    label: "Settings",
    IconComponent: SettingsIcon,
    animation: "rotate",
  },
};

export const Logout: Story = {
  args: {
    layout: "stacked",
    color: "primary",
    label: "Logout",
    IconComponent: LogoutIcon,
    animation: "move",
  },
};
