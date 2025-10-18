import { FC, ReactNode, useState } from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { twMerge } from "tailwind-merge";

type ToggleProps = {
  isOn: boolean;
  onIcon?: ReactNode;
  onLabel: string;
  color?: "primary" | "accent";
  offLabel: string;
  offIcon?: ReactNode;
  toggleHandler?: (nextState: boolean) => Promise<void>;
};

export const Toggle: FC<ToggleProps> = (props) => {
  const [isOn, setIsOn] = useState<boolean>(props.isOn);

  const label = isOn ? props.onLabel : props.offLabel;
  const icon = isOn ? props.onIcon : props.offIcon;

  const clickHandler = () => {
    if (!props.toggleHandler) {
      return;
    }

    const nextState = !isOn;
    props
      .toggleHandler(nextState)
      .then(() => {
        setIsOn(!isOn);
      })
      .catch((error) => console.error(error));
  };

  return (
    <TogglePrimitive.Toggle
      data-state={isOn ? "on" : "off"}
      className={twMerge(
        "inline-flex",
        "data-[state=on]:text-accent",
        "data-[state=off]:text-primary",
      )}
      onClick={clickHandler}
    >
      {icon} {label}
    </TogglePrimitive.Toggle>
  );
};
