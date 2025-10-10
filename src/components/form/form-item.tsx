import { FC, createContext, useId, ComponentProps } from "react";

type FormItemContextValue = { id: string };

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

export const FormItem: FC<ComponentProps<"div">> = ({ ...props }) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className="grid gap-2" {...props} />
    </FormItemContext.Provider>
  );
};
