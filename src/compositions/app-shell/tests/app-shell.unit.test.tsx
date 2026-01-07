import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { AppShell } from "../index";

describe("AppShell", () => {
  it("renders the provided header", () => {
    const { getByText } = render(
      <AppShell header={<div>Mock Header</div>}>
        <div>Mock Content</div>
      </AppShell>,
    );

    expect(getByText("Mock Header")).toBeInTheDocument();
  });

  it("renders children inside the main content container", () => {
    const { getByText } = render(
      <AppShell header={<div>Header</div>}>
        <p>Content goes here</p>
      </AppShell>,
    );

    expect(getByText("Content goes here")).toBeInTheDocument();
  });
});
