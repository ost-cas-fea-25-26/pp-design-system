import { FC, ReactNode, useState } from "react";

type ToggleProps = {
  isOn: boolean;
  onIcon?: ReactNode;
  onLabel: string;
  onColor?: "primary" | "accent";
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
    <span onClick={clickHandler}>
      {icon} {label}
    </span>
  );
};
