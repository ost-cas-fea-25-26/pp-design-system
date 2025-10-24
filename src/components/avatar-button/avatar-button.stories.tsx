import { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarButton } from "./index";

const meta = {
  title: "Avatar Button",
  component: AvatarButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AvatarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatarProps: {
      src: "/avatars/rory.jpg",
      alt: "Rory McIlroy",
      fallbackText: "RM",
    },
  },
};
