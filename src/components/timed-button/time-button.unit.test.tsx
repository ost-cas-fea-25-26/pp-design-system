import { TimedButton } from "./index";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

describe("Timed Button", () => {
  it("renders idle state", () => {
    const { getByText } = render(
      <TimedButton label="Click me" activeLabel="Active" />,
    );
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("renders with icon", () => {
    const { getByTestId } = render(
      <TimedButton icon={<svg data-testid="icon" />} label="Icon Button" />,
    );
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  it("shows active label after click", async () => {
    const { getByText } = render(
      <TimedButton
        label="Click me"
        activeLabel="Active"
        onClick={vi.fn().mockResolvedValue(undefined)}
        duration={10}
      />,
    );

    const button = getByText("Click me");
    fireEvent.click(button);
    await waitFor(() => expect(getByText("Active")).toBeInTheDocument());
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn().mockResolvedValue(undefined);
    const { getByText } = render(
      <TimedButton label="Click" onClick={onClick} />,
    );
    fireEvent.click(getByText("Click"));
    await waitFor(() => expect(onClick).toHaveBeenCalled());
  });

  it("does not call onClick if already processing", () => {
    let resolve: () => void;
    const onClick = vi.fn(
      () =>
        new Promise<void>((r) => {
          resolve = r;
        }),
    );
    const { getByText } = render(
      <TimedButton label="Click" onClick={onClick} />,
    );
    const button = getByText("Click");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    resolve!();
  });
});
