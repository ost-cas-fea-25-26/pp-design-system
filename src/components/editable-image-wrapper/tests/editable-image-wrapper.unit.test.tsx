import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { EditableImageWrapper } from "@/components/editable-image-wrapper";

describe("EditableImageWrapper", () => {
  it("calls onClick when wrapper is clicked", () => {
    const handleClick = vi.fn();

    render(
      <EditableImageWrapper onClick={handleClick}>
        <img src="/test.jpg" alt="Test Image" />
      </EditableImageWrapper>,
    );

    fireEvent.click(screen.getByAltText("Test Image"));
    expect(handleClick).toHaveBeenCalledTimes(1);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Edit image");
  });
});
