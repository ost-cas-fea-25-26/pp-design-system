import { Avatar } from "../avatar";
import { IconButton } from "../icon-button";
import {
  ProfileIcon,
  SettingsIcon,
  TimeIcon,
  CalendarIcon,
  LocationIcon,
  CheckmarkIcon,
  MumbleIcon,
} from "../icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "../link";
import { Button } from "../button";

const meta: Meta = {
  title: "Compositions/User",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const S: Story = {
  name: "Small with Avatar",
  render: () => (
    <div className="grid grid-cols-[auto_1fr] items-center gap-2">
      <Avatar
        alt="Rory McIlroy"
        fallbackText="RM"
        size="s"
        src="/avatars/rory.jpg"
        border={false}
      />
      <div className="flex flex-col">
        <span className="label-m text-neutral-900">Rory McIlroy</span>
        <div className="flex gap-4 pt-2">
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
        </div>
      </div>
    </div>
  ),
};

export const M: Story = {
  name: "Medium without Avatar",
  render: () => (
    <div className="grid items-center gap-2">
      <div className="flex flex-col">
        <span className="label-lg text-neutral-900">Rory McIlroy</span>
        <div className="flex gap-4 pt-2">
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
        </div>
      </div>
    </div>
  ),
};

export const L: Story = {
  name: "Large - Without Avatar",
  render: () => (
    <div className="items-center gap-2">
      <div className="flex items-center gap-2">
        <span className="label-xl text-neutral-900">Rory McIlroy</span>
      </div>
      <div className="flex gap-4 pt-2">
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
      </div>
    </div>
  ),
};

export const XL: Story = {
  name: "Own Profile",
  render: () => (
    <div className="items-center gap-2">
      <div className="flex items-center gap-2">
        <span className="heading-3 text-neutral-900">Rory McIlroy</span>
        <Link title="Settings" href="#">
          <SettingsIcon color="primary" size="m" />
        </Link>
      </div>
      <div className="flex gap-4 pt-2">
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
          label="joined"
          IconComponent={CalendarIcon}
        />
      </div>
    </div>
  ),
};

export const Card: Story = {
  name: "User Card",
  render: () => (
    <div className="bg-primary-100 p-4 border border-primary/40 border-dashed">
      <div className="bg-primary-foreground rounded-xl flex flex-col items-center p-4 gap-4">
        <Avatar
          alt="Rory McIlory"
          fallbackText="RM"
          src="/avatars/rory.jpg"
          size="l"
          border={true}
        />
        <div className="flex flex-col items-center gap-1">
          <span className="label-lg text-neutral-900">Rory McIlroy</span>
          <IconButton
            label="rory_goat"
            IconComponent={ProfileIcon}
            color="primary"
            layout="horizontal"
          />
        </div>
        <Button variant="primary" fullWidth={true}>
          Follow
          <MumbleIcon color="white" />
        </Button>
      </div>
    </div>
  ),
};
