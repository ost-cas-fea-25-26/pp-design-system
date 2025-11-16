import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProfileBanner } from "./profile-banner";
import { fn } from "storybook/test";

const meta: Meta<typeof ProfileBanner> = {
  title: "Components/Profile Banner",
  component: ProfileBanner,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
    imageElement: (
      <img
        src="/headers/rory-mcilroy.jpg"
        alt="Rory McIlroy absolutely nuking a fucking perfect driver"
        className="object-cover w-full h-full"
      />
    ),
  },
};

export const NonEditable: Story = {
  args: {
    imageElement: (
      <img
        src="/headers/rory-mcilroy.jpg"
        alt="Rory McIlroy absolutely nuking a fucking perfect driver"
        className="object-cover w-full h-full"
      />
    ),
  },
};
