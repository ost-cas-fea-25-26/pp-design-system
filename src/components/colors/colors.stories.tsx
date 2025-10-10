import type { Meta, StoryObj } from "@storybook/react-vite";
import { twMerge } from "tailwind-merge";

const meta: Meta = {
  title: "Colors",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Swatch = ({ name, colorClass }: { name: string; colorClass: string }) => (
  <div className="flex flex-col items-center text-center shrink-0">
    <div
      className={twMerge(
        "w-12 h-12 rounded-md border border-neutral border-dashed mb-1",
        colorClass,
      )}
    />
    <p className="label-sm">{name}</p>
  </div>
);

const ColorRow = ({
  title,
  specials,
  scales,
}: {
  title: string;
  specials: { name: string; colorClass: string }[];
  scales: { name: string; colorClass: string }[];
}) => (
  <section className="space-y-2 w-full">
    <h2 className="heading-4">{title}</h2>
    <div className="flex gap-3 flex-wrap pb-2">
      {specials.map(({ name, colorClass }) => (
        <Swatch key={name} name={name} colorClass={colorClass} />
      ))}
    </div>
    <div className="flex gap-3 flex-wrap pb-2">
      {scales.map(({ name, colorClass }) => (
        <Swatch key={name} name={name} colorClass={colorClass} />
      ))}
    </div>
  </section>
);

export const Default: Story = {
  render: () => {
    const primarySpecials = [
      { name: "default", colorClass: "bg-primary" },
      { name: "hover", colorClass: "bg-primary-hover" },
      { name: "active", colorClass: "bg-primary-active" },
      { name: "foreground", colorClass: "bg-primary-foreground" },
    ];

    const primaryScales = [
      { name: "50", colorClass: "bg-primary-50" },
      { name: "100", colorClass: "bg-primary-100" },
      { name: "200", colorClass: "bg-primary-200" },
      { name: "300", colorClass: "bg-primary-300" },
      { name: "400", colorClass: "bg-primary-400" },
      { name: "500", colorClass: "bg-primary-500" },
      { name: "600", colorClass: "bg-primary-600" },
      { name: "700", colorClass: "bg-primary-700" },
      { name: "800", colorClass: "bg-primary-800" },
      { name: "900", colorClass: "bg-primary-900" },
    ];

    const accentSpecials = [
      { name: "default", colorClass: "bg-accent" },
      { name: "hover", colorClass: "bg-accent-hover" },
      { name: "active", colorClass: "bg-accent-active" },
      { name: "foreground", colorClass: "bg-accent-foreground" },
    ];

    const accentScales = [
      { name: "50", colorClass: "bg-accent-50" },
      { name: "100", colorClass: "bg-accent-100" },
      { name: "200", colorClass: "bg-accent-200" },
      { name: "300", colorClass: "bg-accent-300" },
      { name: "400", colorClass: "bg-accent-400" },
      { name: "500", colorClass: "bg-accent-500" },
      { name: "600", colorClass: "bg-accent-600" },
      { name: "700", colorClass: "bg-accent-700" },
      { name: "800", colorClass: "bg-accent-800" },
      { name: "900", colorClass: "bg-accent-900" },
    ];

    const neutralSpecials = [
      { name: "default", colorClass: "bg-neutral" },
      { name: "hover", colorClass: "bg-neutral-hover" },
      { name: "active", colorClass: "bg-neutral-active" },
      { name: "foreground", colorClass: "bg-neutral-foreground" },
    ];

    const neutralScales = [
      { name: "50", colorClass: "bg-neutral-50" },
      { name: "100", colorClass: "bg-neutral-100" },
      { name: "200", colorClass: "bg-neutral-200" },
      { name: "300", colorClass: "bg-neutral-300" },
      { name: "400", colorClass: "bg-neutral-400" },
      { name: "500", colorClass: "bg-neutral-500" },
      { name: "600", colorClass: "bg-neutral-600" },
      { name: "700", colorClass: "bg-neutral-700" },
      { name: "800", colorClass: "bg-neutral-800" },
      { name: "900", colorClass: "bg-neutral-900" },
    ];

    const errorSpecials = [
      { name: "default", colorClass: "bg-error" },
      { name: "hover", colorClass: "bg-error-hover" },
      { name: "active", colorClass: "bg-error-active" },
      { name: "foreground", colorClass: "bg-error-foreground" },
    ];

    const successSpecials = [
      { name: "default", colorClass: "bg-success" },
      { name: "hover", colorClass: "bg-success-hover" },
      { name: "active", colorClass: "bg-success-active" },
      { name: "foreground", colorClass: "bg-success-foreground" },
    ];

    const warningSpecials = [
      { name: "default", colorClass: "bg-warning" },
      { name: "hover", colorClass: "bg-warning-hover" },
      { name: "active", colorClass: "bg-warning-active" },
      { name: "foreground", colorClass: "bg-warning-foreground" },
    ];

    return (
      <div className="p-8 space-y-8 w-full max-w-none">
        <ColorRow
          title="Primary"
          specials={primarySpecials}
          scales={primaryScales}
        />
        <ColorRow
          title="Accent"
          specials={accentSpecials}
          scales={accentScales}
        />
        <ColorRow
          title="Neutral"
          specials={neutralSpecials}
          scales={neutralScales}
        />
        <ColorRow title="Error" specials={errorSpecials} scales={[]} />
        <ColorRow title="Success" specials={successSpecials} scales={[]} />
        <ColorRow title="Warning" specials={warningSpecials} scales={[]} />
      </div>
    );
  },
};
