import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoLink } from "./logo-link";

const meta: Meta<typeof LogoLink> = {
  title: "Components/LogoLink",
  component: LogoLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-primary p-6 rounded-md">
      <LogoLink href="/" />
    </div>
  ),
};
