import { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./index";

const meta = {
  title: "Typography",
  component: Typography,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
