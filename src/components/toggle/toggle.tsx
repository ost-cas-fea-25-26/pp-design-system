import { FC, ReactNode, useCallback, useState } from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { VariantProps } from "class-variance-authority";
import { toggleVariants } from "./variants";

type ToggleProps = VariantProps<typeof toggleVariants> & {
  activeChildren: ReactNode;
  defaultChildren: ReactNode;
  onToggle?: (nextState: boolean) => Promise<void>;
  isActive?: boolean;
};

export const Toggle: FC<ToggleProps> = ({
  isActive = false,
  variant = "primary",
  ...props
}) => {
  const [isOn, setIsOn] = useState<boolean>(isActive);
  const children = isOn ? props.activeChildren : props.defaultChildren;

  const clickHandler = useCallback(() => {
    const nextState = !isOn;
    if (props.onToggle) {
      Promise.resolve(props.onToggle(nextState))
        .then(() => {
          setIsOn(nextState);
        })
        .catch(console.error);
    } else {
      setIsOn(nextState);
    }
  }, [isOn]);

  return (
    <TogglePrimitive.Toggle
      data-state={isOn ? "on" : "off"}
      className={toggleVariants({ variant: variant })}
      onClick={clickHandler}
    >
      {children}
    </TogglePrimitive.Toggle>
  );
};
