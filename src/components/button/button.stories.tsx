import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./button";
import { HeartFilledIcon, SettingsIcon } from "../icons";

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

export const OnlyWithCustomSVG: Story = {
  args: {
    className: "rounded-full p-4",
    children: <HeartFilledIcon color="white" />,
  },
};
