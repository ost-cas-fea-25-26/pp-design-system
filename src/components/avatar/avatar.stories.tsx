import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Avatar } from "./index";

const meta = {
  title: "Components/Avatar",
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
    editable: {
      control: "boolean",
      description: "Shows an edit button at the bottom-right corner",
    },
    onEditClick: {
      action: "edit clicked",
      description: "Triggered when the edit button is clicked",
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

export const Editable: Story = {
  args: {
    editable: true,
    onEditClick: fn(),
    size: "xl",
  },
};
