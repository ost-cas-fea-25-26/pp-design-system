import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useFormField } from "./form-field";

export const FormDescription: FC<React.ComponentProps<"p">> = ({
  className,
  ...props
}) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={twMerge("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
};
