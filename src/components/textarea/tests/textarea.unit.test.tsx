import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Textarea } from "../index";

vi.mock("../../icons", () => ({
  CancelIcon: () => <svg data-testid="cancel-icon" />,
}));

describe("Textarea", () => {
  it("renders textarea with default classes", () => {
    const { container } = render(<Textarea />);
    expect(container.querySelector("textarea")).toBeInTheDocument();
  });

  it("renders with a custom icon", () => {
    const { getByTestId } = render(
      <Textarea icon={<svg data-testid="custom-icon" />} />,
    );
    expect(getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders with aria-invalid=true and shows error icon", () => {
    const { getByTestId } = render(<Textarea aria-invalid="true" />);
    expect(getByTestId("cancel-icon")).toBeInTheDocument();
  });

  it("applies disabled styles", () => {
    const { container } = render(<Textarea disabled />);
    const textarea = container.querySelector("textarea");
    expect(textarea).toBeDisabled();
  });

  it("renders with defaultValue", () => {
    const { container } = render(<Textarea defaultValue="Hello world" />);
    const textarea = container.querySelector("textarea");
    expect(textarea).toHaveValue("Hello world");
  });
});
