import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { AppShell } from "./app-shell";
import { Header } from "../header";
import { LogoLink } from "@/components/logo/logo";
import { AvatarButton } from "@/components/avatar-button";
import { IconButton } from "@/components/icon-button";
import { LogoutIcon, SettingsIcon } from "@/components/icons";

const meta: Meta<typeof AppShell> = {
  title: "Compositions/App Shell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  args: {
    header: (
      <Header
        logo={
          <LogoLink href="/iframe.html?id=compositions-app-shell--default&viewMode=story" />
        }
        actions={
          <>
            <a href="/profile">
              <AvatarButton
                imageElement={
                  <img
                    src="/avatars/rory.jpg"
                    alt="User avatar"
                    className="object-cover w-full h-full"
                  />
                }
                fallbackText="RM"
                size="s"
              />
            </a>
            <IconButton
              label="Settings"
              IconComponent={SettingsIcon}
              animation="rotate"
              color="primary"
              layout="stacked"
              onClick={fn()}
            />
            <IconButton
              label="Log out"
              IconComponent={LogoutIcon}
              color="primary"
              layout="stacked"
              onClick={fn()}
            />
          </>
        }
      />
    ),
    children: (
      <div className="mt-8 space-y-2">
        <h1 className="heading-2 text-primary">Welcome to Mumble</h1>

        <p className="heading-4 text-neutral-500 mb-8">
          This is a page inside the AppShell with a header. Scroll to confirm
          the header stays fixed.
        </p>

        <div className="space-y-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg min-h-[180px] flex items-center"
            >
              Mumble block #{i + 1}
            </div>
          ))}
        </div>
      </div>
    ),
  },
};
