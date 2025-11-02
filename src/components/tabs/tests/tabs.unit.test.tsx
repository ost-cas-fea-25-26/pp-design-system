import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Tabs } from "../index";

describe("Tabs", () => {
  it("renders all tabs and shows the first content by default", () => {
    render(
      <Tabs
        tabs={[
          { text: "Account", content: <p>Account content</p> },
          { text: "Password", content: <p>Password content</p> },
          { text: "Billing", content: <p>Billing content</p> },
        ]}
      />,
    );

    expect(screen.getByText("Account")).toBeVisible();
    expect(screen.getByText("Password")).toBeVisible();
    expect(screen.getByText("Billing")).toBeVisible();

    const activeTab = screen.getByText("Account");
    expect(activeTab).toHaveAttribute("data-state", "active");

    expect(screen.getByText("Account content")).toBeVisible();
    expect(screen.queryByText("Password content")).not.toBeInTheDocument();
    expect(screen.queryByText("Billing content")).not.toBeInTheDocument();
  });

  it("renders the defaultTab content when provided", () => {
    render(
      <Tabs
        defaultTab="Billing"
        tabs={[
          { text: "Account", content: <p>Account content</p> },
          { text: "Billing", content: <p>Billing content</p> },
        ]}
      />,
    );

    const activeTab = screen.getByText("Billing");
    expect(activeTab).toHaveAttribute("data-state", "active");

    expect(screen.getByText("Billing content")).toBeVisible();
    expect(screen.queryByText("Account content")).not.toBeInTheDocument();
  });
});
