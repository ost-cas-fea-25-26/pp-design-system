import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "label-m inline-flex px-4 py-2 cursor-pointer rounded-2xl",
  {
    variants: {
      variant: {
        primary:
          "focus-ring-primary hover:**:text-primary-600 hover:bg-primary-50 data-[state=on]:text-primary-600",
        accent:
          "focus-ring-accent hover:**:text-accent-600 data hover:bg-accent-50 data-[state=on]:**:text-accent-900",
        metric:
          "focus-ring-accent hover:**:text-accent-600 data hover:bg-accent-50 data-[state=on]:text-accent-600 **:text-accent-900",
      },
    },
  },
);
