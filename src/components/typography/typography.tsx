import { FC } from "react";

export const Typography: FC = () => {
  return (
    <>
      <h1 className="heading1">Heading 1</h1>
      <h2 className="heading2">Heading 2</h2>
      <h3 className="heading3">Heading 3</h3>
      <h4 className="heading4">Heading 4</h4>

      <p className="paragraph-lg">
        Paragraph L - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <p className="paragraph">
        Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>

      <p className="label-xl">Label XL</p>
      <p className="label-lg">Label L</p>
      <p className="label-m">Label M</p>
      <p className="label-sm">Label SM</p>
      <p className="placeholder">Placeholder</p>
    </>
  );
};
