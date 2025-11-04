import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "Compositions/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userAvatar: "/avatars/rory.jpg",
    userFallback: "RM",
    onAvatarClick: fn(),
    onSettingsClick: fn(),
    onLogoutClick: fn(),
    logoHref: "/iframe.html?id=compositions-header--default&viewMode=story",
  },
};
