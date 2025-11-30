import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Foundation/Typography",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <h1 className="heading-1">Heading 1</h1>
      <h2 className="heading-2">Heading 2</h2>
      <h3 className="heading-3">Heading 3</h3>
      <h4 className="heading-4">Heading 4</h4>

      <p className="paragraph-lg">
        Paragraph L – Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>

      <p className="paragraph">
        Paragraph – Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>

      <p className="label-xl">Label XL</p>
      <p className="label-lg">Label L</p>
      <p className="label-m">Label M</p>
      <p className="label-sm">Label SM</p>
      <p className="placeholder">Placeholder</p>
    </>
  ),
};
