import { FC, ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CancelIcon } from "@/components/icons";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  footer: ReactNode;
};

export const Modal: FC<ModalProps> = ({
  open,
  onOpenChange,
  title,
  children,
  footer,
}) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className="fixed inset-0 z-50 bg-neutral-900/20
          data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />
      <DialogPrimitive.Content
        className="fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2
          overflow-hidden rounded-xl bg-neutral-50 shadow-xl outline-none
          data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
      >
        <div className="relative bg-primary px-8 py-6">
          <DialogPrimitive.Title className="heading-3 text-primary-foreground">
            {title}
          </DialogPrimitive.Title>

          <DialogPrimitive.Close
            className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer rounded
              text-primary-foreground hover:opacity-90 transition focus-ring-primary-inverted"
            aria-label="Close"
          >
            <CancelIcon color="white" />
          </DialogPrimitive.Close>
        </div>
        <div className="px-8 pt-8 pb-16 paragraph">{children}</div>
        <div className="px-8 pb-8">{footer}</div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);
