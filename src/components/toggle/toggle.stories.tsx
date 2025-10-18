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
    isOn: {
      control: "select",
      options: [true, false],
    },
    onLabel: {
      control: "text",
    },
    offLabel: {
      control: "text",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOn: false,
    onLabel: "Toggle is on",
    onIcon: <HeartFilledIcon />,
    offLabel: "Toggle is off",
    offIcon: <HeartIcon />,
    toggleHandler: (nextState: boolean) => {
      return new Promise<void>((resolve) => {
        // eslint-disable-next-line no-alert
        alert("Toggled to:" + nextState);
        resolve();
      });
    },
  },
};
