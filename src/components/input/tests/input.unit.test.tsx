import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Input } from "../index";

vi.mock("../../icons", () => ({
  CancelIcon: () => <svg data-testid="cancel-icon" />,
}));

describe("Input", () => {
  it("renders input with default classes", () => {
    const { container } = render(<Input type="text" />);
    expect(container.querySelector("input")).toBeInTheDocument();
  });

  it("renders with a custom icon", () => {
    const { getByTestId } = render(
      <Input icon={<svg data-testid="custom-icon" />} />,
    );
    expect(getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders with aria-invalid=true and shows error icon", () => {
    const { getByTestId } = render(<Input aria-invalid="true" />);
    expect(getByTestId("cancel-icon")).toBeInTheDocument();
  });

  it("applies disabled styles", () => {
    const { container } = render(<Input disabled />);
    const input = container.querySelector("input");
    expect(input).toBeDisabled();
  });
});
