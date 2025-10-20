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
  title: "Icons",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "accent", "neutral", "white", "error"],
      description: "Color variant of the icon",
    },
  },
  args: {
    color: "primary",
  },
} satisfies Meta<typeof SettingsIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-10 justify-center text-center">
      {ICONS.map((Icon, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <Icon {...args} />
          <pre className="text-xs text-gray-500">
            &lt;{Icon.displayName} /&gt;
          </pre>
        </div>
      ))}
    </div>
  ),
};
