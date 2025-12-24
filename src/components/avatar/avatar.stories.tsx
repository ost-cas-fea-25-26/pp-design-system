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
    imageElement: {
      control: false,
      description: "Custom image ReactNode (e.g. <img> or Next <Image />)",
    },
    fallbackText: {
      control: "text",
      description: "Text (e.g. initials) shown when no image is loaded",
    },
    onEditClick: {
      action: "edit clicked",
      description: "Triggered when the edit button is clicked",
    },
  },
  args: {
    size: "m",
    border: false,
    fallbackText: "RM",
    imageElement: (
      <img
        src="/avatars/rory.jpg"
        alt="Rory McIlroy"
        className="object-cover w-full h-full"
      />
    ),

    onEditClick: undefined,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FallbackOnly: Story = {
  args: {
    imageElement: null,
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
    onEditClick: fn(),
    size: "xl",
  },
};
