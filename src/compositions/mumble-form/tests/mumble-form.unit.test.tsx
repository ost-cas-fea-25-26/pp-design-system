import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { MumbleForm } from "@/compositions/mumble-form";

describe("MumbleForm", () => {
  const onSubmitHandler = vi.fn(async () => Promise.resolve());
  const defaultProps = {
    placeholder: "Type your reply...",
    submitButtonText: "Send",
    uploadButtonText: "Upload",
    errorMessage: "Error",
    onSubmitHandler,
  };

  beforeEach(() => {
    onSubmitHandler.mockClear();
  });

  it("renders textarea with placeholder", () => {
    render(<MumbleForm {...defaultProps} />);
    expect(
      screen.getByPlaceholderText("Type your reply..."),
    ).toBeInTheDocument();
  });

  it("renders submit and upload buttons with correct text", () => {
    render(<MumbleForm {...defaultProps} />);
    expect(screen.getByText("Send")).toBeInTheDocument();
    expect(screen.getByText("Upload")).toBeInTheDocument();
  });

  it("renders upload icon in upload button", () => {
    render(<MumbleForm {...defaultProps} />);
    const uploadButton = screen.getByText("Upload").closest("button");
    expect(uploadButton?.querySelector("svg")).toBeInTheDocument();
  });

  it("shows validation error if replyContent is empty and form is submitted", async () => {
    render(<MumbleForm {...defaultProps} />);
    fireEvent.click(screen.getByText("Send"));
    await waitFor(() => {
      expect(screen.getByText("Error")).toBeInTheDocument();
    });
  });

  it("renders form title when provided", () => {
    render(<MumbleForm {...defaultProps} formTitle="Share your thoughts" />);
    expect(screen.getByText("Share your thoughts")).toBeInTheDocument();
  });
});
