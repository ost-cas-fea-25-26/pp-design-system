import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FormProvider,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../index";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";

vi.mock("../../icons", () => ({
  CancelIcon: () => <svg data-testid="cancel-icon" />,
}));

const schema = z.object({
  firstName: z.string().min(2, "First name is required."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

describe("Form integration", () => {
  const TestForm = ({ onSubmit = vi.fn() }) => {
    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: { firstName: "", email: "", message: "" },
    });

    return (
      <FormProvider {...form}>
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

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    );
  };

  it("renders all form fields", () => {
    render(<TestForm />);
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Message")).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    render(<TestForm />);
    fireEvent.click(screen.getByText("Submit"));

    expect(
      await screen.findByText("First name is required."),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Please enter a valid email address."),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Message must be at least 5 characters."),
    ).toBeInTheDocument();
  });

  it("sets aria-invalid correctly when invalid", async () => {
    render(<TestForm />);
    fireEvent.click(screen.getByText("Submit"));

    const textarea = await screen.findByPlaceholderText(
      "Write your message...",
    );
    await waitFor(() =>
      expect(textarea).toHaveAttribute("aria-invalid", "true"),
    );
    expect(textarea).toHaveAttribute("aria-describedby");
  });

  it("submits valid data successfully", async () => {
    const handleSubmit = vi.fn();
    render(<TestForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("John"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Write your message..."), {
      target: { value: "Hello there!" },
    });

    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        firstName: "John",
        email: "john@example.com",
        message: "Hello there!",
      },
      expect.anything(),
    );
  });
});
