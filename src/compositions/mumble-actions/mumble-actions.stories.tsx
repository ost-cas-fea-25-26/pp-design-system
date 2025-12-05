import { Meta, StoryObj } from "@storybook/react-vite";
import { MumbleActions } from "./mumble-actions";

const meta: Meta<typeof MumbleActions> = {
  title: "Compositions/Mumble Actions",
  component: MumbleActions,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    deepLink: { control: "text" },
    commentCounter: { control: "number" },
    likeCounter: { control: "number" },
    liked: { control: "boolean" },
  },
  args: {
    deepLink: "https://mumble.com/mumbles/123456",
    commentCounter: 0,
    likeCounter: 0,
    onCommentToggleHandler: (nextState: boolean) => {
      return new Promise<void>((resolve) => {
        // eslint-disable-next-line no-console
        console.log("Comment toggled to: " + nextState);
        resolve();
      });
    },
    onLikeToggleHandler: (nextState: boolean) => {
      return new Promise<void>((resolve) => {
        // eslint-disable-next-line no-console
        console.log("Like toggled to: " + nextState);
        resolve();
      });
    },
    liked: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithCommentsAndLikes: Story = {
  args: {
    commentCounter: 12,
    likeCounter: 5,
  },
};
export const Liked: Story = {
  args: {
    liked: true,
    likeCounter: 6,
  },
};
