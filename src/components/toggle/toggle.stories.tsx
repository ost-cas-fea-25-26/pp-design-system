import { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./index";
import { HeartFilledIcon, HeartIcon } from "../icons";

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
    activeChildren: <HeartFilledIcon color="primary" />,
    defaultChildren: <HeartIcon color="primary" />,
    onToggle: (nextState: boolean) => {
      return new Promise<void>((resolve) => {
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
    activeChildren: <HeartFilledIcon color="accent" />,
    defaultChildren: <HeartIcon color="accent" />,
  },
};
export const Active: Story = {
  args: {
    isActive: true,
  },
};
