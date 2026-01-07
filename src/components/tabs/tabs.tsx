import { FC, ReactNode } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

type TabItem = {
  text: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  defaultTab?: string;
};

const tabValue = (text: string) => text.replace(/\s+/g, "");

export const Tabs: FC<TabsProps> = ({ tabs, defaultTab }) => {
  const defaultValue = defaultTab
    ? tabValue(defaultTab)
    : tabValue(tabs[0]?.text ?? "");

  return (
    <TabsPrimitive.Root defaultValue={defaultValue} className="w-full">
      <TabsPrimitive.List className="inline-flex gap-2 rounded-md bg-neutral-200 p-1">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.text}
            value={tabValue(tab.text)}
            aria-label={tab.text}
            className={`
              label-lg
              inline-flex h-10 cursor-pointer items-center justify-center rounded-md px-3 py-1
              text-neutral-600 transition-colors
              hover:bg-neutral-200
              focus-ring-primary
              data-[state=active]:bg-white data-[state=active]:text-primary-600
            `}
          >
            {tab.text}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.text}
          value={tabValue(tab.text)}
          className="mt-3"
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};
