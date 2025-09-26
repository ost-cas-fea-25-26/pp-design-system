import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4",
  },
};

export const ParagraphL: Story = {
  args: {
    variant: "paragraphL",
    children:
      "Paragraph L - Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.",
  },
};

export const ParagraphM: Story = {
  args: {
    variant: "paragraphM",
    children:
      "Paragraph M - Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.",
  },
};

export const LabelXL: Story = {
  args: {
    variant: "labelXL",
    children: "Label XL",
  },
};

export const LabelL: Story = {
  args: {
    variant: "labelL",
    children: "Label L",
  },
};

export const LabelM: Story = {
  args: {
    variant: "labelM",
    children: "Label M",
  },
};

export const LabelS: Story = {
  args: {
    variant: "labelS",
    children: "Label S",
  },
};

export const Placeholder: Story = {
  args: {
    variant: "placeholder",
    children: "Placeholder",
  },
};
