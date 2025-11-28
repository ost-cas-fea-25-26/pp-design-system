import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ProfileHeader } from "@/compositions/profile-header";
import { IconButton } from "@/components/icon-button";
import {
  ProfileIcon,
  LocationIcon,
  TimeIcon,
  SettingsIcon,
} from "@/components/icons";
import { Link } from "@/components/link";

const meta: Meta<typeof ProfileHeader> = {
  title: "Compositions/Profile Header",
  component: ProfileHeader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    bannerImageElement: (
      <img
        src="/headers/rory-mcilroy.jpg"
        alt="Rory McIlroy absolutely nuking a fucking perfect driver"
        className="object-cover w-full h-full"
      />
    ),
    avatarImageElement: (
      <img
        src="/avatars/rory.jpg"
        alt="Rory McIlroy"
        className="object-cover w-full h-full"
      />
    ),
    avatarFallback: "RM",
    onEditHeader: fn(),
    onEditAvatar: fn(),
    name: "Rory McIlroy",
    handle: "rory_goat",
    bio: "4x Major Champion. Legendary ball-striker. Known for 340-yard draws, questionable tee-box decisions, and an unhealthy obsession with perfecting the modern golf swing. If found, please return my Pro V1 — it left the fairway on hole 7 and never came back.",
    iconButtons: (
      <>
        <IconButton
          IconComponent={ProfileIcon}
          color="primary"
          label="rory_goat"
          layout="horizontal"
        />
        <IconButton
          IconComponent={LocationIcon}
          color="neutral"
          label="Ireland"
          layout="horizontal"
        />
        <IconButton
          IconComponent={TimeIcon}
          color="neutral"
          label="20 minutes ago"
          layout="horizontal"
        />
      </>
    ),
    settingsLinkElement: (
      <Link href="/settings" title="Settings">
        <SettingsIcon color="primary" size="m" />
      </Link>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-[680px] mx-auto px-8 py-6 bg-neutral-50">
      <ProfileHeader {...args} />
    </div>
  ),
};
