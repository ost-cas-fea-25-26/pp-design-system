import React, { FC } from "react";
import { useFormField } from "./form-field";

export const FormMessage: FC<React.ComponentProps<"p">> = ({
  children,
  ...props
}) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p id={formMessageId} className="text-sm text-right text-error" {...props}>
      {body}
    </p>
  );
};
