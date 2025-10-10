import { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./index";

const meta = {
  title: "Link",
  component: Link,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    label: {
      control: "text",
      description: "Link label",
    },
    href: {
      control: "text",
      description: "Link href",
    },
    target: {
      control: "select",
      description: "Link target",
      options: ["_self", "_blank"],
    },
  },
} satisfies Meta<typeof Link>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click me",
    href: "https://example.com",
  },
};
