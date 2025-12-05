import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UploadImageModal } from "../upload-image-modal";
import "@testing-library/jest-dom";

vi.mock("@/components/icons", () => ({
  CancelIcon: () => <span data-testid="cancel-icon" />,
  CheckmarkIcon: () => <span data-testid="checkmark-icon" />,
  UploadIcon: () => <span data-testid="upload-icon" />,
}));

describe("UploadImageModal", () => {
  it("renders modal content when open", () => {
    render(
      <UploadImageModal open={true} onOpenChange={vi.fn()} onSave={vi.fn()} />,
    );

    expect(screen.getByText("Upload Image")).toBeInTheDocument();
    expect(screen.getAllByTestId("upload-icon").length).toBeGreaterThan(0);
  });

  it("closes when Cancel is clicked", () => {
    const onOpenChange = vi.fn();

    render(
      <UploadImageModal
        open={true}
        onOpenChange={onOpenChange}
        onSave={vi.fn()}
      />,
    );

    const cancelBtn = screen.getByText("Cancel");
    fireEvent.click(cancelBtn);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("shows an error when submitting with no file selected", async () => {
    const onSave = vi.fn();

    render(
      <UploadImageModal open={true} onOpenChange={vi.fn()} onSave={onSave} />,
    );

    const saveButton = screen.getByText("Save");

    fireEvent.click(saveButton);

    expect(
      await screen.findByText("Please upload an image."),
    ).toBeInTheDocument();

    expect(onSave).not.toHaveBeenCalled();
  });

  it("submits a file and calls onSave", async () => {
    const onSave = vi.fn();
    const file = new File(["hello"], "avatar.png", { type: "image/png" });

    render(
      <UploadImageModal open={true} onOpenChange={vi.fn()} onSave={onSave} />,
    );

    const input = screen.getByTestId("file-upload-input");

    fireEvent.change(input, { target: { files: [file] } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledTimes(1);
      expect(onSave).toHaveBeenCalledWith(file);
    });
  });
});
