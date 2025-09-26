import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium cursor-pointer hover:outline-3 active:outline-4 transition-all duration-200",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground active:bg-violet-700 hover:bg-violet-700 hover:outline-violet-100 active:outline-slate-200",
        secondary:
          "bg-secondary text-secondary-foreground active:bg-slate-700 hover:bg-slate-700 hover:outline-slate-100 active:outline-slate-200",
        gradient:
          "bg-gradient-to-r from-pink-500 to-violet-500 text-primary-foreground hover:outline-violet-100 active:outline-violet-200",
      },
      size: {
        default: "p-3 gap-2 has-[>svg]:gap-2",
        lg: "px-6 py-4 gap-3 has-[>svg]:gap-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);
