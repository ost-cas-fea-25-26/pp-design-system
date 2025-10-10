import React, { ComponentProps, FC } from "react";
import { Slot } from "@radix-ui/react-slot";
import { useFormField } from "./form-field";

export const FormControl: FC<ComponentProps<typeof Slot>> = (props) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};
