import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Logos",
};

export default meta;
type Story = StoryObj<typeof meta>;

const allLogos = [
  {
    filename: "app-icon-gradient.svg",
    src: "/logo/app-icon-gradient.svg",
    bg: "bg-white",
    text: "text-neutral-900",
    group: "App Icons",
    type: "App Icon",
  },
  {
    filename: "app-icon-white.svg",
    src: "/logo/app-icon-white.svg",
    bg: "bg-violet-700",
    text: "text-white",
    group: "App Icons",
    type: "App Icon",
  },
  {
    filename: "inline-violet.svg",
    src: "/logo/inline-violet.svg",
    bg: "bg-white",
    text: "text-neutral-900",
    group: "Violet",
    type: "Inline",
  },
  {
    filename: "inline-white.svg",
    src: "/logo/inline-white.svg",
    bg: "bg-violet-700",
    text: "text-white",
    group: "White",
    type: "Inline",
  },
  {
    filename: "inline-gradient.svg",
    src: "/logo/inline-gradient.svg",
    bg: "bg-white",
    text: "text-neutral-900",
    group: "Gradient",
    type: "Inline",
  },
  {
    filename: "stacked-violet.svg",
    src: "/logo/stacked-violet.svg",
    bg: "bg-white",
    text: "text-neutral-900",
    group: "Violet",
    type: "Stacked",
  },
  {
    filename: "stacked-white.svg",
    src: "/logo/stacked-white.svg",
    bg: "bg-violet-700",
    text: "text-white",
    group: "White",
    type: "Stacked",
  },
  {
    filename: "stacked-gradient.svg",
    src: "/logo/stacked-gradient.svg",
    bg: "bg-white",
    text: "text-neutral-900",
    group: "Gradient",
    type: "Stacked",
  },
];

const groupOrder = ["Violet", "White", "Gradient", "App Icons"];

export const Default: Story = {
  render: () => (
    <div className="space-y-12">
      {groupOrder.map((group) => (
        <section key={group}>
          <h4 className="heading-4 mb-4">{group}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[600px] justify-items-start">
            {allLogos
              .filter((logo) => logo.group === group)
              .map(({ filename, src, bg, text }) => (
                <div
                  key={filename}
                  className={`flex flex-col items-center justify-between rounded-xl shadow-sm w-[200px] min-h-[160px] p-6 ${bg}`}
                >
                  <img
                    src={src}
                    alt={filename}
                    className="w-[200px] max-h-[80px] mb-4 object-contain"
                  />
                  <span className={`text-xs text-center ${text}`}>
                    {filename}
                  </span>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
