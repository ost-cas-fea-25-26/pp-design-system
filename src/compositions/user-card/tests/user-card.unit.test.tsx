import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { UserCard } from "../index";
import { Button } from "../../../components/button";

describe("UserCard", () => {
  it("renders all elements correctly", () => {
    const { getByTestId, getByRole, getByText } = render(
      <UserCard
        name="Rory McIlroy"
        handle="rory_goat"
        avatarSrc="/avatars/rory.jpg"
        button={<button>Follow</button>}
      />,
    );
    expect(getByRole("button", { name: /rory_goat/i })).toBeInTheDocument();
    expect(getByTestId("avatar-root")).toBeInTheDocument();
    expect(getByText("Rory McIlroy")).toBeInTheDocument();
  });

  it("renders the button if provided", () => {
    const { getByRole } = render(
      <UserCard
        name="Rory McIlroy"
        handle="rory_goat"
        button={<Button>Follow</Button>}
      />,
    );
    expect(getByRole("button", { name: /Follow/i })).toBeInTheDocument();
  });

  it("does not render a button if not provided", () => {
    const { container } = render(
      <UserCard name="Rory McIlroy" handle="rory_goat" />,
    );
    const button = container.querySelector("button");
    expect(button).not.toBe(null);
  });
});
