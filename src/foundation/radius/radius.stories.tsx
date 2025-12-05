import type { Meta, StoryObj } from "@storybook/react-vite";
import { twMerge } from "tailwind-merge";

const meta: Meta = {
  title: "Foundation/Radius",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const radii = [
      { name: "radius-xs (2px)", className: "rounded-[var(--radius-xs)]" },
      { name: "radius-sm (4px)", className: "rounded-[var(--radius-sm)]" },
      { name: "radius-md (6px)", className: "rounded-[var(--radius-md)]" },
      { name: "radius-lg (8px)", className: "rounded-[var(--radius-lg)]" },
      { name: "radius-xl (12px)", className: "rounded-[var(--radius-xl)]" },
      {
        name: "radius-full (9999px)",
        className: "rounded-[var(--radius-full)]",
      },
    ];

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {radii.map(({ name, className }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <div
              className={twMerge(
                "w-20 h-20 bg-neutral-100 border border-neutral-300",
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
