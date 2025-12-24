import { cva } from "class-variance-authority";

export const iconButtonVariants = cva(
  "text-sm cursor-pointer flex justify-center items-center transition-colors transition-default group",
  {
    variants: {
      color: {
        primary: "focus-ring-primary text-primary-600 hover:text-primary-900",
        neutral: "focus-ring-neutral text-neutral-500 hover:text-neutral-700",
      },
      layout: {
        horizontal: "flex-row",
        stacked: "flex-col rounded-lg p-2 space-y-[4px]",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        layout: "stacked",
        class:
          "bg-primary-600 text-primary-foreground hover:text-primary-foreground hover:bg-primary-700",
      },
      {
        color: "neutral",
        layout: "stacked",
        class:
          "bg-neutral-600 text-neutral-foreground hover:text-neutral-foreground hover:bg-neutral-700",
      },
    ],
  },
);
