import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

import { EditProfileModal } from "../edit-profile-modal";

vi.mock("@/components/icons", () => ({
  CancelIcon: () => <span data-testid="cancel-icon" />,
  CheckmarkIcon: () => <span data-testid="checkmark-icon" />,
}));

describe("EditProfileModal", () => {
  it("renders when open", () => {
    render(
      <EditProfileModal open={true} onOpenChange={vi.fn()} onSave={vi.fn()} />,
    );

    expect(screen.getByText("Edit profile")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("John")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Doe")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("john_doe")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Tell us a bit about yourself…"),
    ).toBeInTheDocument();
  });

  it("closes on cancel", () => {
    const onOpenChange = vi.fn();

    render(
      <EditProfileModal
        open={true}
        onOpenChange={onOpenChange}
        onSave={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByText("Cancel"));

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("submits valid data", async () => {
    const onSave = vi.fn();

    render(
      <EditProfileModal open={true} onOpenChange={vi.fn()} onSave={onSave} />,
    );

    fireEvent.change(screen.getByPlaceholderText("John"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Doe"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("john_doe"), {
      target: { value: "john_doe" },
    });

    fireEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith({
        firstname: "John",
        lastname: "Doe",
        username: "john_doe",
        bio: "",
      });
    });
  });
});
