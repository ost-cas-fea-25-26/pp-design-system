import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { Avatar } from "../index";

vi.mock("../../icons", () => ({
  EditIcon: () => <svg data-testid="edit-icon" />,
}));

describe("Avatar", () => {
  it("renders fallback and applies size/border classes", () => {
    render(
      <Avatar
        size="m"
        border
        src="/avatars/rory.jpg"
        alt="Rory McIlroy"
        fallbackText="RM"
      />,
    );

    const avatarRoot = screen.getByTestId("avatar-root");
    expect(avatarRoot).toHaveClass("w-16", "h-16", "border-[6px]");
    expect(screen.getByText("RM")).toBeInTheDocument();
  });

  it("renders editable button when editable is true", () => {
    const handleEdit = vi.fn();

    render(
      <Avatar
        editable
        alt="John Doe"
        fallbackText="JD"
        onEditClick={handleEdit}
      />,
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("edit-icon")).toBeInTheDocument();
  });

  it("does not render edit button when editable is false", () => {
    render(<Avatar alt="John Doe" fallbackText="JD" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("calls onEditClick when edit button is clicked", () => {
    const handleEdit = vi.fn();

    render(
      <Avatar
        editable
        alt="John Doe"
        fallbackText="JD"
        onEditClick={handleEdit}
      />,
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleEdit).toHaveBeenCalledTimes(1);
  });
});
