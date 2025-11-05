import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";
import { MumbleIcon } from "../icons";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "you@example.com",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "••••••••",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Type something...",
    icon: <MumbleIcon color="neutral" />,
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "John Doe",
    placeholder: "Enter your name...",
  },
};
