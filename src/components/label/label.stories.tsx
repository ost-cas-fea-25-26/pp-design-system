import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "Label",
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

export const Password: Story = {
  args: {
    children: "Password",
    htmlFor: "password",
  },
};
