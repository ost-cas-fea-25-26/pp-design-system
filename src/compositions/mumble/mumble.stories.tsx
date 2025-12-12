import { Meta, StoryObj } from "@storybook/react-vite";
import { Mumble } from "./index";
import { Link } from "@/components";
import { MumbleActions } from "@/compositions/mumble-actions";

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
    profileUrl: { control: "text" },
    avatar: { control: false },
    timestamp: { control: "text" },
  },
  args: {
    size: "m",
    userName: "Rory McIlroy",
    userHandle: "rory_goat",
    profileUrl: "/users/rory_goat",
    timestamp: "2h ago",
    avatar: (
      <a href="/users/rory_goat" title="View profile">
        <img
          src="/avatars/rory.jpg"
          alt="Rory McIlroy"
          className="object-cover w-full h-full"
        />
      </a>
    ),
    actions: (
      <MumbleActions
        deepLink="https://mumble.com/mumbles/123456"
        commentCounter={30}
        likeCounter={6}
        liked={false}
      />
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="border border-neutral/40 border-dashed rounded-md p-10 bg-neutral/5">
        <Mumble
          {...args}
          content={
            <p>
              Just finished an amazing round at{" "}
              <Link asChild={false} title="Augusta" href="#">
                Augusta
              </Link>
              ! The course was in perfect condition, and I managed to sink a few
              long putts. Can not wait for the next tournament!{" "}
              <Link asChild={false} title="PGA" href="#">
                #PGA
              </Link>
            </p>
          }
        />
      </div>
    );
  },
};
