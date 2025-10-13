import { Meta, StoryObj } from "@storybook/react-vite";
import { TimedButton } from "./index";
import { HeartIcon } from "../icons";

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
    label: "Please like me",
    activeLabel: "I like you, too",
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
          // eslint-disable-next-line no-alert
          alert("Action performed");
          resolve();
        }, 1000);
      });
    };

    return (
      <TimedButton
        label={args.label}
        activeLabel={args.activeLabel}
        duration={args.duration}
        icon={<HeartIcon color="secondary" />}
        onClick={clickHandler}
      />
    );
  },
};
