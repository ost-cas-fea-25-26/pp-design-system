import { Avatar } from "../avatar";
import { IconButton } from "../icon-button";
import { ProfileIcon, SettingsIcon, TimeIcon, CalendarIcon } from "../icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "../link";

const meta: Meta = {
  title: "Compositions/User",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const S: Story = {
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
        <span className="label-xl text-neutral-900">Rory McIlroy</span>

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

export const XL: Story = {
  name: "XL with Settings Icon",
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
          label="vor 20 Minuten"
          IconComponent={TimeIcon}
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
