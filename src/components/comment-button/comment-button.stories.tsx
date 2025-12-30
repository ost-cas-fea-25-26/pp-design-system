import { CommentButton } from "@/components/comment-button/comment-button";
import { ReplyFilledIcon } from "@/components";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Comment Button",
  component: CommentButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    label: {
      control: "text",
      description: "Button label",
    },
    icon: {
      control: "object",
      description: "Button icon",
    },
  },
} satisfies Meta<typeof CommentButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Comment",
    icon: <ReplyFilledIcon color="primary" />,
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Without Icon",
  },
};
