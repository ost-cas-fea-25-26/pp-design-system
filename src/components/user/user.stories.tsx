import { Avatar } from "../avatar";
import { IconButton } from "../icon-button";
import { ProfileIcon, TimeIcon } from "../icons";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Compositions/User",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
