import { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./index";

const meta = {
  title: "Toggle",
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

export const Default: Story = {};

export const Accent: Story = {
  args: {
    variant: "accent",
    defaultChildren: <span className="label-m">Like</span>,
    activeChildren: <span className="label-m">Liked</span>,
  },
};

export const Metric: Story = {
  args: {
    variant: "metric",
    defaultChildren: <span className="label-m">5 Likes</span>,
    activeChildren: <span className="label-m">6 Likes</span>,
  },
};
