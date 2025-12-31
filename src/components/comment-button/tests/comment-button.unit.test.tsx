import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CommentButton } from "@/components";

describe("CommentButton", () => {
  it("renders with label", () => {
    render(<CommentButton label="Comment" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByText("Comment")).not.toBeNull();
  });

  it("renders with icon and label", () => {
    const TestIcon = () => <svg data-testid="test-icon" />;
    render(<CommentButton label="Comment" icon={<TestIcon />} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByText("Comment")).not.toBeNull();
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("applies correct className", () => {
    render(<CommentButton label="Comment" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("gap-2");
    expect(button.className).toContain("inline-flex");
    expect(button.className).toContain("rounded-2xl");
    expect(button.className).toContain("focus-ring-primary");
  });
});
