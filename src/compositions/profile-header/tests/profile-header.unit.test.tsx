import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { ProfileHeader } from "../profile-header";
import { IconButton } from "@/components/icon-button";
import { ProfileIcon } from "@/components/icons";

describe("ProfileHeader (single test)", () => {
  it("renders all elements and triggers all interactions", () => {
    const handleEditHeader = vi.fn();
    const handleEditAvatar = vi.fn();

    const banner = (
      <img
        src="/headers/test.jpg"
        alt="Test Banner"
        className="object-cover w-full h-full"
      />
    );

    const avatar = (
      <img
        src="/avatars/test.jpg"
        alt="Test Avatar"
        className="object-cover w-full h-full"
      />
    );

    const settingsLink = <a href="/settings">Settings</a>;

    const iconButtons = (
      <IconButton
        IconComponent={ProfileIcon}
        color="primary"
        label="test_label"
        layout="horizontal"
      />
    );

    render(
      <ProfileHeader
        bannerImageElement={banner}
        avatarImageElement={avatar}
        avatarFallback="TA"
        name="Test User"
        handle="test_user"
        iconButtons={iconButtons}
        settingsLinkElement={settingsLink}
        bio="This is a test bio"
        onEditHeader={handleEditHeader}
        onEditAvatar={handleEditAvatar}
      />,
    );

    expect(screen.getByAltText("Test Banner")).toBeInTheDocument();
    expect(screen.getByAltText("Test Avatar")).toBeInTheDocument();
    expect(screen.getByText("Test User")).toBeInTheDocument();
    expect(screen.getByText("This is a test bio")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("test_label")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /edit image/i }));
    expect(handleEditHeader).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole("button", { name: /edit avatar/i }));
    expect(handleEditAvatar).toHaveBeenCalledTimes(1);
  });
});
