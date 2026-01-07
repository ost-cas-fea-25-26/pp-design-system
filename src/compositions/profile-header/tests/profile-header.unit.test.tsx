import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { ProfileHeader } from "../profile-header";
import { IconButton } from "@/components/icon-button";
import { ProfileIcon } from "@/components/icons";

describe("ProfileHeader (single test)", () => {
  it("renders all elements", () => {
    render(
      <ProfileHeader
        bannerImageElement={
          <img
            src="/headers/test.jpg"
            alt="Test Banner"
            className="object-cover w-full h-full"
          />
        }
        avatarImageElement={
          <img
            src="/avatars/test.jpg"
            alt="Test Avatar"
            className="object-cover w-full h-full"
          />
        }
        name="Test User"
        handle="test_user"
        iconButtons={
          <IconButton
            IconComponent={ProfileIcon}
            color="primary"
            label="test_label"
            layout="horizontal"
          />
        }
        settingsLinkElement={<a href="/settings">Settings</a>}
        bio="This is a test bio"
      />,
    );

    expect(screen.getByAltText("Test Banner")).toBeInTheDocument();
    expect(screen.getByAltText("Test Avatar")).toBeInTheDocument();
    expect(screen.getByText("Test User")).toBeInTheDocument();
    expect(screen.getByText("This is a test bio")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("test_label")).toBeInTheDocument();
  });
});
