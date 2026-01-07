import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./button";
import { HeartFilledIcon, SettingsIcon } from "@/components/icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "neutral", "light", "gradient"],
    },
    size: {
      control: "select",
      options: ["default", "lg"],
    },
    fullWidth: {
      control: "boolean",
    },
    isCircular: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
    children: { control: "text" },
  },
  args: {
    onClick: fn(),
    children: "Primary Button",
    variant: "primary",
    size: "default",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "Neutral Button",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    children: "Light Button",
  },
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
    children: "Gradient Button",
  },
};

export const WithLabelAndCustomSVG: Story = {
  args: {
    children: (
      <>
        With Label and Custom SVG
        <SettingsIcon color="white" />
      </>
    ),
  },
};

export const Circular: Story = {
  args: {
    isCircular: true,
    children: <HeartFilledIcon color="white" />,
    "aria-label": "Like",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
  render: (args) => (
    <div className="w-sm border border-primary border-dashed rounded-md p-4">
      <Button {...args} />
    </div>
  ),
};
