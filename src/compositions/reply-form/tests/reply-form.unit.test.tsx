import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { ReplyForm } from "@/compositions/reply-form";

describe("ReplyForm", () => {
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
    render(<ReplyForm {...defaultProps} />);
    expect(
      screen.getByPlaceholderText("Type your reply..."),
    ).toBeInTheDocument();
  });

  it("renders submit and upload buttons with correct text", () => {
    render(<ReplyForm {...defaultProps} />);
    expect(screen.getByText("Send")).toBeInTheDocument();
    expect(screen.getByText("Upload")).toBeInTheDocument();
  });

  it("renders upload icon in upload button", () => {
    render(<ReplyForm {...defaultProps} />);
    const uploadButton = screen.getByText("Upload").closest("button");
    expect(uploadButton?.querySelector("svg")).toBeInTheDocument();
  });

  it("shows validation error if replyContent is empty and form is submitted", async () => {
    render(<ReplyForm {...defaultProps} />);
    fireEvent.click(screen.getByText("Send"));
    await waitFor(() => {
      expect(screen.getByText("Error")).toBeInTheDocument();
    });
  });
});
