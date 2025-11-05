import { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "@/components/icon-button";
import {
  ProfileIcon,
  SettingsIcon,
  TimeIcon,
  LocationIcon,
} from "@/components/icons";

import { Link } from "@/components/link";
import { UserInfo } from "./index";

const meta: Meta<typeof UserInfo> = {
  title: "Compositions/User Info",
  component: UserInfo,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["s", "m", "l", "xl"] },
    name: { control: "text" },
    handle: { control: "text" },
    avatarSrc: { control: "text" },
    showAvatar: {
      control: "boolean",
      description:
        'Only recommended with size="s". Not allowed in combination with an active profileSettingsLink prop.',
    },
    profileSettingsLink: { control: false },
    iconButtons: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    size: "s",
    name: "Rory McIlroy",
    handle: "rory_goat",
    avatarSrc: "/avatars/rory.jpg",
    showAvatar: true,
    iconButtons: (
      <>
        <IconButton
          color="primary"
          layout="horizontal"
          label="rory_goat"
          IconComponent={ProfileIcon}
        />
        <IconButton
          color="neutral"
          layout="horizontal"
          label="vor 20 Minuten"
          IconComponent={TimeIcon}
        />
      </>
    ),
  },
};

export const WithProfileSettingsLink: Story = {
  args: {
    size: "xl",
    name: "Rory McIlroy",
    handle: "rory_goat",
    showAvatar: false,
    iconButtons: (
      <>
        <IconButton
          color="primary"
          layout="horizontal"
          label="rory_goat"
          IconComponent={ProfileIcon}
        />
        <IconButton
          color="neutral"
          layout="horizontal"
          label="Ireland"
          IconComponent={LocationIcon}
        />
        <IconButton
          color="neutral"
          layout="horizontal"
          label="vor 20 Minuten"
          IconComponent={TimeIcon}
        />
      </>
    ),
    profileSettingsLink: (
      <Link title="Settings" href="#">
        <SettingsIcon color="primary" size="m" />
      </Link>
    ),
  },
};
