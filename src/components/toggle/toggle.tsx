import { FC, ReactNode, useCallback, useState } from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { VariantProps } from "class-variance-authority";
import { toggleVariants } from "./variants";

type ToggleProps = VariantProps<typeof toggleVariants> & {
  isActive: boolean;
  activeChildren: ReactNode;
  defaultChildren: ReactNode;
  onToggle?: (nextState: boolean) => Promise<void>;
};

export const Toggle: FC<ToggleProps> = ({ variant = "primary", ...props }) => {
  const [isActive, setIsActive] = useState<boolean>(props.isActive);
  const children = isActive ? props.activeChildren : props.defaultChildren;

  const clickHandler = useCallback(() => {
    const nextState = !isActive;
    if (props.onToggle) {
      Promise.resolve(props.onToggle(nextState))
        .then(() => {
          setIsActive(nextState);
        })
        .catch(console.error);
    } else {
      setIsActive(nextState);
    }
  }, [isActive]);

  return (
    <TogglePrimitive.Toggle
      data-state={isActive ? "on" : "off"}
      className={toggleVariants({ variant: variant })}
      onClick={clickHandler}
    >
      {children}
    </TogglePrimitive.Toggle>
  );
};
