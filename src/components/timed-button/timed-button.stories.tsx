import { Meta, StoryObj } from "@storybook/react-vite";
import { TimedButton } from "./index";
import { HeartIcon, ShareIcon } from "../icons";

const meta = {
  title: "Timed Button",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  component: TimedButton,
  argTypes: {
    label: { control: "text" },
    activeLabel: { control: "text" },
    duration: { control: "number" },
  },
  args: {
    label: "Copy Link",
    activeLabel: "Link copied",
    duration: 5000,
  },
} satisfies Meta<typeof TimedButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const clickHandler = () => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.info("copied link to clipboard!");
          resolve();
        }, 1000);
      });
    };

    return (
      <TimedButton
        label={args.label}
        activeLabel={args.activeLabel}
        duration={args.duration}
        icon={<ShareIcon color="neutral" />}
        onClick={clickHandler}
      />
    );
  },
};
