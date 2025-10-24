import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { FileUpload } from "./file-upload";

describe("FileUpload", () => {
  it("renders dropzone and upload button", () => {
    render(
      <FileUpload
        title="Upload your file"
        description="JPEG or PNG up to 50MB"
        selectLabel="Select File"
        removeLabel="Remove"
        file={null}
        onFileChange={vi.fn()}
      />,
    );

    expect(screen.getByText("Upload your file")).toBeInTheDocument();
    expect(screen.getByText("Select File")).toBeInTheDocument();
    expect(screen.getByTestId("upload-icon")).toBeInTheDocument();
  });

  it("calls onFileChange when a file is selected", async () => {
    const handleFileChange = vi.fn();
    render(
      <FileUpload
        title="Upload"
        description="Allowed: JPG, PNG"
        selectLabel="Select File"
        removeLabel="Remove"
        file={null}
        onFileChange={handleFileChange}
      />,
    );

    const file = new File(["hello"], "test-image.jpg", { type: "image/jpeg" });
    const hiddenInput = screen.getByRole("textbox", {
      hidden: true,
    }) as HTMLInputElement;

    fireEvent.change(hiddenInput, { target: { files: [file] } });

    await waitFor(() => expect(handleFileChange).toHaveBeenCalledTimes(1));
    expect(handleFileChange).toHaveBeenCalledWith(file);
  });

  it("renders uploaded file details with formatted size", () => {
    const mockFile = new File([new ArrayBuffer(150 * 1024)], "avatar.png", {
      type: "image/png",
    });

    render(
      <FileUpload
        title="Upload your file"
        description="JPEG or PNG up to 50MB"
        selectLabel="Select File"
        removeLabel="Remove"
        file={mockFile}
        onFileChange={vi.fn()}
      />,
    );

    expect(screen.getByText("avatar.png")).toBeInTheDocument();
    expect(screen.getByText(/\(150 KB\)/)).toBeInTheDocument();
  });

  it("formats large file sizes correctly in MB", () => {
    const mockFile = new File([new ArrayBuffer(5 * 1024 * 1024)], "photo.jpg", {
      type: "image/jpeg",
    });

    render(
      <FileUpload
        title="Upload your file"
        description="JPEG or PNG up to 50MB"
        selectLabel="Select File"
        removeLabel="Remove"
        file={mockFile}
        onFileChange={vi.fn()}
      />,
    );

    expect(screen.getByText("photo.jpg")).toBeInTheDocument();
    expect(screen.getByText(/\(5\.0 MB\)/)).toBeInTheDocument();
  });
});
