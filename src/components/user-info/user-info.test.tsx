import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UserInfo } from "./index";
import { SettingsIcon } from "../icons";
import "@testing-library/jest-dom";

const profileSettingsLink = (
  <a href="#" data-testid="icon-Settings">
    <SettingsIcon color="primary" size="m" />
  </a>
);

describe("UserInfo", () => {
  it("render profile settings link", () => {
    const { getByTestId, queryByTestId } = render(
      <UserInfo
        size="m"
        name="Rory McIlroy"
        handle="rory_goat"
        profileSettingsLink={profileSettingsLink}
        showAvatar={false}
      />,
    );
    expect(getByTestId("icon-Settings")).toBeInTheDocument();
    expect(queryByTestId("avatar-root")).not.toBeInTheDocument();
  });

  it("does not render profile settings link", () => {
    const { queryByTestId } = render(
      <UserInfo
        size="m"
        name="Rory McIlroy"
        handle="rory_goat"
        showAvatar={false}
      />,
    );
    expect(queryByTestId("icon-Settings")).not.toBeInTheDocument();
  });

  it("renders the avatar if showAvatar is true", () => {
    const { getByTestId } = render(
      <UserInfo size="m" name="Rory McIlroy" handle="rory_goat" showAvatar />,
    );
    expect(getByTestId("avatar-root")).toBeInTheDocument();
  });

  it("does not render the avatar if showAvatar is false", () => {
    const { queryByTestId } = render(
      <UserInfo
        size="m"
        name="Rory McIlroy"
        handle="rory_goat"
        showAvatar={false}
      />,
    );
    expect(queryByTestId("avatar-root")).not.toBeInTheDocument();
  });

  it("renders iconButtons prop correctly", () => {
    const { getByRole } = render(
      <UserInfo
        size="m"
        name="Rory McIlroy"
        handle="rory_goat"
        iconButtons={<button>Icon Button</button>}
      />,
    );
    expect(getByRole("button", { name: "Icon Button" })).toBeInTheDocument();
  });

  it("applies correct class mapping for the size", () => {
    const { getByText } = render(
      <UserInfo
        size="xl"
        name="Rory McIlroy"
        handle="rory_goat"
        showAvatar={false}
      />,
    );
    const nameSpan = getByText("Rory McIlroy");
    expect(nameSpan.className).toContain("heading-3");
  });

  it("calculates fallbackText correctly from handle", () => {
    const { getByText } = render(
      <UserInfo size="m" name="Rory McIlroy" handle="rory_goat" showAvatar />,
    );
    expect(getByText("RO")).toBeInTheDocument();
  });
});
