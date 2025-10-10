import React, { FC } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useFormField } from "./form-field";
import { Label } from "../label";

type FormLabelProps = React.ComponentProps<typeof LabelPrimitive.Root> & {
  disabled?: boolean;
};

export const FormLabel: FC<FormLabelProps> = ({
  disabled = false,
  ...props
}) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      htmlFor={formItemId}
      error={!!error}
      disabled={disabled}
      {...props}
    />
  );
};
