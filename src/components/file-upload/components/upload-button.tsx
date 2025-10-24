import { FC } from "react";
import { UploadIcon } from "../../icons";
import { Button } from "../../button";

type UploadButtonProps = {
  label: string;
  onClick: () => void;
};

export const UploadButton: FC<UploadButtonProps> = ({ label, onClick }) => (
  <Button variant="light" size="default" fullWidth onClick={onClick}>
    <span className="mr-2">{label}</span>
    <UploadIcon color="neutral" />
  </Button>
);
