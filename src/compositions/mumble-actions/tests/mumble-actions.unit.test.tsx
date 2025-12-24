import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { MumbleActions } from "@/compositions";

vi.mock("@/components", () => ({
  HeartFilledIcon: () => <span data-testid="heart-filled-icon" />,
  HeartIcon: () => <span data-testid="heart-icon" />,
  ReplyFilledIcon: () => <span data-testid="reply-filled-icon" />,
  ReplyIcon: () => <span data-testid="reply-icon" />,
  ShareIcon: () => <span data-testid="share-icon" />,
  TimedButton: ({
    label,
    onClick,
    icon,
    activeLabel,
  }: {
    label: string;
    onClick: () => void;
    icon: React.ReactNode;
    activeLabel: string;
  }) => (
    <button data-testid="timed-button" onClick={onClick}>
      {icon}
      {label}
      {activeLabel}
    </button>
  ),
  Toggle: ({
    defaultChildren,
    activeChildren,
    onToggle,
    variant,
  }: {
    defaultChildren: React.ReactNode;
    activeChildren: React.ReactNode;
    onToggle?: (nextState: boolean) => void;
    variant: string;
  }) => (
    <button data-testid={`toggle-${variant}`} onClick={() => onToggle?.(true)}>
      {defaultChildren}
      {activeChildren}
    </button>
  ),
}));

describe("MumbleActions", () => {
  it("renders all action buttons and icons", () => {
    render(
      <MumbleActions
        deepLink="https://mumble.app/123"
        likeCounter={2}
        commentCounter={3}
      />,
    );
    expect(screen.getByTestId("toggle-primary")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-accent")).toBeInTheDocument();
    expect(screen.getByTestId("timed-button")).toBeInTheDocument();
    expect(screen.getAllByTestId("heart-filled-icon").length).toBeGreaterThan(
      0,
    );
    expect(screen.getAllByTestId("reply-filled-icon").length).toBeGreaterThan(
      0,
    );
    expect(screen.getAllByTestId("share-icon").length).toBeGreaterThan(0);
  });

  it("calls onLikeToggleHandler when like toggle is clicked", async () => {
    const onLikeToggleHandler = vi.fn();
    render(
      <MumbleActions
        deepLink="https://mumble.app/123"
        likeCounter={1}
        onLikeToggleHandler={onLikeToggleHandler}
      />,
    );
    const likeToggle = screen.getByTestId("toggle-accent");
    fireEvent.click(likeToggle);
    await waitFor(() => {
      expect(onLikeToggleHandler).toHaveBeenCalledWith(true);
    });
  });

  it("calls onCommentToggleHandler when comment toggle is clicked", async () => {
    const onCommentToggleHandler = vi.fn();
    render(
      <MumbleActions
        deepLink="https://mumble.app/123"
        commentCounter={1}
        onCommentToggleHandler={onCommentToggleHandler}
      />,
    );
    const commentToggle = screen.getByTestId("toggle-primary");
    fireEvent.click(commentToggle);
    await waitFor(() => {
      expect(onCommentToggleHandler).toHaveBeenCalledWith(true);
    });
  });

  it("calls clipboard writeText when share button is clicked", async () => {
    const writeText = vi.fn();
    Object.defineProperty(global.navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    render(<MumbleActions deepLink="https://mumble.app/123" />);
    const shareBtn = screen.getByTestId("timed-button");
    fireEvent.click(shareBtn);
    await waitFor(() => {
      expect(writeText).toHaveBeenCalledWith("https://mumble.app/123");
    });
  });
});
