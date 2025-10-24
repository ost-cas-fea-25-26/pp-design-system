import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium cursor-pointer hover:outline-3 transition-all duration-200",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-hover hover:outline-primary-100 focus-ring-primary",
        neutral:
          "bg-neutral text-neutral-foreground hover:bg-neutral-hover hover:outline-neutral-100 focus-ring-neutral",
        neutralLight:
          "bg-neutral-300 text-neutral hover:bg-neutral-400 hover:outline-none focus-ring-neutral",
        gradient:
          "bg-gradient-to-r from-accent to-primary text-primary-foreground hover:outline-primary-100 focus-ring-primary",
      },
      size: {
        default: "p-3 gap-2 has-[>svg]:gap-2",
        lg: "px-6 py-4 gap-3 has-[>svg]:gap-3",
      },
    },
  },
);
