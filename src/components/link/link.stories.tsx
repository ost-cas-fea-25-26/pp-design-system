import { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./index";

const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    title: {
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
    asChild: false,
    children: "Click me",
    title: "Example Link",
    target: "_blank",
    href: "https://example.com",
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <span>Click me!</span>,
    href: "https://example.com",
    title: "Button Link",
  },
};
