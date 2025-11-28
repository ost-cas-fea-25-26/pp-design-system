import { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarButton } from "./index";

const meta = {
  title: "Components/Avatar Button",
  component: AvatarButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AvatarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallbackText: "RM",
    imageElement: (
      <img
        src="/avatars/rory.jpg"
        alt="Rory McIlroy"
        className="w-full h-full object-cover"
      />
    ),
  },

  render: (args) => (
    <a href="/profile">
      <AvatarButton {...args} />
    </a>
  ),
};
