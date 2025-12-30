import { Meta, StoryObj } from "@storybook/react-vite";
import { Mumble, MumbleSkeleton } from "./index";
import { CommentButton, Link, ReplyFilledIcon } from "@/components";
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
    hideBorder: { control: "boolean" },
    showUserInline: { control: "boolean" },
  },
  args: {
    id: "mumb13",
    size: "l",
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
        commentButton={
          <CommentButton
            label="30 Comments"
            icon={<ReplyFilledIcon color="primary" />}
          />
        }
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

export const Inline: Story = {
  args: {
    size: "m",
    showUserInline: true,
    hideBorder: true,
  },
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
          mediaElement={
            <img
              src="/headers/rory-mcilroy.jpg"
              alt="Rory McIlroy absolutely nuking a fucking perfect driver"
              className="object-cover w-full h-full"
            />
          }
        />
      </div>
    );
  },
};

export const WithMedia: Story = {
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
          mediaElement={
            <img
              src="/headers/rory-mcilroy.jpg"
              alt="Rory McIlroy absolutely nuking a fucking perfect driver"
              className="object-cover w-full h-full"
            />
          }
        />
      </div>
    );
  },
};

type SkeletonStory = StoryObj<typeof MumbleSkeleton>;
export const Skeleton: SkeletonStory = {
  render: () => {
    return (
      <div className="border border-neutral/40 border-dashed rounded-md p-10 bg-neutral/5">
        <MumbleSkeleton />
      </div>
    );
  },
};
