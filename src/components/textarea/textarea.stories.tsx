import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";
import { MumbleIcon } from "../icons";

const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text...",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "Some example text here...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Type your message...",
    icon: <MumbleIcon color="neutral" />,
  },
};

export const LongText: Story = {
  args: {
    defaultValue:
      "This is a longer piece of text to demonstrate how the textarea grows and wraps across multiple lines. You can keep typing and see how it behaves.",
  },
};
