import { Meta, StoryObj } from "@storybook/react-vite";
import { TimedButton } from "./index";
import { ShareIcon } from "../icons";

const meta = {
  title: "Timed Button",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  component: TimedButton,
  argTypes: {},
} satisfies Meta<typeof TimedButton>;
export default meta;

type Story = StoryObj<typeof meta>;

const demoClickHandler = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.info("Action performed");
      resolve();
    }, 1000);
  });
};

export const Default: Story = {
  render: (args) => (
    <TimedButton
      initialContent={
        <span>
          <ShareIcon />
          Click me
        </span>
      }
      completedContent={
        <span>
          <ShareIcon />
          Clicked!
        </span>
      }
      onClick={demoClickHandler}
    />
  ),
};
