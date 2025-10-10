import React, { FC } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { twMerge } from "tailwind-merge";
import { useFormField } from "./form-field";
import { Label } from "../label";

export const FormLabel: FC<
  React.ComponentProps<typeof LabelPrimitive.Root>
> = ({ className, ...props }) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      htmlFor={formItemId}
      className={twMerge(error ? "text-destructive" : "", className)}
      {...props}
    />
  );
};
