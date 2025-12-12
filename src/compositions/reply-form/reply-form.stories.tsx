import { Meta, StoryObj } from "@storybook/react-vite";
import { ReplyForm } from "@/compositions/reply-form/reply-form";
import { fn } from "storybook/test";

const meta: Meta<typeof ReplyForm> = {
  title: "Compositions/Reply Form",
  component: ReplyForm,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
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
