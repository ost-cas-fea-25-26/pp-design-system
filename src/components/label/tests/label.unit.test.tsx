import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Label } from "../index";

describe("Label", () => {
  it("renders with default classes", () => {
    const { getByText } = render(<Label>Username</Label>);
    const label = getByText("Username");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("text-sm", "font-medium", "leading-none");
  });

  it("applies error styles when error=true", () => {
    const { getByText } = render(<Label error>Email</Label>);
    const label = getByText("Email");
    expect(label).toHaveClass("text-error");
  });

  it("applies disabled styles when disabled=true", () => {
    const { getByText } = render(<Label disabled>Password</Label>);
    const label = getByText("Password");
    expect(label).toHaveClass(
      "cursor-not-allowed",
      "opacity-60",
      "pointer-events-none",
    );
  });

  it("renders children correctly", () => {
    const { getByText } = render(<Label>My Label</Label>);
    expect(getByText("My Label")).toBeInTheDocument();
  });

  it("passes through custom props (e.g. htmlFor)", () => {
    const { getByText } = render(<Label htmlFor="test-input">Field</Label>);
    const label = getByText("Field");
    expect(label).toHaveAttribute("for", "test-input");
  });
});
