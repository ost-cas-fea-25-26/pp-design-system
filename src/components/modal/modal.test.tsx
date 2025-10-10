import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Modal } from "./modal";

vi.mock("../icons", () => ({
  HeartIcon: () => <span data-testid="mock-heart-icon" />,
}));

describe("Modal", () => {
  it("renders correctly when open", () => {
    render(
      <Modal
        open={true}
        onOpenChange={vi.fn()}
        title="Test Modal"
        footer={<div>Footer content</div>}
      >
        <p>Modal content</p>
      </Modal>,
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
    expect(screen.getByText("Footer content")).toBeInTheDocument();
    expect(screen.getByTestId("mock-heart-icon")).toBeInTheDocument();
  });

  it("does not render content when closed", () => {
    render(
      <Modal
        open={false}
        onOpenChange={vi.fn()}
        title="Hidden Modal"
        footer={<div>Footer</div>}
      >
        <p>Hidden content</p>
      </Modal>,
    );

    expect(screen.queryByText("Hidden Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("Hidden content")).not.toBeInTheDocument();
  });

  it("calls onOpenChange(false) when close button is clicked", () => {
    const onOpenChange = vi.fn();

    render(
      <Modal
        open={true}
        onOpenChange={onOpenChange}
        title="Close Test"
        footer={<div>Footer</div>}
      >
        <p>Some content</p>
      </Modal>,
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
