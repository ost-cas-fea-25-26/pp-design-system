import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { ButtonBar } from "./button-bar";

describe("ButtonBar", () => {
  it("renders both left and right buttons", () => {
    render(
      <ButtonBar
        leftButton={<button>Left</button>}
        rightButton={<button>Right</button>}
      />,
    );

    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
  });
});
