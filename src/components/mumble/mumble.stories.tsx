import { Meta, StoryObj } from "@storybook/react-vite";
import { Mumble } from "./index";
import { Link } from "../link";
import { MumbleActions } from "../mumble-actions";

const meta: Meta<typeof Mumble> = {
  title: "Compositions/Mumble",
  component: Mumble,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["m", "l"],
    },
    userName: { control: "text" },
    userHandle: { control: "text" },
    avatarSrc: { control: "text" },
    timestamp: { control: "text" },
  },
  args: {
    size: "m",
    userName: "Rory McIlroy",
    userHandle: "rory_goat",
    avatarSrc: "/avatars/rory.jpg",
    timestamp: "2h ago",
    actions: (
      <MumbleActions
        deepLink="https://mumble.com/mumbles/123456"
        commentCounter={30}
        likeCounter={6}
        liked
      />
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Mumble
        {...args}
        content={
          <p>
            Just finished an amazing round at{" "}
            <Link asChild={false} title="Augusta" href="#">
              Augusta
            </Link>
            ! The course was in perfect condition, and I managed to sink a few
            long putts. Can't wait for the next tournament!{" "}
            <Link asChild={false} children="#pga" title="PGA" href="#" />{" "}
          </p>
        }
      />
    );
  },
};
