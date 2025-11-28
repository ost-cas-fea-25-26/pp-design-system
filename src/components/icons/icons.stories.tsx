import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  SettingsIcon,
  UploadIcon,
  HeartIcon,
  HeartFilledIcon,
  ReplyIcon,
  ReplyFilledIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MumbleIcon,
  ProfileIcon,
  CalendarIcon,
  CancelIcon,
  CheckmarkIcon,
  EditIcon,
  EyeIcon,
  FullscreenIcon,
  LocationIcon,
  LogoutIcon,
  RepostIcon,
  SendIcon,
  ShareIcon,
  TimeIcon,
} from "./icons";

const ICONS = [
  SettingsIcon,
  UploadIcon,
  HeartIcon,
  HeartFilledIcon,
  ReplyIcon,
  ReplyFilledIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MumbleIcon,
  ProfileIcon,
  CalendarIcon,
  CancelIcon,
  CheckmarkIcon,
  EditIcon,
  EyeIcon,
  FullscreenIcon,
  LocationIcon,
  LogoutIcon,
  RepostIcon,
  SendIcon,
  ShareIcon,
  TimeIcon,
];

const meta = {
  title: "Components/Icons",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "accent", "neutral", "white", "error", "inherit"],
      description: "Color variant of the icon",
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
  },
  args: {
    color: "primary",
    size: "m",
  },
} satisfies Meta<typeof SettingsIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-8 w-full max-w-5xl mx-auto">
      {ICONS.map((Icon) => (
        <div
          key={Icon.displayName}
          className="flex flex-col items-center gap-2"
        >
          <Icon {...args} />
          <pre className="text-xs text-gray-500 text-center whitespace-nowrap">
            &lt;{Icon.displayName} /&gt;
          </pre>
        </div>
      ))}
    </div>
  ),
};
