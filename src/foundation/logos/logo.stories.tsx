import { Meta, StoryObj } from "@storybook/react-vite";

import AppIconGradient from "@/foundation/logos/svg-react/app-icon-gradient";
import AppIconWhite from "@/foundation/logos/svg-react/app-icon-white";

import LogoInlineViolet from "@/foundation/logos/svg-react/inline-violet";
import LogoInlineWhite from "@/foundation/logos/svg-react/inline-white";
import LogoInlineGradient from "@/foundation/logos/svg-react/inline-gradient";

import LogoStackedViolet from "@/foundation/logos/svg-react/stacked-violet";
import LogoStackedWhite from "@/foundation/logos/svg-react/stacked-white";
import LogoStackedGradient from "@/foundation/logos/svg-react/stacked-gradient";

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
        Component: AppIconGradient,
        bg: "bg-white",
        text: "text-neutral-900",
        group: "App Icons",
        type: "App Icon",
      },
      {
        filename: "app-icon-white.svg",
        Component: AppIconWhite,
        bg: "bg-violet-700",
        text: "text-white",
        group: "App Icons",
        type: "App Icon",
      },
      {
        filename: "inline-violet.svg",
        Component: LogoInlineViolet,
        bg: "bg-white",
        text: "text-neutral-900",
        group: "Violet",
        type: "Inline",
      },
      {
        filename: "inline-white.svg",
        Component: LogoInlineWhite,
        bg: "bg-violet-700",
        text: "text-white",
        group: "White",
        type: "Inline",
      },
      {
        filename: "inline-gradient.svg",
        Component: LogoInlineGradient,
        bg: "bg-white",
        text: "text-neutral-900",
        group: "Gradient",
        type: "Inline",
      },
      {
        filename: "stacked-violet.svg",
        Component: LogoStackedViolet,
        bg: "bg-white",
        text: "text-neutral-900",
        group: "Violet",
        type: "Stacked",
      },
      {
        filename: "stacked-white.svg",
        Component: LogoStackedWhite,
        bg: "bg-violet-700",
        text: "text-white",
        group: "White",
        type: "Stacked",
      },
      {
        filename: "stacked-gradient.svg",
        Component: LogoStackedGradient,
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
                .map(({ filename, Component, bg, text }) => (
                  <div
                    key={filename}
                    className={`flex flex-col items-center justify-between rounded-xl shadow-sm w-[200px] min-h-[160px] p-6 ${bg}`}
                  >
                    <Component className="w-[200px] max-h-[80px] mb-4 object-contain" />

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
