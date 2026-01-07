import { FC, ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
  header: ReactNode;
};

export const AppShell: FC<AppShellProps> = ({ children, header }) => (
  <div className="min-h-screen bg-neutral-100 flex flex-col">
    {header}
    <div className="flex-1 w-full">
      <div className="w-full max-w-[680px] mx-auto px-8 py-6">{children}</div>
    </div>
  </div>
);
