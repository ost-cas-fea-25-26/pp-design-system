import { Meta, StoryObj } from "@storybook/react-vite";
import { MumbleActions } from "./mumble-actions";
import { CommentButton, ReplyFilledIcon, ReplyIcon } from "@/components";

const meta: Meta<typeof MumbleActions> = {
  title: "Compositions/Mumble Actions",
  component: MumbleActions,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    deepLink: { control: "text" },
    likeCounter: { control: "number" },
    liked: { control: "boolean" },
    commentButton: { control: false },
  },
  args: {
    deepLink: "https://mumble.com/mumbles/123456",
    likeCounter: 0,
    onLikeToggleHandler: (nextState: boolean) => {
      return new Promise<void>((resolve) => {
        // eslint-disable-next-line no-console
        console.log("Like toggled to: " + nextState);
        resolve();
      });
    },
    liked: false,
    commentButton: (
      <CommentButton label="0 Comments" icon={<ReplyIcon color="neutral" />} />
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithCommentsAndLikes: Story = {
  args: {
    commentButton: (
      <CommentButton
        label="12 Comments"
        icon={<ReplyFilledIcon color="primary" />}
      />
    ),
    likeCounter: 5,
  },
};
export const Liked: Story = {
  args: {
    liked: true,
    likeCounter: 6,
  },
};
