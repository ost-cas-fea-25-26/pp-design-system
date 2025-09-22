import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground active:bg-violet-700 hover:outline-2 hover:outline-violet-900 hover:bg-violet-700",
        secondary:
          "bg-secondary text-secondary-foreground active:bg-slate-700 hover:bg-slate-700",
        gradient:
          "bg-gradient-to-r from-pink-500 to-violet-500 text-primary-foreground hover:outline hover:outline-3 hover:outline-violet-100 active:outline active:outline-4 active:outline-violet-200 transition-all duration-200",
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
