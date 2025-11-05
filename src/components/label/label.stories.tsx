import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    children: "Email",
    htmlFor: "email",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    children: "Disabled label",
    htmlFor: "disabled-input",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    children: "Email (error)",
    htmlFor: "error-input",
    error: true,
  },
};
