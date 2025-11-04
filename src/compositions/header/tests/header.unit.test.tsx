import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Header } from "../header";

describe("Header", () => {
  it("renders the logo", () => {
    const { getByRole } = render(<Header />);
    const logoLink = getByRole("link");
    expect(logoLink).toBeInTheDocument();
  });

  it("passes the logoHref prop correctly", () => {
    const { getByRole } = render(<Header logoHref="/dashboard" />);
    expect(getByRole("link")).toHaveAttribute("href", "/dashboard");
  });

  it("renders avatar and buttons", () => {
    const { getByLabelText, getByText } = render(<Header />);
    expect(getByLabelText("User avatar")).toBeInTheDocument();
    expect(getByText("Settings")).toBeInTheDocument();
    expect(getByText("Log out")).toBeInTheDocument();
  });

  it("calls respective click handlers when buttons are clicked", () => {
    const handleAvatar = vi.fn();
    const handleSettings = vi.fn();
    const handleLogout = vi.fn();

    const { getByLabelText, getByText } = render(
      <Header
        onAvatarClick={handleAvatar}
        onSettingsClick={handleSettings}
        onLogoutClick={handleLogout}
      />,
    );

    fireEvent.click(getByLabelText("User avatar"));
    fireEvent.click(getByText("Settings"));
    fireEvent.click(getByText("Log out"));

    expect(handleAvatar).toHaveBeenCalledTimes(1);
    expect(handleSettings).toHaveBeenCalledTimes(1);
    expect(handleLogout).toHaveBeenCalledTimes(1);
  });

  it("renders fallback avatar letter when no image is provided", () => {
    const { getByText } = render(<Header />);
    expect(getByText("U")).toBeInTheDocument();
  });
});
