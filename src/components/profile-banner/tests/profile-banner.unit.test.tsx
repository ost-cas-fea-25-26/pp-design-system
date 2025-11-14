import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { ProfileBanner } from "@/components/profile-banner";

describe("Profile Banner", () => {
  it("calls onClick when wrapper is clicked", () => {
    const handleClick = vi.fn();

    render(
      <ProfileBanner onClick={handleClick}>
        <img src="/test.jpg" alt="Test Image" />
      </ProfileBanner>,
    );

    fireEvent.click(screen.getByAltText("Test Image"));
    expect(handleClick).toHaveBeenCalledTimes(1);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Edit image");
  });
});
