import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { LogoLink } from "../index";

describe("LogoLink", () => {
  it("renders both desktop and mobile logos", () => {
    const { getAllByAltText } = render(<LogoLink />);

    const logos = getAllByAltText("Mumble");
    expect(logos.length).toBe(2);
  });

  it("uses a normal a tag by default", () => {
    const { getByRole } = render(<LogoLink />);
    const link = getByRole("link");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/");
  });

  it("respects the href prop", () => {
    const { getByRole } = render(<LogoLink href="/dashboard" />);
    expect(getByRole("link")).toHaveAttribute("href", "/dashboard");
  });

  it("supports custom link components via asLink", () => {
    const FakeLink = ({ href, children, ...rest }: any) => (
      <span data-testid="custom-link" data-href={href} {...rest}>
        {children}
      </span>
    );

    const { getByTestId } = render(<LogoLink href="/test" asLink={FakeLink} />);

    const wrapper = getByTestId("custom-link");
    expect(wrapper).toHaveAttribute("data-href", "/test");
  });
});
