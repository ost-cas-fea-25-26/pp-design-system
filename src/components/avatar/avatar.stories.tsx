import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./index";

const meta = {
  title: "Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m", "l", "xl"],
      description: "Avatar size",
    },
    border: {
      control: "boolean",
      description: "Adds a border around the avatar",
    },
    src: {
      control: "text",
      description: "Image source URL",
    },
    alt: {
      control: "text",
      description: "Alternative text for the image",
    },
    fallbackText: {
      control: "text",
      description: "Text (e.g. initials) shown when no image is loaded",
    },
  },
  args: {
    size: "m",
    border: false,
    src: "/avatars/rory.jpg",
    alt: "Rory McIlroy",
    fallbackText: "RM",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FallbackOnly: Story = {
  args: {
    src: "",
    fallbackText: "RM",
  },
};

export const WithBorder: Story = {
  args: {
    border: true,
  },
};

export const XL: Story = {
  args: {
    size: "xl",
  },
};
