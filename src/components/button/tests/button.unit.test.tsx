import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { Button } from "../index";

describe("Button", () => {
  it("renders button with default size and variant", () => {
    const { container } = render(<Button size="default" variant="primary" />);

    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("bg-primary", "p-3");
  });

  it("renders neutral variant", () => {
    const { container } = render(<Button variant="neutral" />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("bg-neutral");
  });

  it("renders gradient variant", () => {
    const { container } = render(<Button variant="gradient" />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("bg-gradient-to-r", "from-accent", "to-primary");
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

  it("applies full width when fullWidth is true", () => {
    const { container } = render(<Button fullWidth>Full Width</Button>);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("w-full");
  });

  it("does not apply full width when fullWidth is not passed", () => {
    const { container } = render(<Button>Normal</Button>);
    const root = container.firstChild as HTMLElement;
    expect(root).not.toHaveClass("w-full");
  });

  it("applies circular style when isCircular is true", () => {
    const { container } = render(<Button isCircular>+</Button>);
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("rounded-full");
  });

  it("does not apply circular style when isCircular is false", () => {
    const { container } = render(<Button>Not circular</Button>);
    const root = container.firstChild as HTMLElement;
    expect(root.className).not.toContain("rounded-full");
  });
});
