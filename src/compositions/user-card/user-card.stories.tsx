import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserCard } from "./user-card";
import { Button } from "../../components/button";
import { MumbleIcon } from "../../components/icons";

const meta: Meta<typeof UserCard> = {
  title: "Compositions/User Card",
  component: UserCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    handle: { control: "text" },
    avatarImageElement: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    name: "Rory McIlroy",
    handle: "rory_goat",
    avatarImageElement: (
      <img
        src="/avatars/rory.jpg"
        alt="Rory McIlroy"
        className="object-cover w-full h-full"
      />
    ),
    button: (
      <Button variant="primary" fullWidth>
        Follow
        <MumbleIcon color="white" />
      </Button>
    ),
  },
  render: (args) => (
    <div className="bg-primary-100 p-4 border border-primary/40 border-dashed">
      <UserCard {...args} />
    </div>
  ),
};
