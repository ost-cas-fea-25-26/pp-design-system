import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { AvatarButton } from "../index";

describe("AvatarButton", () => {
  it("renders avatar correctly", () => {
    render(
      <AvatarButton
        imageElement={
          <img
            src="/avatars/rory.jpg"
            alt="User Avatar"
            className="object-cover w-full h-full"
          />
        }
        fallbackText="Fallback"
      />,
    );
    expect(screen.getByTestId("avatar-root")).toBeInTheDocument();
  });

  it("overrides avatar size prop", () => {
    render(
      <AvatarButton
        imageElement={
          <img
            src="/avatars/rory.jpg"
            alt="User Avatar"
            className="object-cover w-full h-full"
          />
        }
        fallbackText="Fallback"
        size="xl"
      />,
    );
    const avatar = screen.getByTestId("avatar-root");
    expect(avatar.className).toContain("w-10");
    expect(avatar.className).toContain("h-10");
  });

  it("calls onClick handler when button is clicked", () => {
    const handleClick = vi.fn();
    render(
      <AvatarButton
        imageElement={
          <img
            src="/avatars/rory.jpg"
            alt="User Avatar"
            className="object-cover w-full h-full"
          />
        }
        fallbackText="Fallback"
        onClick={handleClick}
      />,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
