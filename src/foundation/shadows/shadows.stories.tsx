import type { Meta, StoryObj } from "@storybook/react-vite";
import { twMerge } from "tailwind-merge";

const meta: Meta = {
  title: "Foundation/Shadows",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const shadows = [
      { name: "shadow-sm", className: "shadow-[var(--shadow-sm)]" },
      { name: "shadow-md", className: "shadow-[var(--shadow-md)]" },
      { name: "shadow-lg", className: "shadow-[var(--shadow-lg)]" },
    ];

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {shadows.map(({ name, className }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <div
              className={twMerge(
                "w-28 h-20 bg-white border border-neutral-200 rounded-md",
                className,
              )}
            />
            <span className="label-sm text-neutral-700 text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  },
};
