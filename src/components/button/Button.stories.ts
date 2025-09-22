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
      options: ["primary", "secondary", "gradient"],
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
    children: "Primary Button",
    variant: "primary",
    size: "default",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
    children: "Gradient Button",
  },
};
