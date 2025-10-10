import React, { FC, createContext, useId } from "react";
import { twMerge } from "tailwind-merge";

export type FormItemContextValue = { id: string };

export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

export const FormItem: FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={twMerge("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
};
