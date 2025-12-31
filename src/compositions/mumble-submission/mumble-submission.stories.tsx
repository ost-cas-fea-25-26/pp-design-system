import { Meta, StoryObj } from "@storybook/react-vite";
import { MumbleSubmission } from "@/compositions/mumble-submission/mumble-submission";
import { Avatar } from "@/components";
import { MumbleForm } from "@/compositions";
import { fn } from "storybook/test";

const meta: Meta<typeof MumbleSubmission> = {
  title: "Compositions/Mumble Submission",
  component: MumbleSubmission,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    avatar: (
      <Avatar
        fallbackText="RM"
        imageElement={
          <img
            alt="Rory McIlroy"
            className="object-cover w-full h-full"
            src="/avatars/rory.jpg"
          />
        }
        size="m"
      />
    ),
    form: (
      <MumbleForm
        title="Share your thoughts"
        placeholder="What's happening?"
        uploadButtonText="Upload media"
        submitButtonText="submit"
        onSubmitHandler={fn()}
        errorMessage="Text is required"
      />
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="border border-neutral/40 border-dashed rounded-md p-10 bg-neutral/5">
      <MumbleSubmission {...args} />
    </div>
  ),
};
