import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { ProfileBanner } from "@/components/profile-banner";

describe("Profile Banner", () => {
  it("calls onClick when wrapper is clicked", () => {
    const handleClick = vi.fn();

    const image = (
      <img
        src="/test.jpg"
        alt="Test Image"
        className="object-cover w-full h-full"
      />
    );

    render(<ProfileBanner onClick={handleClick} imageElement={image} />);

    fireEvent.click(screen.getByRole("button", { name: /edit image/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Edit image");
    expect(screen.getByAltText("Test Image")).toBeInTheDocument();
  });
});
