import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Toggle } from "../index";

describe("Toggle", () => {
  it("renders default content", () => {
    const { container } = render(
      <Toggle
        activeChildren={<p>Active</p>}
        defaultChildren={<p>Default</p>}
      />,
    );

    expect(container.textContent).toBe("Default");
  });

  it("renders active content initially", () => {
    const { container } = render(
      <Toggle
        isActive={true}
        activeChildren={<p>Active</p>}
        defaultChildren={<p>Default</p>}
      />,
    );

    expect(container.textContent).toBe("Active");
  });

  it("changes content on toggle", async () => {
    const onToggle = vi.fn();
    const { container } = render(
      <Toggle
        activeChildren={<p>Active</p>}
        defaultChildren={<p>Default</p>}
        onToggle={onToggle}
        variant="primary"
      />,
    );

    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("focus-ring-primary");

    // set to active
    fireEvent.click(container.firstChild as HTMLElement);
    await waitFor(() => {
      expect(container.textContent).toBe("Active");
    });
    expect(onToggle).toHaveBeenCalledWith(true);
    expect(root).toHaveAttribute("data-state", "on");

    // set to default
    fireEvent.click(container.firstChild as HTMLElement);
    await waitFor(() => {
      expect(container.textContent).toBe("Default");
    });
    expect(onToggle).toHaveBeenCalledWith(false);
    expect(root).toHaveAttribute("data-state", "off");
  });
});
