import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { IconButton } from "../index";
import { iconButtonVariants } from "../variants";
import { SettingsIcon } from "@/components/icons";

describe("IconButton", () => {
  it("renders the label and icon", () => {
    const { getByText, getByTestId } = render(
      <IconButton
        label="Settings"
        IconComponent={SettingsIcon}
        color="primary"
        layout="horizontal"
      />,
    );

    expect(getByText("Settings")).toBeInTheDocument();
    expect(getByTestId("icon-SettingsIcon")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <IconButton
        label="Settings"
        IconComponent={SettingsIcon}
        color="neutral"
        layout="stacked"
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies compound variant styles for horizontal layout", () => {
    const className = iconButtonVariants({
      color: "primary",
      layout: "horizontal",
    });

    const { getByRole } = render(
      <IconButton
        label="Settings"
        IconComponent={SettingsIcon}
        color="primary"
        layout="horizontal"
      />,
    );

    const button = getByRole("button");
    expect(button.className).toContain("cursor-pointer"); // test base styles
    expect(button.className).toContain("flex-row"); // test layout variant
    expect(button.className).toContain("text-primary-600"); // test color variant
    expect(button.className).toBe(className);
  });

  it("applies compound variant styles for stacked layout", () => {
    const className = iconButtonVariants({
      color: "neutral",
      layout: "stacked",
    });

    const { getByRole } = render(
      <IconButton
        label="Settings"
        IconComponent={SettingsIcon}
        color="neutral"
        layout="stacked"
      />,
    );

    const button = getByRole("button");
    expect(button.className).toContain("bg-neutral-600");
    expect(button.className).toContain("hover:bg-neutral-700");
    expect(button.className).toContain("flex-col");
    expect(button.className).toBe(className);
  });

  it("uses default props correctly", () => {
    const { getByRole } = render(
      <IconButton
        label="Settings"
        IconComponent={SettingsIcon}
        color="primary"
        layout="horizontal"
      />,
    );

    const button = getByRole("button");
    expect(button.className).toContain("text-primary-600");
    expect(button.className).toContain("flex-row");
  });

  it("applies rotate animation class when animation='rotate'", () => {
    const { getByTestId } = render(
      <IconButton
        label="Settings"
        IconComponent={SettingsIcon}
        color="primary"
        layout="horizontal"
        animation="rotate"
      />,
    );
    expect(getByTestId("icon-wrapper").className).toContain(
      "group-hover:rotate-180",
    );
  });
});
