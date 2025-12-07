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
    avatarSrc: { control: "text" },
    timestamp: { control: "text" },
    hideBorder: { control: "boolean" },
    showUserInline: { control: "boolean" },
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
        liked={false}
      />
    ),
    hideBorder: false,
    showUserInline: false,
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
