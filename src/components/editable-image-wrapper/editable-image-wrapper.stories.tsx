import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditableImageWrapper } from "./editable-image-wrapper";

const meta: Meta<typeof EditableImageWrapper> = {
  title: "Components/Editable Image Wrapper",
  component: EditableImageWrapper,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <EditableImageWrapper>
      <img
        src="rory-mcilroy.jpg"
        alt="Fucking awesome driver swing from Rory McIlroy"
        className="object-cover w-full h-full"
      />
    </EditableImageWrapper>
  ),
};
