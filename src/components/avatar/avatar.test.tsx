import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { Avatar } from "./index";

describe("Avatar", () => {
  it("renders fallback and applies size/border classes", () => {
    const { container } = render(
      <Avatar
        size="m"
        border
        src="/avatars/rory.jpg"
        alt="Rory McIlroy"
        fallbackText="RM"
      />,
    );

    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("w-16", "h-16", "border-[6px]");
    expect(screen.getByText("RM")).toBeInTheDocument();
  });
});
