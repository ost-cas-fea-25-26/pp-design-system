import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Link } from "../index";

describe("Link", () => {
  it("renders with title and href", () => {
    const { container } = render(
      <Link title="Mumble" href="https://mumble.com">
        Click me
      </Link>,
    );
    const link = container.firstChild as HTMLElement;
    expect(link.getAttribute("href")).toBe("https://mumble.com");
    expect(link.getAttribute("target")).toBe("_self");
    expect(link.getAttribute("title")).toBe("Mumble");
    expect(screen.getByText("Click me")).not.toBeNull();
  });

  it("renders with target _blank", () => {
    const { container } = render(
      <Link title="External" href="https://external.com" target="_blank" />,
    );
    const link = container.firstChild as HTMLElement;
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("applies correct className", () => {
    const { container } = render(<Link title="Styled" href="#" />);
    const link = container.firstChild as HTMLElement;
    expect(link.className).toContain("text-primary");
    expect(link.className).toContain("hover:decoration-primary-200");
  });

  it("renders children when asChild is true", () => {
    render(
      <Link title="Child" href="#" asChild>
        <span>Child</span>
      </Link>,
    );
    expect(screen.getByText("Child")).not.toBeNull();
  });
});
