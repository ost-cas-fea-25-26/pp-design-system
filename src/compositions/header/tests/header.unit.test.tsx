import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Header } from "../header";

describe("Header", () => {
  it("renders a header element", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
  });

  it("renders logo when provided", () => {
    const logo = <div data-testid="test-logo">My Logo</div>;
    const { getByTestId } = render(<Header logo={logo} />);
    expect(getByTestId("test-logo")).toBeInTheDocument();
  });

  it("renders actions when provided", () => {
    const actions = <div data-testid="test-actions">My Actions</div>;
    const { getByTestId } = render(<Header actions={actions} />);
    expect(getByTestId("test-actions")).toBeInTheDocument();
  });
});
