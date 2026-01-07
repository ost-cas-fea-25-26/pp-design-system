import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import toast from "react-hot-toast";
import { Toaster } from "../index";

describe("Toaster", () => {
  it("renders the toaster container", () => {
    const { container } = render(<Toaster />);
    expect(container).toBeInTheDocument();
  });

  it("renders a toast message when triggered", async () => {
    const { findByText } = render(<Toaster />);

    toast("Hello toast");

    expect(await findByText("Hello toast")).toBeInTheDocument();
  });

  it("renders a success toast", async () => {
    const { findByText } = render(<Toaster />);

    toast.success("Success message");

    expect(await findByText("Success message")).toBeInTheDocument();
  });
});
