import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useFormField } from "./form-field";

export const FormMessage: FC<React.ComponentProps<"p">> = ({
  className,
  children,
  ...props
}) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message ?? "") : children;

  if (!body) return null;

  return (
    <p
      id={formMessageId}
      className={twMerge("text-sm text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
};
