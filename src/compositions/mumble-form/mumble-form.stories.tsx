import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { MumbleForm } from "@/compositions";

const meta: Meta<typeof MumbleForm> = {
  title: "Compositions/Reply Form",
  component: MumbleForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    formTitle: { control: "text" },
    placeholder: { control: "text" },
    submitButtonText: { control: "text" },
    uploadButtonText: { control: "text" },
    errorMessage: { control: "text" },
  },
  args: {
    placeholder: "Write your reply...",
    submitButtonText: "Send Reply",
    uploadButtonText: "Upload Image",
    errorMessage: "Content is required",
    onSubmitHandler: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithTitle: Story = {
  args: {
    formTitle: "What's on your mind today?",
  },
};
