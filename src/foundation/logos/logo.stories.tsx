import { Meta, StoryObj } from "@storybook/react-vite";
import appIconGradient from "/src/assets/logo/app-icon-gradient.svg";
import appIconWhite from "/src/assets/logo/app-icon-white.svg";
import logoInlineViolet from "/src/assets/logo/inline-violet.svg";
import logoInlineWhite from "/src/assets/logo/inline-white.svg";
import logoInlineGradient from "/src/assets/logo/inline-gradient.svg";
import logoStackedViolet from "/src/assets/logo/stacked-violet.svg";
import logoStackedWhite from "/src/assets/logo/stacked-white.svg";
import logoStackedGradient from "/src/assets/logo/stacked-gradient.svg";

const meta: Meta = {
  title: "Foundation/Logos",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const logos = [
      {
        filename: "app-icon-gradient.svg",
        src: appIconGradient,
        bg: "bg-white",
        text: "text-neutral-900",
        group: "App Icons",
        type: "App Icon",
      },
      {
        filename: "app-icon-white.svg",
        src: appIconWhite,
        bg: "bg-violet-700",
        text: "text-white",
        group: "App Icons",
        type: "App Icon",
      },
      {
        filename: "inline-violet.svg",
        src: logoInlineViolet,
        bg: "bg-white",
        text: "text-neutral-900",
        group: "Violet",
        type: "Inline",
      },
      {
        filename: "inline-white.svg",
        src: logoInlineWhite,
        bg: "bg-violet-700",
        text: "text-white",
        group: "White",
        type: "Inline",
      },
      {
        filename: "inline-gradient.svg",
        src: logoInlineGradient,
        bg: "bg-white",
        text: "text-neutral-900",
        group: "Gradient",
        type: "Inline",
      },
      {
        filename: "stacked-violet.svg",
        src: logoStackedViolet,
        bg: "bg-white",
        text: "text-neutral-900",
        group: "Violet",
        type: "Stacked",
      },
      {
        filename: "stacked-white.svg",
        src: logoStackedWhite,
        bg: "bg-violet-700",
        text: "text-white",
        group: "White",
        type: "Stacked",
      },
      {
        filename: "stacked-gradient.svg",
        src: logoStackedGradient,
        bg: "bg-white",
        text: "text-neutral-900",
        group: "Gradient",
        type: "Stacked",
      },
    ];

    const groupOrder = ["Violet", "White", "Gradient", "App Icons"];

    return (
      <div className="space-y-12">
        {groupOrder.map((group) => (
          <section key={group}>
            <h4 className="heading-4 mb-4">{group}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-[600px] justify-items-start ml-0">
              {logos
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
    );
  },
};
