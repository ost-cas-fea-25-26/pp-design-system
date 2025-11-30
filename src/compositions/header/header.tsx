import { FC, ReactNode } from "react";

type HeaderProps = {
  logo?: ReactNode;
  actions?: ReactNode;
};

export const Header: FC<HeaderProps> = ({ logo, actions }) => (
  <header className="bg-primary w-full sticky top-0 z-50 py-3 px-8">
    <div className="w-full max-w-[680px] mx-auto flex items-center justify-between">
      {logo}

      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {actions}
      </div>
    </div>
  </header>
);
