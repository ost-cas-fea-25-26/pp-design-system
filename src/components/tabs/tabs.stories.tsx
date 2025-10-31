import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs
      tabs={[
        {
          text: "Account",
          content: <p>Account overview.</p>,
        },
        {
          text: "Password",
          content: <p>Password here.</p>,
        },
        {
          text: "Billing",
          content: <p>Billing details</p>,
        },
      ]}
    />
  ),
};

export const WithDefaultTab: Story = {
  render: () => (
    <Tabs
      defaultTab="Billing"
      tabs={[
        {
          text: "Account",
          content: <p>Account overview.</p>,
        },
        {
          text: "Password",
          content: <p>Password here.</p>,
        },
        {
          text: "Billing",
          content: <p>Billing details</p>,
        },
      ]}
    />
  ),
};
