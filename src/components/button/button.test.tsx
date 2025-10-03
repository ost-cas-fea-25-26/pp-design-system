import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { Button } from "./index";

describe("Button", () => {
  it("renders button with default size and variant", () => {
    const { container } = render(<Button size="default" variant="primary" />);

    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("bg-primary", "p-3");
  });

  it("renders secondary variant", () => {
    const { container } = render(<Button variant="secondary" />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("bg-secondary");
  });

  it("renders gradient variant", () => {
    const { container } = render(<Button variant="gradient" />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass(
      "bg-gradient-to-r",
      "from-pink-500",
      "to-violet-500",
    );
  });

  it("renders large size", () => {
    const { container } = render(<Button size="lg" />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("px-6", "py-4");
  });

  it("renders with children text", () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("renders only with custom SVG child", () => {
    const { container } = render(
      <Button>
        <svg />
      </Button>,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with text and custom SVG child", () => {
    const { getByText, container } = render(
      <Button>
        Hello <svg />
      </Button>,
    );
    expect(getByText("Hello")).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
