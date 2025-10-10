import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Link } from "./link";

describe("Link", () => {
  it("renders with label and href", () => {
    const { container } = render(
      <Link label="Mumble" href="https://mumble.com" />,
    );
    const link = container.firstChild as HTMLElement;
    expect(link.getAttribute("href")).toBe("https://mumble.com");
    expect(link.getAttribute("target")).toBe("_self");
    expect(screen.getByText("Mumble")).not.toBeNull();
  });

  it("renders with target _blank", () => {
    const { container } = render(
      <Link label="External" href="https://external.com" target="_blank" />,
    );
    const link = container.firstChild as HTMLElement;
    expect(link.getAttribute("target")).toBe("_blank");
  });

  it("applies correct className", () => {
    const { container } = render(<Link label="Styled" href="#" />);
    const link = container.firstChild as HTMLElement;
    expect(link.className).toContain("label-sm");
    expect(link.className).toContain("text-primary");
    expect(link.className).toContain("hover:decoration-violet-200");
  });

  it("sets title attribute to label", () => {
    const { container } = render(<Link label="TitleTest" href="#" />);
    const link = container.firstChild as HTMLElement;
    expect(link.getAttribute("title")).toBe("TitleTest");
  });
});
