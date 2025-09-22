import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "gradient"],
    },
    size: {
      control: "select",
      options: ["default", "lg"],
    },
    onClick: { action: "clicked" },
    children: { control: "text" },
  },
  args: {
    onClick: fn(),
    children: "Button",
    variant: "default",
    size: "default",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};
