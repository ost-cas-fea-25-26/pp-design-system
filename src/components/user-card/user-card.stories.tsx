import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserCard } from "./user-card";
import { Button } from "../button";
import { MumbleIcon } from "../icons";

const meta: Meta<typeof UserCard> = {
  title: "Compositions/User Card",
  component: UserCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    handle: { control: "text" },
    avatarSrc: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    name: "Rory McIlroy",
    handle: "rory_goat",
    avatarSrc: "/avatars/rory.jpg",
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
