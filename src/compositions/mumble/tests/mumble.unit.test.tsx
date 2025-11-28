import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Mumble } from "@/compositions";

describe("Mumble", () => {
  const defaultProps = {
    size: "m" as const,
    userName: "Rory McIlroy",
    userHandle: "rory_goat",
    timestamp: "2 hours ago",
    avatarSrc: "/avatars/rory.jpg",
    content: <p>Lorem ipsum dolor sit amet</p>,
    actions: <p>Actions</p>,
  };

  it("renders user name, handle, and content", () => {
    render(<Mumble {...defaultProps} />);
    expect(screen.getByText("Rory McIlroy")).toBeInTheDocument();
    expect(screen.getByText("rory_goat")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  });

  it("renders avatar image when avatarSrc is provided", () => {
    render(<Mumble {...defaultProps} avatarSrc="rory.jpg" />);
    const img = screen.getByAltText("Rory McIlroy");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("rory.jpg"));
  });

  it("does not render avatar image when avatarSrc is not provided", () => {
    render(<Mumble {...defaultProps} avatarSrc={undefined} />);
    expect(screen.queryByAltText("Rory McIlroy")).not.toBeInTheDocument();
  });

  it("renders actions if provided", () => {
    render(
      <Mumble {...defaultProps} actions={<button>Action Button</button>} />,
    );
    expect(screen.getByText("Action Button")).toBeInTheDocument();
  });

  it("applies correct size class", () => {
    const { container } = render(<Mumble {...defaultProps} size="l" />);
    expect(container.querySelector(".paragraph-lg")).toBeInTheDocument();
  });
});
