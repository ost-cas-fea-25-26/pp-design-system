import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Foundation/Spacing",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const spacings = [
      { name: "spacing-1", rem: "0.25rem", token: "--spacing-1" },
      { name: "spacing-2", rem: "0.5rem", token: "--spacing-2" },
      { name: "spacing-3", rem: "0.75rem", token: "--spacing-3" },
      { name: "spacing-4", rem: "1rem", token: "--spacing-4" },
      { name: "spacing-6", rem: "1.5rem", token: "--spacing-6" },
      { name: "spacing-8", rem: "2rem", token: "--spacing-8" },
      { name: "spacing-12", rem: "3rem", token: "--spacing-12" },
    ];

    return (
      <div className="w-full max-w-md">
        <div className="grid grid-cols-3 gap-4 font-semibold mb-4 label-sm text-neutral-700">
          <div>Name</div>
          <div>Rem</div>
          <div>Visual</div>
        </div>

        <div className="space-y-3">
          {spacings.map(({ name, rem, token }) => (
            <div key={name} className="grid grid-cols-3 gap-4 items-center">
              <div className="label-sm">{name}</div>
              <div className="text-sm text-neutral-600">{rem}</div>
              <div className="flex items-center">
                <div
                  className="h-3 bg-primary-400 rounded"
                  style={{ width: `var(${token})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
