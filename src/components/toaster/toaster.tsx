"use client";

import toast, { Toaster as HotToaster } from "react-hot-toast";
import { CircleCheckIcon, OctagonXIcon, Loader2Icon } from "lucide-react";

export const Toaster = () => (
  <HotToaster
    position="top-center"
    toastOptions={{
      className:
        "flex items-center gap-3 rounded-lg border px-4 py-3 shadow-sm label-m",

      style: {
        background: "var(--color-neutral-50)",
        color: "var(--color-neutral-900)",
        borderColor: "var(--color-neutral-200)",
      },

      success: {
        icon: <CircleCheckIcon className="size-4" />,
        style: {
          background: "var(--color-primary-50)",
          color: "var(--color-primary-800)",
          borderColor: "var(--color-primary-200)",
        },
      },

      error: {
        icon: <OctagonXIcon className="size-4" />,
        style: {
          background: "var(--color-error)",
          color: "var(--color-error-foreground)",
          borderColor: "var(--color-error-hover)",
        },
      },

      loading: {
        icon: <Loader2Icon className="size-4 animate-spin" />,
      },
    }}
  />
);

export { toast };
