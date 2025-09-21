import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Button } from "./button";

describe("Button", () => {
  it("renders with text and calls onClick", () => {
    const handleClick = vi.fn();

    render(
      <Button variant="default" size="default" onClick={handleClick}>
        Click me
      </Button>,
    );

    const btn = screen.getByRole("button", { name: /click me/i });

    // verifies it’s in the document and has base classes
    expect(btn).toBeInTheDocument();
    expect(btn.className).toContain("inline-flex");

    // simulate a click and ensure handler fires
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
