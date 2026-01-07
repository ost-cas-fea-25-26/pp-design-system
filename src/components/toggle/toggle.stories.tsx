import { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./index";
import {
  HeartFilledIcon,
  HeartIcon,
  ReplyFilledIcon,
  ReplyIcon,
} from "@/components/icons";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isActive: {
      control: "select",
      options: [true, false],
    },
    variant: {
      control: "select",
      options: ["primary", "accent"],
    },
  },
  args: {
    isActive: false,
    variant: "primary",
    defaultChildren: <span className="label-m">Comment</span>,
    activeChildren: <span className="label-m">12 Comments</span>,
    onToggle: (nextState: boolean) => {
      return new Promise<void>((resolve) => {
        // eslint-disable-next-line no-console
        console.log("Toggled to: " + nextState);
        resolve();
      });
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChildren: (
      <span className="inline-flex items-center gap-2">
        <ReplyIcon color="inherit" />
        Comment
      </span>
    ),
    activeChildren: (
      <span className="inline-flex items-center gap-2">
        <ReplyFilledIcon color="inherit" />1 Comment
      </span>
    ),
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    defaultChildren: (
      <span className="inline-flex items-center gap-2">
        <HeartIcon color="inherit" />
        Like
      </span>
    ),
    activeChildren: (
      <span className="inline-flex items-center gap-2">
        <HeartFilledIcon color="inherit" />
        Liked
      </span>
    ),
  },
};

export const Metric: Story = {
  args: {
    variant: "metric",
    defaultChildren: (
      <span className="inline-flex items-center gap-2">
        <HeartFilledIcon color="inherit" />5 Likes
      </span>
    ),
    activeChildren: (
      <span className="inline-flex items-center gap-2">
        <HeartFilledIcon color="inherit" />6 Likes
      </span>
    ),
  },
};
