import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./index";
import { Input } from "../input";
import { Button } from "../button";

vi.mock("../icons", () => ({
  CancelIcon: () => <svg data-testid="cancel-icon" />,
}));

const schema = z.object({
  firstName: z.string().min(2, "First name is required."),
  email: z.string().email("Please enter a valid email address."),
});

describe("Form integration", () => {
  const TestForm = ({ onSubmit = vi.fn() }) => {
    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: { firstName: "", email: "" },
    });

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  };

  it("renders the form structure", () => {
    render(<TestForm />);
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    render(<TestForm />);
    fireEvent.click(screen.getByText("Submit"));

    // ✅ wait for validation messages
    expect(
      await screen.findByText("First name is required."),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Please enter a valid email address."),
    ).toBeInTheDocument();
  });

  it("sets aria-invalid correctly when invalid", async () => {
    render(<TestForm />);
    fireEvent.click(screen.getByText("Submit"));

    const input = await screen.findByPlaceholderText("John");
    await waitFor(() => expect(input).toHaveAttribute("aria-invalid", "true"));
    expect(input).toHaveAttribute("aria-describedby");
  });

  it("submits valid data successfully", async () => {
    const handleSubmit = vi.fn();
    const ValidForm = () => {
      const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: { firstName: "", email: "" },
      });

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      );
    };

    render(<ValidForm />);
    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  });
});
