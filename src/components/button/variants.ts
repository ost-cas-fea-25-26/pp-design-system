import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer hover:outline-3 active:outline-4 transition-all duration-200",
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
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);
