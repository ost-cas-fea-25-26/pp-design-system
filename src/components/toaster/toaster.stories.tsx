import { Button } from "@/components/button";
import { Meta, StoryObj } from "@storybook/react-vite";
import { toast, Toaster } from "./index";

const meta: Meta = {
  title: "Components/Toaster",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => (
    <div className="min-h-screen bg-neutral-50 p-8">
      <Toaster />

      <div className="flex gap-4">
        <Button onClick={() => toast("Nice swing 🏌️‍♂️")}>Default</Button>

        <Button onClick={() => toast.success("Hole in one! ⛳️")}>
          Success
        </Button>

        <Button onClick={() => toast.error("Out of bounds 😬")}>Error</Button>

        <Button
          onClick={() =>
            toast.promise(new Promise((res) => setTimeout(res, 2000)), {
              loading: "Lining up the putt…",
              success: "Birdie! 🐦",
              error: "Three-putt 😵",
            })
          }
        >
          Promise
        </Button>
      </div>
    </div>
  ),
};
