import { MumbleDetailView } from "@/compositions/mumble-detail-view/mumble-detail-view";
import { Meta, StoryObj } from "@storybook/react-vite";
import { MumbleActions, MumbleProps } from "@/compositions";
import {
  CommentButton,
  IconButton,
  ProfileIcon,
  ReplyFilledIcon,
} from "@/components";
import { fn } from "storybook/test";

const reply: MumbleProps = {
  id: "reply-1",
  size: "l",
  content: "This is a reply",
  userName: "Tommy Fleetwood",
  userHandle: "tommy",
  profileUrl: "/avatars/tommy.png",
  timestamp: "30m ago",
  actions: (
    <MumbleActions
      deepLink="https://mumble.com/mumbles/123456"
      likeCounter={1}
      liked={true}
    />
  ),
  avatar: (
    <img
      src="/avatars/tommy.png"
      alt="Tommy Fleetwood"
      className="object-cover w-full h-full"
    />
  ),
};

const meta: Meta<typeof MumbleDetailView> = {
  title: "Compositions/Mumble Detail View",
  component: MumbleDetailView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    mumble: {
      id: "mumble-1",
      size: "l",
      content: "lorem ipsum",
      userName: "Rory McIlroy",
      userHandle: "rory_goat",
      profileUrl: "/avatars/rory.jpg",
      timestamp: "2h ago",
      avatar: (
        <img
          src="/avatars/rory.jpg"
          alt="Rory McIlroy"
          className="object-cover w-full h-full"
        />
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
    },
    user: {
      size: "s",
      name: "Tommy Fleetwood",
      handle: "tommy",
      showAvatar: true,
      avatarImageElement: (
        <img
          src="/avatars/tommy.png"
          alt="Tommy Fleetwood"
          className="object-cover w-full h-full"
        />
      ),
      iconButtons: (
        <IconButton
          IconComponent={ProfileIcon}
          color="primary"
          label="tommy"
          layout="horizontal"
        />
      ),
    },
    replyForm: {
      placeholder: "Write your reply...",
      submitButtonText: "Send Reply",
      uploadButtonText: "Upload Image",
      errorMessage: "Field is required",
      onSubmitHandler: fn(),
    },
    replies: [reply, reply, reply],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="p-12 bg-slate-100 rounded">
      <MumbleDetailView {...args} />
    </div>
  ),
};

export const WithoutReplies: Story = {
  args: {
    replies: [],
  },
  render: (args) => (
    <div className="p-12 bg-slate-100 rounded">
      <MumbleDetailView {...args} />
    </div>
  ),
};
