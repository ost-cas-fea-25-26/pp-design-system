import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { MumbleSubmission } from "@/compositions/mumble-submission";

describe("MumbleSubmission", () => {
  const avatar = (
    <img src="/avatars/rory.jpg" alt="Test Avatar" data-testid="avatar" />
  );
  const form = <form data-testid="form">Form Content</form>;

  it("renders the form content", () => {
    render(<MumbleSubmission avatar={avatar} form={form} />);
    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByText("Form Content")).toBeInTheDocument();
  });

  it("renders the avatar if provided", () => {
    render(<MumbleSubmission avatar={avatar} form={form} />);
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByAltText("Test Avatar")).toBeInTheDocument();
  });

  it("applies the correct container classes", () => {
    const { container } = render(
      <MumbleSubmission avatar={avatar} form={form} />,
    );
    const rootDiv = container.firstChild as HTMLElement;
    expect(rootDiv.className).toContain("relative");
    expect(rootDiv.className).toContain("bg-white");
    expect(rootDiv.className).toContain("rounded-2xl");
    expect(rootDiv.className).toContain("shadow-sm");
  });

  it("positions the avatar absolutely", () => {
    render(<MumbleSubmission avatar={avatar} form={form} />);
    const avatarDiv = screen.getByTestId("avatar").parentElement;
    expect(avatarDiv).toHaveClass("absolute");
    expect(avatarDiv).toHaveClass("top-4");
    expect(avatarDiv).toHaveClass("-left-8");
    expect(avatarDiv).toHaveClass("z-10");
  });
});
