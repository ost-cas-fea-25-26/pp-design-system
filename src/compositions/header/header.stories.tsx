import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Header } from "./header";
import { LogoLink } from "../../components/logo-link/logo-link";
import { AvatarButton } from "../../components/avatar-button";
import { IconButton } from "../../components/icon-button";
import { LogoutIcon, SettingsIcon } from "../../components/icons";

const meta: Meta<typeof Header> = {
  title: "Compositions/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: (
      <LogoLink href="/iframe.html?id=compositions-header--default&viewMode=story" />
    ),
    actions: (
      <>
        <AvatarButton
          onClick={fn()}
          fallbackText="RM"
          size="s"
          imageElement={
            <img
              src="/avatars/rory.jpg"
              alt="User avatar"
              className="object-cover w-full h-full"
            />
          }
        />
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
    ),
  },
};
